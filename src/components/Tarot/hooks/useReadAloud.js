import { useCallback, useEffect, useRef, useState } from 'react'

let activeReader = null

export const stopActiveReadAloud = () => {
  if (!activeReader) return
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel()
  activeReader.finish()
  activeReader = null
}

const getSpeechApi = () => {
  if (typeof window === 'undefined') return null
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return null
  return window.speechSynthesis
}

const chooseLocalVoice = speech => {
  const voices = speech.getVoices?.() || []
  return voices.find(voice => voice.lang?.toLowerCase().startsWith('en') && voice.localService)
    || null
}

const useReadAloud = text => {
  const [status, setStatus] = useState('idle')
  const [supported, setSupported] = useState(false)
  const utteranceRef = useRef(null)
  const previousTextRef = useRef(text)

  const stop = useCallback(() => {
    const speech = getSpeechApi()
    if (activeReader?.utterance === utteranceRef.current) {
      speech?.cancel()
      activeReader = null
    }
    utteranceRef.current = null
    setStatus('idle')
  }, [])

  useEffect(() => {
    const speech = getSpeechApi()
    if (!speech) return undefined
    const updateSupport = () => setSupported(Boolean(chooseLocalVoice(speech)))
    updateSupport()
    speech.addEventListener?.('voiceschanged', updateSupport)
    return () => {
      speech.removeEventListener?.('voiceschanged', updateSupport)
      if (activeReader?.utterance === utteranceRef.current) {
        speech.cancel()
        activeReader = null
      }
    }
  }, [])

  useEffect(() => {
    if (previousTextRef.current !== text) {
      stop()
      previousTextRef.current = text
    }
  }, [text, stop])

  const play = useCallback(() => {
    const speech = getSpeechApi()
    if (!speech || !text) return
    const voice = chooseLocalVoice(speech)
    if (!voice) {
      setSupported(false)
      return
    }

    if (activeReader && activeReader.utterance !== utteranceRef.current) stopActiveReadAloud()
    if (status === 'paused' && activeReader?.utterance === utteranceRef.current) {
      speech.resume()
      setStatus('playing')
      return
    }

    speech.cancel()
    const utterance = new window.SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.94
    utterance.pitch = 1
    utterance.voice = voice

    const isCurrent = () => utteranceRef.current === utterance
    utterance.onstart = () => {
      if (isCurrent()) setStatus('playing')
    }
    utterance.onpause = () => {
      if (isCurrent()) setStatus('paused')
    }
    utterance.onresume = () => {
      if (isCurrent()) setStatus('playing')
    }
    utterance.onend = () => {
      if (!isCurrent()) return
      if (activeReader?.utterance === utterance) activeReader = null
      utteranceRef.current = null
      setStatus('idle')
    }
    utterance.onerror = event => {
      if (!isCurrent()) return
      if (event.error !== 'canceled' && event.error !== 'interrupted') setStatus('error')
      else setStatus('idle')
      if (activeReader?.utterance === utterance) activeReader = null
      utteranceRef.current = null
    }

    utteranceRef.current = utterance
    activeReader = {
      utterance,
      finish: () => {
        if (utteranceRef.current === utterance) utteranceRef.current = null
        setStatus('idle')
      },
    }
    setStatus('playing')
    speech.speak(utterance)
  }, [status, text])

  const pause = useCallback(() => {
    const speech = getSpeechApi()
    if (!speech || activeReader?.utterance !== utteranceRef.current) return
    speech.pause()
    setStatus('paused')
  }, [])

  return { supported, status, play, pause, stop }
}

export default useReadAloud

import { useCallback, useEffect, useRef, useState } from 'react'

let activeReader = null

export const stopActiveReadAloud = () => {
  if (!activeReader) return
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel()
  activeReader.setIdle()
  activeReader = null
}

const getSpeechApi = () => {
  if (typeof window === 'undefined') return null
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return null
  return window.speechSynthesis
}

const chooseVoice = speech => {
  const voices = speech.getVoices?.() || []
  return voices.find(voice => voice.lang?.toLowerCase().startsWith('en') && voice.localService)
    || voices.find(voice => voice.lang?.toLowerCase().startsWith('en'))
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
    setSupported(Boolean(getSpeechApi()))
    return () => {
      if (activeReader?.utterance === utteranceRef.current) {
        getSpeechApi()?.cancel()
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
    const voice = chooseVoice(speech)
    if (voice) utterance.voice = voice

    utterance.onstart = () => setStatus('playing')
    utterance.onpause = () => setStatus('paused')
    utterance.onresume = () => setStatus('playing')
    utterance.onend = () => {
      if (activeReader?.utterance === utterance) activeReader = null
      if (utteranceRef.current === utterance) utteranceRef.current = null
      setStatus('idle')
    }
    utterance.onerror = event => {
      if (event.error !== 'canceled' && event.error !== 'interrupted') setStatus('error')
      else setStatus('idle')
      if (activeReader?.utterance === utterance) activeReader = null
      if (utteranceRef.current === utterance) utteranceRef.current = null
    }

    utteranceRef.current = utterance
    activeReader = { utterance, setIdle: () => setStatus('idle') }
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

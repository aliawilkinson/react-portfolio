import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import useReadAloud, { stopActiveReadAloud } from '../../src/components/Tarot/hooks/useReadAloud'

class MockUtterance {
  constructor(text) {
    this.text = text
    this.lang = ''
    this.rate = 1
    this.pitch = 1
  }
}

describe('useReadAloud', () => {
  let speech

  beforeEach(() => {
    speech = {
      cancel: vi.fn(),
      pause: vi.fn(),
      resume: vi.fn(),
      getVoices: vi.fn(() => [{ lang: 'en-US', localService: true }]),
      speak: vi.fn(utterance => utterance.onstart?.()),
    }
    Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: speech })
    Object.defineProperty(window, 'SpeechSynthesisUtterance', { configurable: true, value: MockUtterance })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    delete window.speechSynthesis
    delete window.SpeechSynthesisUtterance
  })

  it('starts browser speech from a user action', () => {
    const { result, unmount } = renderHook(() => useReadAloud('A calm reading.'))

    expect(result.current.supported).toBe(true)
    act(() => result.current.play())

    expect(speech.speak).toHaveBeenCalledOnce()
    expect(speech.speak.mock.calls[0][0].text).toBe('A calm reading.')
    expect(result.current.status).toBe('playing')
    unmount()
  })

  it('pauses, resumes, and stops the active reading', () => {
    const { result } = renderHook(() => useReadAloud('Read this.'))

    act(() => result.current.play())
    act(() => result.current.pause())
    expect(speech.pause).toHaveBeenCalledOnce()
    expect(result.current.status).toBe('paused')

    act(() => result.current.play())
    expect(speech.resume).toHaveBeenCalledOnce()
    expect(result.current.status).toBe('playing')

    act(() => result.current.stop())
    expect(speech.cancel).toHaveBeenCalled()
    expect(result.current.status).toBe('idle')
  })

  it('cancels speech when the reading leaves the page', () => {
    const { result, unmount } = renderHook(() => useReadAloud('Do not keep speaking.'))
    act(() => result.current.play())

    unmount()

    expect(speech.cancel).toHaveBeenCalled()
  })

  it('stops the active reading when a new question begins', () => {
    const { result } = renderHook(() => useReadAloud('The previous reading.'))
    act(() => result.current.play())

    act(() => stopActiveReadAloud())

    expect(speech.cancel).toHaveBeenCalled()
    expect(result.current.status).toBe('idle')
  })
})

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import LampToggle from '../../src/components/Header/LampToggle'
import useTheme from '../../src/hooks/useTheme'

const ThemedLamp = () => {
  const { theme, toggleTheme } = useTheme()
  return <LampToggle isOn={theme !== 'dark'} onToggle={toggleTheme} />
}

describe('LampToggle', () => {
  beforeEach(() => {
    cleanup()
    // jsdom here ships without localStorage, so give the hook an in-memory one
    const store = new Map()
    vi.stubGlobal('localStorage', {
      getItem: (key) => (store.has(key) ? store.get(key) : null),
      setItem: (key, value) => store.set(key, String(value)),
    })
    delete document.documentElement.dataset.theme
  })

  it('starts lit in light mode', () => {
    render(<ThemedLamp />)
    expect(screen.getByRole('button', { name: /turn the lamp off/i })).toBeTruthy()
    expect(document.documentElement.dataset.theme).toBe('light')
  })

  it('switches to dark mode when tapped and back when tapped again', () => {
    render(<ThemedLamp />)
    fireEvent.click(screen.getByRole('button'))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(screen.getByRole('button', { name: /turn the lamp on/i })).toBeTruthy()

    fireEvent.click(screen.getByRole('button'))
    expect(document.documentElement.dataset.theme).toBe('light')
  })

  it('remembers dark mode across visits', () => {
    window.localStorage.setItem('theme', 'dark')
    render(<ThemedLamp />)
    expect(screen.getByRole('button', { name: /turn the lamp on/i })).toBeTruthy()
    expect(document.documentElement.dataset.theme).toBe('dark')
  })
})

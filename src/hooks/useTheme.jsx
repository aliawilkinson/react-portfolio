import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

const readStoredTheme = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

// Light is the default (the lamp starts on); the visitor's choice is remembered.
// index.html applies the stored theme before first paint to avoid a flash.
const useTheme = () => {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}

export default useTheme

import { useEffect, useState } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('sea-theme') || 'night')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    localStorage.setItem('sea-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'night' ? 'light' : 'night'))

  return { theme, toggleTheme }
}

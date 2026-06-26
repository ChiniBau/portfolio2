import { GiSun, GiMoon } from 'react-icons/gi'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      title={theme === 'night' ? 'Switch to Day Sea' : 'Switch to Night Sea'}
      className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold/10 transition"
    >
      {theme === 'night' ? <GiSun /> : <GiMoon />}
    </button>
  )
}

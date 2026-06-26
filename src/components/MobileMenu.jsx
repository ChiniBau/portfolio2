import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { GiCrossedSabres } from 'react-icons/gi'
import ThemeToggle from './ThemeToggle'
import MusicToggle from './MusicToggle'

const links = [
  { to: '/about', label: 'About Me' },
  { to: '/works', label: 'My Works' },
  { to: '/contact', label: 'Contact Me' },
]

export default function MobileMenu({ open, onClose, theme, toggleTheme }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-navy/90 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="parchment rope-border rounded-lg w-full max-w-sm p-8 relative text-navy"
            initial={{ scaleY: 0.05, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0.05, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-crimson text-2xl"
              aria-label="Close menu"
            >
              <GiCrossedSabres />
            </button>

            <p className="font-display text-center text-lg mb-6 tracking-widest uppercase">
              Choose Your Route
            </p>

            <nav className="flex flex-col gap-5 items-center font-display text-xl">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? 'text-crimson' : 'text-navy hover:text-ocean'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex justify-center gap-4 mt-8">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <MusicToggle />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

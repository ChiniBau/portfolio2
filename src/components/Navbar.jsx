import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiAnchor, GiHamburgerMenu } from 'react-icons/gi'
import ThemeToggle from './ThemeToggle'
import MusicToggle from './MusicToggle'

const links = [
  { to: '/about', label: 'About Me' },
  { to: '/works', label: 'My Works' },
  { to: '/contact', label: 'Contact Me' },
]

export default function Navbar({ theme, toggleTheme, onOpenMenu, onHatClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/60 backdrop-blur-md shadow-lg' : 'bg-navy/95'
      } border-b border-gold/20`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <NavLink to="/about" className="flex items-center gap-2 font-display text-sand text-lg md:text-xl">
          <button
            onClick={onHatClick}
            title="???"
            className="text-2xl text-gold hover:rotate-12 transition-transform"
            aria-label="captain's hat"
          >
            <GiAnchor />
          </button>
          Yunik&nbsp;<span className="text-gold">Dahal</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 font-display tracking-wide text-sm uppercase">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative pb-1 transition-colors ${
                  isActive ? 'text-gold' : 'text-sand/80 hover:text-gold'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <MusicToggle />
        </div>

        <button
          className="md:hidden text-gold text-2xl"
          onClick={onOpenMenu}
          aria-label="Open navigation"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  )
}

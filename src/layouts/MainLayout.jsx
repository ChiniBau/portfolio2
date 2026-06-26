import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
import CompassCursor from '../components/CompassCursor'
import ScrollProgress from '../components/ScrollProgress'
import OceanBackground from '../components/OceanBackground'
import PirateHatEasterEgg from '../components/PirateHatEasterEgg'
import useTheme from '../hooks/useTheme'
import useEasterEgg from '../hooks/useEasterEgg'

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { revealed, registerClick, close } = useEasterEgg(5)

  return (
    <div className="relative min-h-screen font-body">
      <OceanBackground variant={theme === 'night' ? 'deep' : 'light'} />
      <CompassCursor />
      <ScrollProgress />
      <PirateHatEasterEgg revealed={revealed} onClose={close} />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenMenu={() => setMenuOpen(true)}
        onHatClick={registerClick}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

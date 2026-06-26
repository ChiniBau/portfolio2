import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import Landing from './pages/Landing'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import LoadingScreen from './components/LoadingScreen'
import { pageTransition } from './animations/variants'

function AnimatedPage({ children }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Landing />
                </AnimatedPage>
              }
            />
            <Route element={<MainLayout />}>
              <Route
                path="/about"
                element={
                  <AnimatedPage>
                    <About />
                  </AnimatedPage>
                }
              />
              <Route
                path="/works"
                element={
                  <AnimatedPage>
                    <Works />
                  </AnimatedPage>
                }
              />
              <Route
                path="/contact"
                element={
                  <AnimatedPage>
                    <Contact />
                  </AnimatedPage>
                }
              />
              <Route
                path="*"
                element={
                  <AnimatedPage>
                    <NotFound />
                  </AnimatedPage>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      )}
    </>
  )
}

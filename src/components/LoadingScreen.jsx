import { motion } from 'framer-motion'
import { GiCompass } from 'react-icons/gi'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-navy"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
      >
        <GiCompass className="text-gold text-6xl md:text-8xl" />
      </motion.div>
      <p className="mt-6 font-display text-sand text-sm md:text-base tracking-[0.3em] uppercase">
        Charting the course...
      </p>
    </motion.div>
  )
}

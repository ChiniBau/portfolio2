import { AnimatePresence, motion } from 'framer-motion'
import { GiTreasureMap, GiStarFormation } from 'react-icons/gi'

export default function PirateHatEasterEgg({ revealed, onClose }) {
  return (
    <AnimatePresence>
      {revealed && (
        <motion.div
          className="fixed inset-0 z-[300] bg-navy/95 flex flex-col items-center justify-center text-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 12 }}
          >
            <GiTreasureMap className="text-gold text-7xl mx-auto mb-4" />
          </motion.div>
          <motion.h2
            className="font-display text-gold text-3xl md:text-5xl mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            One Piece Found!
          </motion.h2>
          <p className="text-sand/80 font-body max-w-md">
            You uncovered the hidden secret of this portfolio. A true adventurer always checks
            beneath the surface.
          </p>
          <div className="flex gap-3 mt-6 text-gold text-2xl">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.2, ease: 'linear' }}
              >
                <GiStarFormation />
              </motion.span>
            ))}
          </div>
          <p className="text-sand/40 text-xs mt-8">Tap anywhere to close</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

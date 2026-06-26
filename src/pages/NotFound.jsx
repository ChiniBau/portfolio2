import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GiCompass } from 'react-icons/gi'

export default function NotFound() {
  return (
    <div className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <GiCompass className="text-gold text-6xl mb-6" />
      </motion.div>
      <h1 className="font-display text-4xl md:text-6xl text-sand mb-3">Lost at Sea</h1>
      <p className="text-sand/60 font-body max-w-md mb-8">
        404 — These waters aren't on any map. The page you're looking for has drifted off course.
      </p>
      <Link
        to="/about"
        className="px-6 py-3 rounded-full bg-gold text-navy font-display uppercase text-sm tracking-wide hover:scale-105 transition-transform"
        data-cursor-hover
      >
        Sail Back Home
      </Link>
    </div>
  )
}

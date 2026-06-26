import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GiCompass, GiSailboat } from 'react-icons/gi'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="relative h-screen w-full overflow-hidden bg-navy flex items-center justify-center text-center px-6">
      {/* sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-ocean to-navy" />

      {/* spinning compass watermark */}
      <motion.div
        className="absolute opacity-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        <GiCompass className="text-gold" style={{ fontSize: '70vmin' }} />
      </motion.div>

      {/* waves */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-40 animate-wave"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C200,150 400,50 600,100 C800,150 1000,50 1200,100 C1400,150 1600,50 1800,100 C2000,150 2200,50 2400,100 L2400,200 L0,200 Z"
          fill="rgba(212,175,55,0.18)"
        />
      </svg>

      {/* sailing ship */}
      <motion.div
        className="absolute bottom-16"
        initial={{ x: '-40vw' }}
        animate={{ x: '40vw' }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
          <GiSailboat className="text-sand text-5xl drop-shadow-lg" />
        </motion.div>
      </motion.div>

      {/* foreground content */}
      <div className="relative z-10">
        <motion.h1
          className="font-display text-3xl sm:text-5xl md:text-6xl text-sand mb-4 tracking-wide drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Set Sail for My Portfolio
        </motion.h1>
        <motion.p
          className="text-sand/70 font-body mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          A developer's voyage across the Grand Line — charted in code, fueled by curiosity.
        </motion.p>

        <motion.button
          onClick={() => navigate('/about')}
          className="font-display uppercase tracking-widest text-sm md:text-base px-8 py-3 rounded-full bg-gold text-navy shadow-lg hover:shadow-gold/40 hover:scale-105 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          data-cursor-hover
        >
          Start Adventure
        </motion.button>
      </div>
    </div>
  )
}

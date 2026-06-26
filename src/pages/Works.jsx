import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../animations/variants'
import BountyPoster from '../components/BountyPoster'
import ProjectModal from '../components/ProjectModal'
import { projects, filters } from '../data/projects'

export default function Works() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  )

  return (
    <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16">
      {/* animated route lines background for this page */}
      <svg className="absolute -z-10 top-0 left-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <motion.path
          d="M0,80 C200,150 400,20 600,100 C800,180 1000,40 1200,120"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
      </svg>

      <motion.div initial="hidden" animate="show" variants={staggerContainer}>
        <motion.h1 variants={fadeUp} className="font-display text-3xl md:text-4xl text-sand mb-3">
          Treasure Collection
        </motion.h1>
        <motion.p variants={fadeUp} className="text-sand/60 mb-10 max-w-xl">
          Every bounty below is a project built, shipped, and worth claiming. Filter by crew
          specialty to find what you're looking for.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-display uppercase tracking-wide border transition-colors ${
                activeFilter === f
                  ? 'bg-gold text-navy border-gold'
                  : 'border-gold/40 text-gold hover:bg-gold/10'
              }`}
              data-cursor-hover
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <BountyPoster project={project} onOpen={setSelected} />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-sand/50 text-center mt-12">No bounties found in these waters yet.</p>
        )}
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

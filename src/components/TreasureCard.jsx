import { motion } from 'framer-motion'
import { useState } from 'react'
import { GiTreasureMap } from 'react-icons/gi'

export default function TreasureCard({ category }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="relative wood-card rounded-xl p-6 cursor-pointer select-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      whileHover={{ y: -6 }}
      data-cursor-hover
    >
      <div className="flex items-center gap-3 mb-3">
        <GiTreasureMap className="text-2xl" style={{ color: category.color }} />
        <h3 className="font-display text-sand text-lg">{category.title}</h3>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <ul className="flex flex-wrap gap-2 pt-2">
          {category.skills.map((skill) => (
            <li
              key={skill}
              className="text-xs font-body px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/40"
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      {!open && (
        <p className="text-sand/60 text-xs font-body">Hover to reveal the loot...</p>
      )}
    </motion.div>
  )
}

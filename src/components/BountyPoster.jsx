import { motion } from 'framer-motion'
import { FaPinterest, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function BountyPoster({ project, onOpen }) {
  return (
    <motion.div
      className="relative parchment rope-border rounded-lg p-5 text-navy cursor-pointer"
      whileHover={{ y: -10, rotate: -1.5, boxShadow: '0 20px 40px rgba(212,175,55,0.35)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      onClick={() => onOpen(project)}
      data-cursor-hover
    >
      <div className="absolute top-3 right-3 font-display text-[10px] uppercase tracking-widest text-crimson border border-crimson px-2 py-0.5 rotate-6">
        Wanted
      </div>

      <div className="w-full h-36 rounded-md bg-gradient-to-br from-ocean to-navy flex items-center justify-center mb-4 overflow-hidden">
        <span className="font-display text-sand/70 text-sm">{project.title}</span>
      </div>

      <h3 className="font-display text-lg mb-1">{project.title}</h3>
      <p className="text-xs uppercase tracking-wide text-crimson font-semibold mb-2">
        Bounty: ฿ {project.bounty}
      </p>
      <p className="text-sm font-body text-navy/80 line-clamp-3 mb-3">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] bg-ocean/10 text-ocean px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 text-sm font-display" onClick={(e) => e.stopPropagation()}>
        {project.pinterest && (

          < a href={project.pinterest}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
          >
            <FaPinterest />
            Pinterest
          </a>
        )}
        {project.github && (

          < a href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-navy text-sand hover:bg-ocean transition"
          >
            <FaGithub />
            GitHub
          </a>
        )}
      </div>

    </motion.div>
  )
}

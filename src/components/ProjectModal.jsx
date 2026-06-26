import { AnimatePresence, motion } from 'framer-motion'
import { FaPinterest, FaExternalLinkAlt, FaTimes, FaGithub } from 'react-icons/fa'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[150] bg-navy/80 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="parchment rope-border rounded-lg max-w-lg w-full p-7 text-navy relative"
            initial={{ scale: 0.85, opacity: 0, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.85, opacity: 0, rotate: 2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-3 right-3 text-crimson text-xl">
              <FaTimes />
            </button>
            <p className="text-[10px] uppercase tracking-widest text-crimson font-semibold mb-2">
              Wanted — Bounty ฿ {project.bounty}
            </p>
            <h3 className="font-display text-2xl mb-3">{project.title}</h3>
            <p className="font-body text-sm text-navy/80 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-xs bg-ocean/10 text-ocean px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 font-display text-sm">
              {project.pinterest && (

                < a href={project.pinterest}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  <FaPinterest /> View Work
                </a>
              )}
              {project.github && (

                < a href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-navy text-sand hover:bg-ocean transition-colors"
                >
                  <FaGithub /> View Code
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

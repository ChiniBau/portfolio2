export const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.4, ease: 'easeIn' } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } },
}

export const islandReveal = {
  hidden: { opacity: 0, scale: 0.6, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'backOut' } },
}

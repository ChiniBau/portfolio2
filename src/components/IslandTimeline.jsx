import { motion } from 'framer-motion'
import { GiIsland, GiSchoolBag, GiAnchor, GiTrophyCup, GiSuitcase } from 'react-icons/gi'
import { islandReveal } from '../animations/variants'

const iconFor = (type) => {
  switch (type) {
    case 'Education':
      return GiSchoolBag
    case 'Internship':
      return GiSuitcase
    case 'Job':
      return GiAnchor
    case 'Achievement':
      return GiTrophyCup
    default:
      return GiIsland
  }
}

export default function IslandTimeline({ items }) {
  return (
    <div className="relative">
      {/* the route line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gold/40 md:-translate-x-1/2" />

      <div className="flex flex-col gap-12">
        {items.map((item, i) => {
          const Icon = iconFor(item.type)
          const alignRight = i % 2 === 1
          return (
            <motion.div
              key={item.id}
              className={`relative flex items-start gap-5 md:w-1/2 ${
                alignRight ? 'md:ml-auto md:flex-row' : 'md:flex-row-reverse md:text-right'
              }`}
              variants={islandReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-ocean border-2 border-gold flex items-center justify-center text-gold text-xl z-10 md:order-1">
                <Icon />
              </div>
              <div className="wood-card rounded-lg p-4 flex-1 md:order-0">
                <p className="text-gold text-xs uppercase tracking-wide font-display mb-1">
                  {item.type} · {item.period}
                </p>
                <h4 className="font-display text-sand text-base mb-1">{item.title}</h4>
                <p className="text-sand/70 text-xs mb-2">{item.place}</p>
                <p className="text-sand/80 text-sm">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

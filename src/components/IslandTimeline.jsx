import { motion } from 'framer-motion'
import { GiIsland, GiSchoolBag, GiAnchor, GiTrophyCup, GiSuitcase, GiSailboat } from 'react-icons/gi'
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

const ISLAND_PATHS = [
  `M70,42
   C95,12 135,6 165,22
   C190,4 225,10 245,30
   C268,40 288,58 282,80
   C296,96 290,118 268,128
   C282,144 270,164 248,166
   C254,182 222,186 200,172
   C182,188 150,188 134,172
   C108,186 78,180 66,160
   C40,164 16,148 18,124
   C2,114 4,92 22,80
   C8,66 16,44 40,38
   C48,28 62,30 70,42 Z`,
  `M60,50
   C80,16 116,4 150,16
   C176,2 214,8 238,26
   C262,18 286,34 280,58
   C300,68 296,94 276,104
   C292,118 284,142 260,146
   C268,164 238,176 212,164
   C198,182 164,184 146,168
   C122,184 90,176 80,156
   C54,162 28,146 32,122
   C12,116 8,90 28,78
   C16,62 28,40 52,40
   C54,32 58,40 60,50 Z`,
]

const SandTextureDefs = ({ idSuffix }) => (
  <defs>
    <radialGradient id={`sandFill-${idSuffix}`} cx="45%" cy="38%" r="75%">
      <stop offset="0%" stopColor="#d9ad6c" />
      <stop offset="60%" stopColor="#c89456" />
      <stop offset="100%" stopColor="#a8743c" />
    </radialGradient>
    <pattern id={`grain-${idSuffix}`} width="14" height="14" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="4" r="0.8" fill="#5b3a1f" opacity="0.18" />
      <circle cx="10" cy="9" r="0.6" fill="#fff" opacity="0.12" />
      <circle cx="7" cy="1" r="0.5" fill="#5b3a1f" opacity="0.12" />
    </pattern>
  </defs>
)

function IslandShape({ pathIndex, idSuffix }) {
  const d = ISLAND_PATHS[pathIndex % ISLAND_PATHS.length]
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 300 190"
      preserveAspectRatio="none"
      style={{ filter: 'drop-shadow(0 10px 12px rgba(0,0,0,0.45))' }}
    >
      <SandTextureDefs idSuffix={idSuffix} />
      <path d={d} fill={`url(#sandFill-${idSuffix})`} stroke="#4a2f18" strokeWidth="3" strokeLinejoin="round" />
      <path d={d} fill={`url(#grain-${idSuffix})`} stroke="none" />
    </svg>
  )
}

export default function IslandTimeline({ items }) {
  return (
    <div className="relative">
      {/* the ship's route — wavy dashed line */}
      <svg
        className="absolute left-6 md:left-1/2 top-0 h-full w-10 md:-translate-x-1/2 -translate-x-1/2 pointer-events-none"
        viewBox="0 0 40 100"
        preserveAspectRatio="none"
        style={{ height: '100%' }}
      >
        <path
          d="M20,0
             C 32,8 8,16 20,24
             C 32,32 8,40 20,48
             C 32,56 8,64 20,72
             C 32,80 8,88 20,96
             C 26,99 20,100 20,100"
          fill="none"
          stroke="rgba(212,175,90,0.45)"
          strokeWidth="1.4"
          strokeDasharray="3 4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* little boat marking the start of the voyage */}
      <div className="absolute left-6 md:left-1/2 -top-2 -translate-x-1/2 text-gold text-lg z-10">
        <GiSailboat />
      </div>

      <div className="flex flex-col gap-12">
        {items.map((item, i) => {
          const Icon = iconFor(item.type)
          const alignRight = i % 2 === 1

          return (
            <motion.div
              key={item.id}
              className={`relative flex items-start gap-5 md:w-[65%] ${
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

              <div className="relative flex-1 md:order-0 min-h-[340px]">
                <IslandShape pathIndex={i} idSuffix={item.id} />

                {/* coconut tree sitting on the island */}
                <span
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl select-none pointer-events-none"
                  style={{ filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.3))' }}
                  aria-hidden="true"
                >
                  🌴
                </span>

                <div
                  className="relative z-10 max-w-full overflow-hidden text-center md:text-left"
                  style={{ padding: '18% 22% 16% 22%' }}
                >
                  <p className="text-[#3d2812] text-xs uppercase tracking-wide font-display mb-1 font-semibold">
                    {item.type} · {item.period}
                  </p>
                  <h4 className="font-display text-[#2b1a0c] text-base mb-1 font-bold">
                    {item.title}
                  </h4>
                  <p className="text-[#3d2812]/80 text-xs mb-2">{item.place}</p>
                  <p className="text-[#2b1a0c]/90 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
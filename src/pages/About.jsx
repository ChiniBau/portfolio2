import { motion } from 'framer-motion'
import { GiQuillInk } from 'react-icons/gi'
import { FaDownload, FaRoute } from 'react-icons/fa'
import { fadeUp, staggerContainer } from '../animations/variants'
import TreasureCard from '../components/TreasureCard'
import IslandTimeline from '../components/IslandTimeline'
import { skillCategories } from '../data/skills'
import { experience } from '../data/experience'
const profile = "/images/image.png";
export default function About() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="max-w-6xl mx-auto px-4 md:px-8 py-16"
    >
      {/* Hero */}
      <motion.section
        variants={fadeUp}
        className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-24"
      >
        <div className="relative shrink-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-[6px] border-gold bg-gradient-to-br from-ocean to-navy flex items-center justify-center shadow-2xl">
            <img
              src={profile}
              alt="Yunik Dahal"
              className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover">
            </img>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-crimson text-sand text-xs font-display uppercase tracking-widest px-4 py-1 rounded-full border-2 border-gold whitespace-nowrap">
            Wanted: Dead or Hired
          </div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-display text-3xl md:text-5xl text-sand mb-2">
            Yunik <span className="text-gold">Dahal</span>
          </h1>
          <p className="font-display text-lg md:text-xl text-crimson mb-4">Web Developer/Designer</p>
          <p className="text-sand/70 italic max-w-md mb-6">
            "Every great developer begins with a single line of code."
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-navy font-display text-sm uppercase tracking-wide hover:scale-105 transition-transform"
              data-cursor-hover
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#story"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gold text-gold font-display text-sm uppercase tracking-wide hover:bg-gold/10 transition-colors"
              data-cursor-hover
            >
              <FaRoute /> View My Journey
            </a>
          </div>
        </div>
      </motion.section>

      {/* My Story */}
      <motion.section id="story" variants={fadeUp} className="mb-24">
        <h2 className="font-display text-2xl text-sand mb-6 flex items-center gap-3">
          <GiQuillInk className="text-gold" /> Captain's Log — My Story
        </h2>
        <div className="parchment rope-border rounded-lg p-8 text-navy leading-relaxed font-body text-sm md:text-base">
          <p className="mb-4">
            Every voyage starts in calm waters. Mine began with curiosity about how the screens
            around me actually worked — a question that turned into late nights, broken builds,
            and small, satisfying victories.
          </p>
          <p className="mb-4">
            Over the years I've sailed through different seas of the stack: from crafting
            interfaces that feel alive, to charting the backend systems that keep everything
            afloat. Each project has been an island worth exploring, each bug a storm worth
            weathering.
          </p>
          <p>
            Today, I navigate by a simple compass: build things that are useful, build them well,
            and never stop exploring what's over the horizon.
          </p>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section variants={fadeUp} className="mb-24">
        <h2 className="font-display text-2xl text-sand mb-6">Treasure of Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat) => (
            <TreasureCard key={cat.id} category={cat} />
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section variants={fadeUp}>
        <h2 className="font-display text-2xl text-sand mb-10">The Route So Far</h2>
        <IslandTimeline items={experience} />
      </motion.section>
    </motion.div>
  )
}

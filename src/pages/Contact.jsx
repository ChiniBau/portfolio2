import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { GiSeagull } from 'react-icons/gi'
import { fadeUp, staggerContainer } from '../animations/variants'

const socials = [
  { icon: FaGithub, href: 'https://github.com/ChiniBau', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yunik-dahal-48959b373/', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://www.facebook.com/Lucifer.12120', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/nobodyknows_0y/', label: 'Instagram' },
  { icon: FaEnvelope, href: 'mailto:lordyunik@gmail.com', label: 'Email' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // simulate send — wire this up to your backend / form service of choice
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setForm({ name: '', email: '', subject: '', message: '' })
      }, 2600)
    }, 1300)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <motion.div initial="hidden" animate="show" variants={staggerContainer}>
        <motion.h1 variants={fadeUp} className="font-display text-3xl md:text-4xl text-sand mb-3">
          Send a Message to the Captain
        </motion.h1>
        <motion.p variants={fadeUp} className="text-sand/60 mb-12 max-w-xl">
          Got a project, a question, or just want to talk shop? Drop a letter and it'll find its
          way to me.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Letter form */}
          <motion.div variants={fadeUp} className="md:col-span-2 relative">
            <motion.form
              onSubmit={handleSubmit}
              className="parchment rope-border rounded-lg p-8 text-navy relative overflow-hidden"
              animate={status === 'sending' ? { rotateX: 12, opacity: 0.4 } : { rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ transformPerspective: 800 }}
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-display uppercase tracking-wide mb-1">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-navy/40 focus:border-crimson outline-none py-1.5 font-body"
                    placeholder="Monkey D. Someone"
                  />
                </div>
                <div>
                  <label className="block text-xs font-display uppercase tracking-wide mb-1">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-navy/40 focus:border-crimson outline-none py-1.5 font-body"
                    placeholder="you@grandline.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-display uppercase tracking-wide mb-1">Subject</label>
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-navy/40 focus:border-crimson outline-none py-1.5 font-body"
                  placeholder="A proposition, Captain..."
                />
              </div>

              <div className="mb-7">
                <label className="block text-xs font-display uppercase tracking-wide mb-1">Message</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-navy/40 focus:border-crimson outline-none py-1.5 font-body resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-crimson text-sand font-display uppercase text-sm tracking-wide hover:bg-red-700 transition-colors disabled:opacity-60"
                data-cursor-hover
              >
                <FaPaperPlane /> Send via Seagull
              </button>

              {/* flying seagull */}
              <AnimatePresence>
                {status === 'sending' && (
                  <motion.div
                    className="absolute bottom-8 left-8 text-navy text-2xl"
                    initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                    animate={{ x: 400, y: -180, opacity: 0, rotate: -20 }}
                    transition={{ duration: 1.3, ease: 'easeIn' }}
                  >
                    <GiSeagull />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>

            <AnimatePresence>
              {status === 'sent' && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-navy/85 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <p className="font-display text-gold text-2xl mb-1">Message Sent!</p>
                    <p className="text-sand/70 text-sm">The seagull is on its way across the seas.</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social side */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="font-display text-sand text-lg mb-2">Find the Crew</h3>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg wood-card text-sand hover:text-gold transition-colors"
                data-cursor-hover
              >
                <Icon className="text-lg" /> {label}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

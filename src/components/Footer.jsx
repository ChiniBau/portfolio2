import { GiSailboat } from 'react-icons/gi'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com/', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://facebook.com/', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com/', label: 'Instagram' },
  { icon: FaEnvelope, href: 'mailto:captain@example.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-gold/20">
      <div
        className="h-48 relative"
        style={{
          background: 'linear-gradient(180deg, #B22222 0%, #0F4C81 60%, #0B2545 100%)',
        }}
      >
        <GiSailboat className="absolute text-sand text-4xl animate-bob" style={{ left: '60%', top: '40%' }} />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-navy/40" />
      </div>

      <div className="bg-navy py-8 text-center">
        <p className="font-display text-sand text-lg mb-4">Until our next adventure...</p>
        <div className="flex justify-center gap-5 text-gold text-xl mb-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-paper transition-colors">
              <Icon />
            </a>
          ))}
        </div>
        <p className="text-sand/50 text-xs">© {new Date().getFullYear()} Yunik Dahal — Sailing the Grand Line of Code.</p>
      </div>
    </footer>
  )
}

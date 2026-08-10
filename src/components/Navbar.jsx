import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="topbar-wrap">
      <nav className="navbar glass-panel" aria-label="Main navigation">
        <a href="#home" className="brand-mark" aria-label="Agency home page">
          <span className="brand-dot" />
          Zain<span>Studio</span>
        </a>

        <div className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-cta desktop-cta">
            Book a call
            <ArrowRight size={16} />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta mobile-cta" onClick={() => setIsOpen(false)}>
              Book a call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

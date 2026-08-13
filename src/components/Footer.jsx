import { ArrowUpRight, Globe, Sparkles } from 'lucide-react'

const footerLinks = ['Services', 'Work', 'Process', 'Team']
const socialLinks = [
  { label: 'LinkedIn', icon: Sparkles },
]

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="brand-mark" aria-label="Agency home page">
            <span className="brand-dot" />
            Zain<span>Studio</span>
          </a>
          <p>Premium strategy, design, and digital experiences built to move brands forward.</p>
        </div>

        <div className="footer-links-wrap">
          <div>
            <h4>Quick links</h4>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Social</h4>
            <ul className="footer-social">
              {socialLinks.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a href="#home" aria-label={label}>
                    <Icon size={16} />
                    {label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Zain Studio. All rights reserved.</span>
      </div>
    </footer>
  )
}

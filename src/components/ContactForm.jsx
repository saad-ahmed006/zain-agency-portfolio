import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactForm() {
  return (
    <section id="contact" className="section-block contact-section">
      <motion.div
        className="contact-copy"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-tag">Let’s talk</span>
        <h2>Ready to turn your next idea into a standout brand?</h2>
        <p>
          We help leaders launch ambitious digital experiences with design clarity,
          product thinking, and efficient execution.
        </p>

        <div className="contact-list">
          <div>
            <Mail size={18} />
            hello@zainstudio.co
          </div>
          <div>
            <Phone size={18} />
            +92 312 000 0000
          </div>
          <div>
            <MapPin size={18} />
            Lahore, Pakistan
          </div>
        </div>
      </motion.div>

      <motion.form
        className="contact-form glass-panel"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.08 }}
      >
        <div className="field-row">
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="your@email.com" />
          </label>
        </div>

        <label>
          <span>Company</span>
          <input type="text" placeholder="Brand or startup name" />
        </label>

        <label>
          <span>Project brief</span>
          <textarea rows="5" placeholder="Tell us about your vision, goals, and timeline..." />
        </label>

        <button type="submit" className="primary-btn submit-btn">
          Send inquiry
          <ArrowRight size={18} />
        </button>
      </motion.form>
    </section>
  )
}

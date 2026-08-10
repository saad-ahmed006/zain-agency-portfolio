import { motion } from 'framer-motion'
import { testimonialsData } from '../data/agencyData'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-block testimonials-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-tag">Client feedback</span>
        <h2>Trusted by founders and teams ready to move fast.</h2>
      </motion.div>

      <div className="testimonials-grid">
        {testimonialsData.map((item, index) => (
          <motion.article
            key={item.name}
            className="testimonial-card glass-panel"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="quote-mark">“</div>
            <p>{item.quote}</p>
            <div className="testimonial-meta">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

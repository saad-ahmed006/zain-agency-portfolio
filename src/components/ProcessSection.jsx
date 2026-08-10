import { motion } from 'framer-motion'
import { processSteps } from '../data/agencyData'

export default function ProcessSection() {
  return (
    <section id="process" className="section-block process-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-tag">Our process</span>
        <h2>Four steps from insight to launch.</h2>
      </motion.div>

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            className="process-card glass-panel"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

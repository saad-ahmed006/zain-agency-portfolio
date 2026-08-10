import { motion } from 'framer-motion'
import { statsData } from '../data/agencyData'

export default function StatsSection() {
  return (
    <section className="section-block stats-section">
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stats-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

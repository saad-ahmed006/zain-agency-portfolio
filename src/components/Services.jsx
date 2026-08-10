import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Clapperboard,
  Palette,
  ArrowUpRight,
} from 'lucide-react'
import { services } from '../data/agencyData'

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  clapperboard: Clapperboard,
  palette: Palette,
}

export default function Services() {
  return (
    <section id="services" className="section-block services-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-tag">What we do</span>
        <h2>Full-spectrum creative and product execution.</h2>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon]

          return (
            <motion.article
              key={service.id}
              className="service-card glass-panel"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="service-icon" style={{ background: `${service.accent}1A` }}>
                <Icon size={24} color={service.accent} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="card-link">
                Explore
                <ArrowUpRight size={16} />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

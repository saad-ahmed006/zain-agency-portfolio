import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolioFilters, portfolioProjects } from '../data/agencyData'

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All Work')

  const visibleProjects =
    activeCategory === 'All Work'
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeCategory)

  return (
    <section id="work" className="section-block portfolio-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-tag">Selected work</span>
        <h2>Service-based projects built with measurable outcomes.</h2>
      </motion.div>

      <div className="filter-bar glass-panel">
        {portfolioFilters.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            className={activeCategory === filter ? 'filter-pill active' : 'filter-pill'}
            onClick={() => setActiveCategory(filter)}
            whileTap={{ scale: 0.97 }}
            layout
          >
            {filter}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="portfolio-grid"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          layout
        >
          {visibleProjects.map((project) => (
            <motion.article
              key={project.id}
              className="portfolio-card glass-panel"
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="portfolio-image-wrap">
                <img src={project.thumbnail} alt={project.title} />
                <span className="portfolio-badge">{project.category}</span>
              </div>

              <div className="portfolio-body">
                <div className="portfolio-header-row">
                  <h3>{project.title}</h3>
                  <span className="lead-chip">{project.leadSpecialist}</span>
                </div>

                <p>{project.description}</p>

                <div className="portfolio-link">
                  View project
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

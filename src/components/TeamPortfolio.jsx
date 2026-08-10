import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { portfolioProjects, teamMembers } from '../data/agencyData'

const filters = ['All Work', ...teamMembers.map((member) => member.name)]

export default function TeamPortfolio() {
  const [activeFilter, setActiveFilter] = useState('All Work')

  const visibleProjects =
    activeFilter === 'All Work'
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.member === activeFilter)

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
        <h2>Collaborative talent, measurable outcomes.</h2>
      </motion.div>

      <div className="filter-bar glass-panel">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? 'filter-pill active' : 'filter-pill'}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="portfolio-grid"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {visibleProjects.map((project) => (
            <motion.article
              key={project.id}
              className="portfolio-card glass-panel"
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <div className="portfolio-image-wrap">
                <img src={project.image} alt={project.title} />
                <span className="portfolio-badge">{project.category}</span>
              </div>

              <div className="portfolio-body">
                <div className="portfolio-header-row">
                  <div>
                    <p className="project-label">Assigned</p>
                    <h3>{project.member}</h3>
                  </div>
                  <span className="result-pill">{project.result}</span>
                </div>

                <h4>{project.title}</h4>

                <div className="portfolio-meta">
                  <CheckCircle2 size={16} />
                  <span>High-impact delivery with conversion focus</span>
                </div>

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

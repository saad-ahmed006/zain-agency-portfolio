import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { portfolioData } from '../data/agencyData'

const categoryCards = [
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'Website Development',
    description: 'High-converting digital experiences and responsive business platforms.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    type: 'web_modal',
  },
  {
    id: 'app-development',
    title: 'App Development',
    category: 'App Development',
    description: 'Mobile experiences engineered for speed, usability, and retention.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    type: 'app_modal',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Video Editing',
    description: 'Campaign motion work, reels, and performance-driven storytelling.',
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80',
    type: 'drive_link',
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    category: 'Graphic Designing',
    description: 'Visual systems, campaign graphics, and brand storytelling assets.',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80',
    type: 'drive_link',
  },
]

const appScreenshotFallbacks = {
  'Hundo App': [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
  ],
  'Meri Gari': [
    'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1503376780353-7c5e2adf06f2?auto=format&fit=crop&w=900&q=80',
  ],
}

export default function PortfolioSection() {
  const [activeModal, setActiveModal] = useState(null)

  const handleCardClick = (card) => {
    if (card.type === 'drive_link') {
      const driveUrl =
        card.category === 'Video Editing'
          ? portfolioData.videoEditingDriveUrl
          : portfolioData.graphicDesignDriveUrl

      window.open(driveUrl, '_blank', 'noopener,noreferrer')
      return
    }

    setActiveModal(card.category)
  }

  const modalTitle =
    activeModal === 'Website Development'
      ? 'Web Projects Showcase'
      : activeModal === 'App Development'
        ? 'Mobile Apps Showcase'
        : ''

  return (
    <>
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

        <div className="portfolio-grid">
          {categoryCards.map((card) => (
            <motion.article
              key={card.id}
              className="portfolio-card glass-panel"
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => handleCardClick(card)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  handleCardClick(card)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Open ${card.title}`}
            >
              <div className="portfolio-image-wrap">
                <img src={card.image} alt={card.title} />
                <span className="portfolio-badge">{card.category}</span>
              </div>

              <div className="portfolio-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <button
                  type="button"
                  className="portfolio-cta"
                  onClick={(event) => {
                    event.stopPropagation()
                    handleCardClick(card)
                  }}
                >
                  {card.type === 'web_modal'
                    ? 'View Showcase'
                    : card.type === 'app_modal'
                      ? 'View Showcase'
                      : card.category === 'Video Editing'
                        ? 'Watch Video Showcase'
                        : 'View Design Gallery'}
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {(activeModal === 'Website Development' || activeModal === 'App Development') && (
          <motion.div
            className="portfolio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="portfolio-modal glass-panel"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="portfolio-close-btn"
                aria-label="Close modal"
                onClick={() => setActiveModal(null)}
              >
                <X size={18} />
              </button>

              <div className="portfolio-modal-header">
                <span className="section-tag">{modalTitle}</span>
                <h3>{activeModal}</h3>
              </div>

              {activeModal === 'Website Development' && (
                <div className="portfolio-showcase-list">
                  {portfolioData.websites.map((site) => (
                    <div key={site.id} className="portfolio-showcase-item">
                      <div className="portfolio-showcase-top">
                        <div>
                          <h4>{site.title}</h4>
                          <p className="portfolio-showcase-tagline">{site.tagline}</p>
                        </div>
                        <span className="portfolio-detail-badge">{site.metrics}</span>
                      </div>

                      <p>{site.description}</p>

                      <div className="portfolio-tech-stack">
                        {site.techStack.map((item) => (
                          <span key={`${site.id}-${item}`}>{item}</span>
                        ))}
                      </div>

                      <a
                        href={site.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio-cta"
                        style={{
                          background: '#E86132',
                          boxShadow: '0 18px 24px rgba(232, 97, 50, 0.2)',
                        }}
                      >
                        Visit Live Site
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === 'App Development' && (
                <div className="portfolio-showcase-list">
                  {portfolioData.apps.map((app) => {
                    const screenshots = appScreenshotFallbacks[app.name] || [
                      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
                    ]

                    return (
                      <div key={app.id} className="portfolio-showcase-item app-showcase">
                        <div className="portfolio-showcase-top">
                          <div>
                            <h4>{app.name}</h4>
                            <p className="portfolio-showcase-tagline">{app.tagline}</p>
                          </div>
                          <span className="portfolio-detail-badge">{app.targetAudience}</span>
                        </div>

                        <p>{app.description}</p>

                        <div className="portfolio-tech-stack">
                          {app.techStack.map((item) => (
                            <span key={`${app.id}-${item}`}>{item}</span>
                          ))}
                        </div>

                        <ul className="portfolio-feature-list">
                          {app.features.map((feature) => (
                            <li key={`${app.id}-${feature}`}>{feature}</li>
                          ))}
                        </ul>

                        <div className="portfolio-screenshot-grid">
                          {screenshots.map((image, index) => (
                            <img
                              key={`${app.id}-image-${index}`}
                              src={image}
                              alt={`${app.name} preview ${index + 1}`}
                            />
                          ))}
                        </div>

                        {app.appLink && (
                          <a
                            href={app.appLink}
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio-cta"
                            style={{
                              background: '#E86132',
                              boxShadow: '0 18px 24px rgba(232, 97, 50, 0.2)',
                            }}
                          >
                            View App / Store Link
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

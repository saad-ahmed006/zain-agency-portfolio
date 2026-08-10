import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import { heroStats } from '../data/agencyData'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.12,
            },
          },
        }}
      >
        <motion.span className="eyebrow" variants={fadeUp}>
          <Sparkles size={14} />
          Premium digital agency for ambitious brands
        </motion.span>

        <motion.h1 variants={fadeUp}>
          We shape bold brands and digital experiences that convert attention into action.
        </motion.h1>

        <motion.p variants={fadeUp}>
          We blend strategy, product thinking, design, and motion to help founders and teams launch with clarity, confidence, and measurable momentum.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp}>
          <a href="#contact" className="primary-btn">
            Start your project
            <ArrowRight size={18} />
          </a>
          <a href="#work" className="secondary-btn">
            View our work
          </a>
        </motion.div>

        <motion.div className="hero-metrics" variants={fadeUp}>
          {heroStats.map((stat) => (
            <div className="metric-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        <div className="visual-badge badge-top">
          <TrendingUp size={16} />
          +41% campaign lift
        </div>

        <div className="showcase-panel glass-panel">
          <div className="panel-header">
            <span className="panel-dot dot-one" />
            <span className="panel-dot dot-two" />
            <span className="panel-dot dot-three" />
          </div>

          <div className="dashboard-preview">
            <div className="preview-card large-card">
              <p>Brand Growth</p>
              <strong>94.2%</strong>
              <div className="graph-bars">
                <span style={{ height: '38%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '46%' }} />
                <span style={{ height: '76%' }} />
                <span style={{ height: '86%' }} />
                <span style={{ height: '100%' }} />
              </div>
            </div>

            <div className="preview-stack">
              <div className="mini-card">
                <span>Launch Day</span>
                <strong>48h</strong>
              </div>
              <div className="mini-card accent-card">
                <span>Qualified leads</span>
                <strong>1.8k</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="visual-badge badge-bottom">Brand, UX, media, motion — unified.</div>
      </motion.div>
    </section>
  )
}

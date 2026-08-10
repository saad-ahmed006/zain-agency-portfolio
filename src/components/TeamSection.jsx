import { motion } from 'framer-motion'
import { teamMembers } from '../data/agencyData'

export default function TeamSection() {
  return (
    <section id="team" className="section-block team-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-tag">Our team</span>
        <h2>Dedicated specialists driving strategy, creativity, and digital execution.</h2>
      </motion.div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.article
            key={member.id}
            className="team-card glass-panel"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -8 }}
          >
            <div className="team-top-row">
              <div className="team-avatar">{member.avatar}</div>
            </div>

            <div className="team-content">
              <h3>{member.name}</h3>
              <p className="team-role-line">{member.role}</p>
              <p className="team-role-detail">{member.title}</p>
              <p className="team-bio">{member.bio}</p>

              <div className="focus-list">
                {member.focusAreas.map((focus) => (
                  <span key={focus}>{focus}</span>
                ))}
              </div>

              <div className="skill-tags">
                {member.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

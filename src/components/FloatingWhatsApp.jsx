import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import React from 'react'

export default function FloatingWhatsApp({ phone = 'YOUR_PHONE_NUMBER' }) {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I visited your agency website and would like to discuss a project."
    )
    const url = `https://wa.me/${phone}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <motion.div
      className="floating-whatsapp"
      initial={{ opacity: 0, scale: 0.6, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 14 }}
      whileHover={{ scale: 1.08 }}
    >
      <div className="ping-ring" aria-hidden="true" />

      <button
        aria-label="Chat with us on WhatsApp"
        className="wa-btn"
        onClick={openWhatsApp}
      >
        <MessageSquare size={20} color="#fff" />
      </button>

      <div className="wa-tooltip">Chat with us on WhatsApp</div>
    </motion.div>
  )
}

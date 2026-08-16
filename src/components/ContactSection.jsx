import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  // EmailJS credentials from environment variables
  const SERVICE_ID =
    typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_EMAILJS_SERVICE_ID
      ? import.meta.env.VITE_EMAILJS_SERVICE_ID
      : typeof process !== 'undefined'
        ? process.env.REACT_APP_EMAILJS_SERVICE_ID || ''
        : ''

  const TEMPLATE_ID =
    typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      : typeof process !== 'undefined'
        ? process.env.REACT_APP_EMAILJS_TEMPLATE_ID || ''
        : ''

  const PUBLIC_KEY =
    typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ? import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      : typeof process !== 'undefined'
        ? process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
        : ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    const form = e.currentTarget
    const fd = new FormData(form)

    const templateParams = {
      from_name: fd.get('name') || '',
      from_email: fd.get('email') || '',
      service_type: fd.get('service') || '',
      budget: fd.get('budget') || '',
      message: fd.get('message') || '',
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setIsSuccess(true)
      form.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-block contact-section">
      <motion.div
        className="contact-copy"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-tag">Let’s talk</span>
        <h2>Ready to turn your next idea into a standout brand?</h2>
        <p>
          We help founders and teams launch ambitious digital experiences with design clarity,
          product thinking, and efficient execution.
        </p>

        <div className="contact-list">
          <div>
            <Mail size={18} />
            contact.zainstudio@gmail.com
          </div>
          <div>
            <Phone size={18} />
            +92 313 2167 463
          </div>
          <div>
            <MapPin size={18} />
            Karachi, Pakistan
          </div>
        </div>
      </motion.div>

      <motion.form
        className="contact-form glass-panel"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        onSubmit={handleSubmit}
      >
        <div className="field-row">
          <label>
            <span>Full Name</span>
            <input name="name" type="text" placeholder="Your full name" required />
          </label>
          <label>
            <span>Email Address</span>
            <input name="email" type="email" placeholder="your@email.com" required />
          </label>
        </div>

        <div className="field-row">
          <label>
            <span>Services Required</span>
            <select name="service" defaultValue="Website Development">
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>Video Editing</option>
              <option>Graphic Designing</option>
              <option>Full Agency Package</option>
            </select>
          </label>
          <label>
            <span>Estimated Budget</span>
            <input name="budget" type="text" placeholder="e.g. $3,000 - $10,000" />
          </label>
        </div>

        <label>
          <span>Project Brief / Message</span>
          <textarea name="message" rows="6" placeholder="Tell us about your vision, goals, and timeline..." />
        </label>

        <button type="submit" className="primary-btn submit-btn">
          Send inquiry
          <ArrowRight size={18} />
        </button>
      </motion.form>
    </section>
  )
}

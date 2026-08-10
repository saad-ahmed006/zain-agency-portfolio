import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import TeamSection from './components/TeamSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="content-shell">
        <Hero />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App

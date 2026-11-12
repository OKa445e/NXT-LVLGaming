import { motion, useScroll, useTransform } from 'motion/react'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import ContentSections from './components/ContentSections'
import SiteFooter from './components/SiteFooter'

function App() {
  const { scrollYProgress } = useScroll()
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <SiteHeader />
      <main><HeroSection /><ContentSections /></main>
      <SiteFooter />
    </div>
  )
}

export default App

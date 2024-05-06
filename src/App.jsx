import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { PowerGlitch } from 'powerglitch'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

PowerGlitch.glitch('.section__title', {
  playMode: 'always',
  pulse: true,
})
function App() {
  const [{ themeName }] = React.useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

import { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [{ themeName }] = useContext(ThemeContext)

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

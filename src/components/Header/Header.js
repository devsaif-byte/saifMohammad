import { FaTerminal } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header() {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <motion.h3
        initial={{ y: -350 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {homepage ? (
          <a href={homepage} className='link'>
            <FaTerminal style={{ height: '0.7em', width: '1.2em' }} /> {title}
          </a>
        ) : (
          title
        )}
      </motion.h3>
      <Navbar />
    </header>
  )
}

export default Header

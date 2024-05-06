import { FaTerminal } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header() {
  const { homepage, title } = header

  // <button type='button' className='glowing-btn'>
  //       <span className='glowing-txt'>
  //         C<span className='faulty-letter'>L</span>ICK
  //       </span>
  // </button>
  return (
    <header className='header center'>
      <motion.h4
        initial={{ y: -350 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {homepage ? (
          <a href={homepage} className='link faulty-letter glowing-txt'>
            {/* <FaTerminal style={{ height: '0.7em', width: '1.2em' }} /> {title} */}
            {title}
          </a>
        ) : (
          title
        )}
      </motion.h4>
      <Navbar />
    </header>
  )
}

export default Header

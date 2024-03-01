/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
import React, { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import './ScrollToTop.css'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top'>
        <BsArrowUp fontSize='large' />{' '}
      </a>
    </div>
  ) : null
}

export default ScrollToTop

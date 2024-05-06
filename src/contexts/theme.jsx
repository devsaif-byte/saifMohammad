import React, { createContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = React.createContext()

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    })
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  const values = useMemo(
    () => [{ themeName, toggleTheme }],
    [themeName, toggleTheme],
  )
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }

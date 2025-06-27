import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference, default to light
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme === "dark"
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    // Apply theme immediately on mount
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { ThemeProvider, useTheme }

import { Link } from 'react-router-dom'
import { useTheme } from "../context/ThemeContext"


export default function Navbar() {
    const { toggleTheme, darkMode } = useTheme()

  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">🌟ReactApp</div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
        <Link to="/tasks" className="hover:text-blue-200 transition-colors">Tasks</Link>
        <Link to="/api" className="hover:text-blue-200 transition-colors">API</Link>
        <button 
          onClick={toggleTheme} 
          className="ml-4 p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  )
}

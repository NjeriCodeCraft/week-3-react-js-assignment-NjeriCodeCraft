import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useTheme } from '../context/ThemeContext'

export default function Layout() {
  const { mounted } = useTheme()
  
  // Prevent flash of unstyled content during hydration
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

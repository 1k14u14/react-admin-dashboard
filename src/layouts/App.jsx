import { useEffect, useState } from "react"
import DashboardLayout from "./DashboardLayout"
import Dashboard from "./../pages/Dashboard"

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])
  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      >
      <Dashboard />
    </DashboardLayout>
  )
}
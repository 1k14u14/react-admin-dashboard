import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function DashboardLayout({ children, darkMode, setDarkMode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
      <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden">

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 min-h-screen w-64
            bg-[var(--surface)]
            transform transition-transform duration-300
            z-50
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0
          `}
        >
          <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            toggleSidebar={() => setIsSidebarOpen(true)}
          />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>

      </div>
  )
}

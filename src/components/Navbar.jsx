import { Moon, Sun, Menu } from "lucide-react"

export default function Navbar({ darkMode, setDarkMode, toggleSidebar }) {
  return (
    <div className="bg-[var(--surface)] border-b border-gray-200 dark:border-slate-700 px-6 py-4 flex justify-between items-center">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-700"
      >
        <Menu size={20} />
      </button>
      <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">Admin</span>
        <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:scale-105 transition"
        >
        {darkMode ? (
            <Sun size={18} className="text-yellow-400" />
        ) : (
            <Moon size={18} className="text-slate-600" />
        )}
        </button>
      </div>
    </div>
  )
}
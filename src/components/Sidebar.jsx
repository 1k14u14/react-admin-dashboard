import {
  LayoutDashboard,
  BarChart3,
  Settings,
} from "lucide-react"
import { useState } from "react"

export default function Sidebar({closeSidebar}) {
  const [active, setActive] = useState("dashboard")
  return (
    <div className="h-full flex flex-col bg-[var(--surface)] text-[var(--text)]">
      {/* Logo */}
      <div className="p-6 text-xl font-bold text-slate-800 dark:text-white border-b border-gray-100 dark:border-slate-700">
        InsightPro
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">

        {/* Active Item */}
        <a
          href="#"
          onClick={() => setActive("dashboard")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
            ${active === "dashboard"
              ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300"
              : "text-[var(--muted)] hover:bg-slate-100 dark:hover:bg-slate-700"}
          `}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </a>

        <a
          href="#"
          onClick={closeSidebar}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-[var(--text)] hover:bg-slate-100 dark:hover:bg-slate-700 transition"        
        >
          <BarChart3 size={18} />
          Analytics
        </a>

        <a
          href="#"
          onClick={closeSidebar}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-[var(--text)] hover:bg-slate-100 dark:hover:bg-slate-700 transition"        
        >
          <Settings size={18} />
          Settings
        </a>

      </nav>
    </div>
  )
}
import { useState } from "react"
import { transactions } from "../data/transactionData"
import StatusBadge from "./StatusBadge"
import { ArrowUpDown } from "lucide-react"

export default function TransactionTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  })

  const filteredTransactions = transactions.filter((item) => {
    const matchesSearch =
      item.user.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (!sortConfig.key) return 0

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1
    }
    return 0
  })

  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTransactions = sortedTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  )


  return (
    <div className="bg-[var(--surface)] rounded-xl border border-gray-100 dark:border-slate-700 mt-8 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h3 className="text-lg font-semibold text-[var(--muted)]">
          Recent Transactions
        </h3>

        <div className="flex gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search user..."
            value={searchTerm}
            onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
            }}
            className="px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => {
                setStatusFilter(e.target.value)
                setCurrentPage(1)
            }}
            className="px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option className="bg-[var(--surface)]" value="All">All</option>
            <option className="bg-[var(--surface)]" value="Completed">Completed</option>
            <option className="bg-[var(--surface)]" value="Pending">Pending</option>
            <option className="bg-[var(--surface)]" value="Failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[var(--surface)] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr className="text-left text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
              <th
                onClick={() =>
                setSortConfig((prev) => ({
                  key: "user",
                  direction:
                    prev.key === "user" && prev.direction === "asc"
                      ? "desc"
                      : "asc",
                }))
              }
              className="px-6 py-3 cursor-pointer select-none">
                <span className="flex items-center gap-1">
                  User <ArrowUpDown size={14} />
                </span>
              </th>
              <th
                onClick={() =>
                setSortConfig((prev) => ({
                  key: "date",
                  direction:
                    prev.key === "date" && prev.direction === "asc"
                      ? "desc"
                      : "asc",
                }))
              }
              className="px-6 py-3 cursor-pointer select-none">
                <span className="flex items-center gap-1">
                  Date <ArrowUpDown size={14} />
                </span>
              </th>
              <th 
                onClick={() =>
                setSortConfig((prev) => ({
                  key: "amount",
                  direction:
                    prev.key === "amount" && prev.direction === "asc"
                      ? "desc"
                      : "asc",
                }))
              }
              className="px-6 py-3 cursor-pointer select-none">
                <span className="flex items-center gap-1">
                  Amount <ArrowUpDown size={14} />
                </span>
              </th>
              <th className="px-6 py-3">
                  Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {sortedTransactions.length > 0 ? (
              paginatedTransactions.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors even:bg-slate-50 dark:even:bg-slate-700">
                  <td className="px-6 py-4 text-sm text-[var(--text)]">{item.user}</td>
                  <td className="px-6 py-4 text-sm text-[var(--muted)]">{item.date}</td>
                  <td className="px-6 py-4 text-[var(--text)] font-medium">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-6 text-center text-slate-400"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination */}
      </div>
        <div className="flex justify-between items-center p-4 border-t border-gray-100 dark:border-slate-700">

        <button
            onClick={() =>
            setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
            className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-slate-500 dark:hover:bg-slate-600 transition"
        >
            Previous
        </button>

        <div className="text-sm text-slate-600 dark:text-slate-300">
            Page {currentPage} of {totalPages || 1}
        </div>

        <button
            onClick={() =>
            setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
            )
            }
            className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-slate-500 dark:hover:bg-slate-600 transition"
        >
            Next
        </button>

        </div>
    </div>
  )
}
export default function KPIcard({ title, value, growth }) {
  return (
    <div className="bg-[var(--surface)] p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <p className="text-sm text-[var(--muted)]">{title}</p>

      <div className="flex items-center justify-between mt-2">
      <h3 className="text-2xl font-bold text-[var(--text)]">{value}</h3>        <span
          className={`text-sm font-medium ${
            growth.startsWith("+")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {growth}
        </span>
      </div>
    </div>
  )
}
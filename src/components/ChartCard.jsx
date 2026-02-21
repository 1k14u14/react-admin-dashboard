export default function ChartCard({ title, children }) {
  return (
    <div className="bg-[var(--surface)] p-6 rounded-xl shadow-sm">
      <h3 className="text-[var(--muted)] font-semibold mb-4">{title}</h3>
      {children}
    </div>
  )
}
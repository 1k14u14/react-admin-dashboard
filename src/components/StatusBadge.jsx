export default function StatusBadge({ status }) {
  let styles = "px-3 py-1 text-xs font-medium rounded-full "

  if (status === "Completed") {
    styles += "bg-green-100 text-green-600"
  } else if (status === "Pending") {
    styles += "bg-yellow-100 text-yellow-600"
  } else {
    styles += "bg-red-100 text-red-600"
  }

  return <span className={styles}>{status}</span>
}
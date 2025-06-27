export default function Card({ title, children }) {
  return (
    <div className="border p-4 rounded shadow bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {children}
    </div>
  )
}

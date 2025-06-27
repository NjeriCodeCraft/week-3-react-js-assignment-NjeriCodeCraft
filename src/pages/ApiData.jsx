import { useState, useEffect } from 'react'

export default function ApiData() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const pageSize = 10

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  const filtered = data.filter(d =>
    d.title.toLowerCase().includes(search.toLowerCase())
  )

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">API Posts</h1>
      <input
        className="border dark:border-gray-600 p-2 mb-4 w-full rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        placeholder="Search posts..."
        value={search}
        onChange={e => {
          setSearch(e.target.value)
          setPage(1) // reset to page 1 when searching
        }}
      />
      {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">Error loading data</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paginated.map(post => (
          <li key={post.id} className="border dark:border-gray-600 p-4 shadow rounded bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage(p => p - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded transition-colors"
        >
          Previous
        </button>
        <span className="text-gray-600 dark:text-gray-300">
          Page {page} of {Math.ceil(filtered.length / pageSize)}
        </span>
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={page * pageSize >= filtered.length}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded transition-colors"
        >
          Next
        </button>
      </div>
      
      {filtered.length === 0 && !loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No posts found matching your search.
        </p>
      )}
    </div>
  )
}

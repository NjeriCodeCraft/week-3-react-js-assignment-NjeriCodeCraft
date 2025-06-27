import { useState, useEffect } from 'react'
import useLocalStorage from '../utils/useLocalStorage'

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", [])
  const [text, setText] = useState("")
  const [filter, setFilter] = useState("All")

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now(), text, done: false }])
      setText("")
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filtered = tasks.filter(task =>
    filter === "All" ? true : filter === "Completed" ? task.done : !task.done
  )

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border dark:border-gray-600 p-2 rounded flex-1 bg-white dark:bg-gray-800 text-black dark:text-white"
          placeholder="New task"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">Add</button>
      </div>

      <div className="space-x-2 my-4">
        {["All", "Active", "Completed"].map(f => (
          <button 
            key={f} 
            onClick={() => setFilter(f)} 
            className={`px-3 py-1 rounded transition-colors ${
              filter === f 
                ? 'bg-blue-500 text-white' 
                : 'text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filtered.map(task => (
          <li key={task.id} className="flex justify-between items-center p-3 border dark:border-gray-600 rounded bg-white dark:bg-gray-800">
            <span className={`flex-1 ${task.done ? "line-through text-gray-500 dark:text-gray-400" : ""}`}>
              {task.text}
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => toggleTask(task.id)} 
                className="text-green-500 hover:text-green-600 transition-colors"
                title={task.done ? "Mark as incomplete" : "Mark as complete"}
              >
                {task.done ? "↩️" : "✔"}
              </button>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="text-red-500 hover:text-red-600 transition-colors"
                title="Delete task"
              >
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          {filter === "All" ? "No tasks yet. Add one above!" : `No ${filter.toLowerCase()} tasks.`}
        </p>
      )}
    </div>
  )
}
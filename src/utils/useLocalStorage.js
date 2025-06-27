import { useState, useEffect } from "react"

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const json = localStorage.getItem(key)
    return json ? JSON.parse(json) : initial
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

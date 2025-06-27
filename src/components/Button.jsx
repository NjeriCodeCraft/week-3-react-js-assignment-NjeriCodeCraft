export default function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-300 text-black",
    danger: "bg-red-500 text-white",
  }

  return (
    <button className={`px-4 py-2 rounded transition-all duration-200 hover:scale-105 ${styles[variant]}`} {...props}>
      {children}
    </button>
  )
}

import Card from "../components/Card"

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to ReactTaskApp 🌟</h1>

      <Card title="📝 Manage Your Tasks">
        <p>Track your tasks using the Task Manager. Add, complete, and delete with ease.</p>
      </Card>

      <Card title="🌐 Fetch Public API">
        <p>Explore posts from JSONPlaceholder. Try out search and pagination.</p>
      </Card>

      <Card title="🎨 Theme Toggle">
        <p>Switch between light and dark modes using the top-right moon button 🌗.</p>
      </Card>
    </div>
  )
}

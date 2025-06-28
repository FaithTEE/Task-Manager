import Card from '../components/ui/Card'

const Home = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-3xl font-bold mb-4">Welcome to React Frontend Mastery</h1>
        <p className="text-lg">
          This project demonstrates modern React development practices including component
          architecture, state management, API integration, and responsive design with
          Tailwind CSS.
        </p>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-bold mb-2">Task Management</h2>
          <p>
            Explore the Tasks page to see a fully functional task manager with local storage
            persistence.
          </p>
        </Card>
        
        <Card>
          <h2 className="text-xl font-bold mb-2">API Integration</h2>
          <p>
            Visit the API Data page to see how we fetch and display data from a public API
            with search and pagination.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Home
import Card from '../components/ui/Card'

const Home = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-5xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 drop-shadow-lg ">
          Welcome to Task Manager
        </h1>
        
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
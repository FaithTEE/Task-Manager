import { useState, useEffect } from 'react'
import useApi from '../hooks/useApi'
import DataList from '../components/features/ApiData/DataList'
import Card from '../components/ui/Card'

const ApiData = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const { data, loading, error } = useApi(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&q=${searchQuery}`
  )

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">API Data</h1>
      <Card>
        <DataList
          data={data}
          loading={loading}
          error={error}
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
        />
      </Card>
    </div>
  )
}

export default ApiData
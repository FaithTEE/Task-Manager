import PropTypes from 'prop-types'
import DataItem from './DataItem'
import LoadingSpinner from '../../ui/LoadingSpinner'
import ErrorMessage from '../../ui/ErrorMessage'

const DataList = ({ data, loading, error, onSearch, searchQuery }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">API Data</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <DataItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

DataList.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
}

export default DataList
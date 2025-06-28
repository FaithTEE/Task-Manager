import PropTypes from 'prop-types'
import Card from '../../ui/Card'

const DataItem = ({ item }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{item.body}</p>
    </Card>
  )
}

DataItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
}

export default DataItem
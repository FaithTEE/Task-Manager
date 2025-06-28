import PropTypes from 'prop-types'
import { FiTrash2, FiCheck, FiCircle } from 'react-icons/fi'

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(task.id)}
          className="text-gray-500 hover:text-green-500"
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed ? (
            <FiCheck className="text-green-500" size={18} />
          ) : (
            <FiCircle size={18} />
          )}
        </button>
        <span
          className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-500 hover:text-red-500"
        aria-label="Delete task"
      >
        <FiTrash2 size={18} />
      </button>
    </li>
  )
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TaskItem
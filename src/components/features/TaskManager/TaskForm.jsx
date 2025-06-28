import { useState } from 'react'
import Button from '../../ui/Button'
import PropTypes from'prop-types';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      onAddTask(taskText.trim())
      setTaskText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
}

export default TaskForm
import { useState, useEffect } from 'react'
import TaskItem from './TaskItem'
import TaskForm from './TaskForm'
import TaskFilter from './TaskFilter'
import useLocalStorage from '../../../hooks/useLocalStorage'
import Card from '../../ui/Card'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('all')

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
  }

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <TaskForm onAddTask={addTask} />
      </Card>
      
      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Tasks</h2>
          <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>
        
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500">No tasks found</p>
        ) : (
          <ul className="space-y-2">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}

export default TaskManager
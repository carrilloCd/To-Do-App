import { useState, useEffect } from 'react'
import { Title } from './components/Title'
import { Input } from './components/Input'
import { TaskContainer } from './components/TaskContainer'

const INITIAL_DATA = [
  {
    id: 0,
    description: 'First To-Do Note',
    completed: false
  },
  {
    id: 2,
    description: 'Second To-Do Note',
    completed: false
  },
  {
    id: 3,
    description: 'Third To-Do Note',
    completed: false
  },
  {
    id: 4,
    description: 'Fourth To-Do Note',
    completed: false
  },
  {
    id: 5,
    description: 'Fifth To-Do Note',
    completed: false
  }
]

function App () {
  const [tasks, setTasks] = useState(INITIAL_DATA)
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTask, setFilteredTask] = useState(tasks)

  const addTask = (description) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1] : 1
    const newTask = {
      id: lastId + 1,
      description,
      completed: false
    }

    const tasksList = [...tasks]
    tasksList.push(newTask)

    setTasks(tasksList)
  }

  const handleTaskComplete = (id) => {
    const updatedList = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: (!task.completed) }
      }

      return task
    })

    setTasks(updatedList)
  }

  const handleDelete = (id) => {
    const updatedList = tasks.filter(task => task.id !== id)
    setTasks(updatedList)
  }

  const showAllTask = () => {
    setActiveFilter('all')
  }
  const showActiveTask = () => {
    setActiveFilter('active')
  }
  const showCompletedTask = () => {
    setActiveFilter('completed')
  }
  const handleClearComplete = () => {
    const updateList = tasks.filter(task => !task.completed)
    setFilteredTask(updateList)
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTask(tasks)
    } else if (activeFilter === 'active') {
      const activeTasks = tasks.filter(task => task.completed === false)
      setFilteredTask(activeTasks)
    } else if (activeFilter === 'completed') {
      const completedTasks = tasks.filter(task => task.completed === true)
      setFilteredTask(completedTasks)
    }
  }, [activeFilter, tasks])
  return (
    <div className='bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5 font-inter'>
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <Input createTask={addTask} />
        <TaskContainer
          tasks={filteredTask}
          handleTaskComplete={handleTaskComplete}
          handleDelete={handleDelete}
          showAllTask={showAllTask}
          showActiveTask={showActiveTask}
          showCompletedTask={showCompletedTask}
          handleClearComplete={handleClearComplete}
          activeFilter={activeFilter}
        />
      </div>
    </div>
  )
}

export default App

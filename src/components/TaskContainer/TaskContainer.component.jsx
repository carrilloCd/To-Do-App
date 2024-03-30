import { Task } from '../Task'
import { TaskFilters } from '../TaskFilters'

export const TaskContainer = ({
  tasks,
  handleTaskComplete,
  handleDelete,
  showAllTask,
  showActiveTask,
  showCompletedTask,
  handleClearComplete,
  activeFilter
}) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
      {tasks.map((task) => {
        return <Task task={task} key={task.id} handleTaskComplete={handleTaskComplete} handleDelete={handleDelete} />
      })}
      <TaskFilters
        activeFilter={activeFilter}
        total={tasks.length}
        showAllTask={showAllTask}
        showActiveTask={showActiveTask}
        showCompletedTask={showCompletedTask}
        handleClearComplete={handleClearComplete}
      />
    </div>
  )
}

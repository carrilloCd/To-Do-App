export const Task = ({ task, handleTaskComplete, handleDelete }) => {
  const { description, completed, id } = task
  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600'>
      <div className='flex items-center'>
        {
          completed
            ? <div onClick={() => handleTaskComplete(id)} className='bg-green-700 p-1 rounded-full cursor-pointer'><img src='/check-icon.svg' alt='Check Icon' className='h-4 w-4' /></div>
            : <span onClick={() => handleTaskComplete(id)} className='border-solid border border-gray-500 rounded-full p-3 cursor-pointer' />
        }

        <p className={'pl-3 ' + (completed && 'line-through')}>
          {description}
        </p>
      </div>
      <img onClick={() => handleDelete(id)} src='/close-icon.svg' alt='Close Icon' className='h-5 w-5 cursor-pointer transition-all duration-300 ease-in' />
    </div>
  )
}

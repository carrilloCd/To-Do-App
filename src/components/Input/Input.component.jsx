import { useState } from 'react'

export const Input = ({ createTask }) => {
  const [description, setDescription] = useState('')

  const handleChange = (e) => {
    setDescription(e.target.value)
  }

  const handleCreate = (e) => {
    if (e.key === 'Enter') {
      createTask(description)
      setDescription('')
    }
  }
  return (
    <div className='mt-6 relative'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <span className='border border-gray-500 border-solid p-3 rounded-full' />
      </div>
      <input
        type='text'
        className='focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all durarion-300 ease-in-out'
        placeholder="What's next"
        value={description}
        onChange={handleChange}
        onKeyDown={handleCreate}
      />
    </div>
  )
}

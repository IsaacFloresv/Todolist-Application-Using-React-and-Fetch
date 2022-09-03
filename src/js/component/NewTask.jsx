import React, { useMemo } from 'react'

const NewTask = ({ inputValue, handleInputChange, handleAddTask }) => {
  return (
    <div className="p-0">
      <input
        autoFocus
        value={inputValue}
        className="input-task w-100 px-5 py-3 my-1"
        placeholder="Add new task..."
        onChange={(data) => handleInputChange(data)}
        onKeyDown={(data) => handleAddTask(data)}
        type="text" />
      <hr />
    </div>
  )
}


export default NewTask
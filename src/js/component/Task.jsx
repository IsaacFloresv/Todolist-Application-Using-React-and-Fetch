import React from 'react'

const Task = ({ task, index, setDeleteItemShowing, deleteItemShowing, handleDeleteTask, handleCompleteTask }) => {

  return (
    <div
      className="p-0"
      onMouseOver={() => setDeleteItemShowing({ isShowing: true, index: index })}
      onMouseLeave={() => setDeleteItemShowing({ isShowing: false, index: null })}
    >
      <div className="m-0 p-0 d-flex align-items-center justify-content-between">
        <div>
          <h5
            className={` text-muted fw-normal px-4 py-3 m-0`}
            style={task.done ? { textDecoration: 'line-through' } : {}}
          >
            {task.label}
          </h5>
        </div>
        <div className='d-flex align-items-center'>
          <span
            className={`btn-delete text-success fw-normal px-3 py-3 m-0 text-end
          ${deleteItemShowing.index === index ? '' : 'd-none'}`}
            onClick={() => handleCompleteTask(index)}
          >
            ✓
          </span>
          <span
            className={`btn-delete text-danger fw-normal px-3 py-3 m-0 text-end
          ${deleteItemShowing.index === index ? '' : 'd-none'}`}
            onClick={() => handleDeleteTask(index)}
          >
            x
          </span>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Task
import React from 'react'

const Task = ({ task, index, setDeleteItemShowing, deleteItemShowing, handleDeleteTask }) => {

  return (
    <div
      className="p-0"
      onMouseOver={() => setDeleteItemShowing({ isShowing: true, index: index })}
      onMouseLeave={() => setDeleteItemShowing({ isShowing: false, index: null })}
    >
      <div className="m-0 p-0 d-flex align-items-center justify-content-between">
        <h5 className={` text-muted fw-normal px-5 py-3 m-0`}>
          {task}
        </h5>
        <span
          className={`btn-delete text-danger fw-normal px-5 py-3 m-0 text-end
          ${deleteItemShowing.isShowing && deleteItemShowing.index === index ? '' : 'd-none'}`}
          onClick={() => handleDeleteTask(index)}
        >
          x
        </span>
      </div>
      <hr />
    </div>
  )
}

export default Task
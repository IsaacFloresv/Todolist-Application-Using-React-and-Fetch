import React from 'react'

const Task = ({ task, index, deleteItemShowing, handleDeleteTask }) => {

  return (
    <div
    >
      <div className="m-0 p-0 d-flex align-items-center"
      >
        <h5 className={`${!deleteItemShowing ? `w-100` : `w-75`} text-muted fw-normal px-5 py-3 m-0`}>
          {task}
        </h5>
        <span className={`btn-delete w-25 text-danger fw-normal px-5 py-3 m-0 text-end ${deleteItemShowing.isShowing && deleteItemShowing.index === index ? '' : 'd-none'}`}
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
import React from 'react'

const Footer = ({ tasks, handleDeleteAllTasks }) => {
  return (
    <div className='py-2 d-flex justify-content-between'>
      <div>
        <span className="text-muted fw-light">
          <small>
            {
              tasks.length > 0
                ? `${tasks.length} item left`
                : `No tasks`
            }
          </small>
        </span>
      </div>

      <div onClick={() => handleDeleteAllTasks()}>
        <span className='btn p-0 text-danger fw-light'>
          <small>
            {
              tasks.length > 0
                ? 'Clear all'
                : ''
            }
          </small>
        </span>
      </div>
    </div>
  )
}

export default Footer
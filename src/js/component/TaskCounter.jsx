import React from 'react'

const TaskCounter = ({ tasks }) => {
  return (
    <span className="text-muted py-2 fw-light">
      <small>
        {
          tasks.length > 0
            ? `${tasks.length} item left`
            : `No have tasks pending`
        }
      </small>
    </span>
  )
}

export default TaskCounter
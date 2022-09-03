import React from 'react'

const NoTaskMessage = ({ message }) => {
  return (
    <>
      <h4 className="p-2 text-center text-muted fw-light">
        {message}
      </h4>
      <hr />
    </>
  )
}

export default NoTaskMessage
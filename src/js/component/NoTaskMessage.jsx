import React from 'react'

const NoTaskMessage = ({ message }) => {
  return (
    <>
      <h4 className="p-5 text-center text-muted fw-light">
        {message}
      </h4>
      <hr />
    </>
  )
}

export default NoTaskMessage
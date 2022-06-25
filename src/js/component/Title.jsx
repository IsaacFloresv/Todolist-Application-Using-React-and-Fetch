import React from 'react'

const Title = ({ title }) => {
  return (
    <div className="pt-5 pb-3">
      <h1 className="fw-light text-muted">
        {title}
      </h1>
    </div>
  )
}

export default Title
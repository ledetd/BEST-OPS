import React from 'react'

const Card = ( { children, bg = 'bg-gray-100' }) => {
  return (
    <div className={ `${bg} border best-border p-6 rounded-lg shadow-md`}> { children }</div>
  )
}

export default Card
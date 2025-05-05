import React from 'react'
import {NavLink} from 'react-router-dom';

const SubmitButton = () => {
  return (
    <button
    className="best-body hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Add 
  </button>
  )
}

export default SubmitButton
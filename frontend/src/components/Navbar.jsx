import React from 'react'
import {Link} from 'react-router-dom';
import dkflag from '../assets/images/dkflag.jpg';
import best_logo from '../assets/images/best_logo.png';

const Navbar = () => {
  return (
    <>
    <nav className="best-body border-b best-border">
<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div className="flex h-20 items-center justify-between">
    <div
      className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
    >
    
      <Link className="flex flex-shrink-0 items-center mr-4" to="/">
        <img
          className="h-10 w-auto"
          src={ dkflag }
          alt="BEST Operations"
        />
        <span className="hidden md:block text-white text-2xl font-bold ml-2 uppercase"
          >Themis</span
        >
        
      </Link>
      <div className="md:ml-auto">
        <div className="flex space-x-2">

          <Link
            to="/wells"
            className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            >Wells</Link
          >
          <Link
            to="/projects"
            className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            >Projects</Link
          >
        </div>
      </div>
    </div>
  </div>
</div>
</nav>
</>
  )
}

export default Navbar
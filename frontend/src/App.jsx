import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import WellListings from './components/WellListings';
import ProjectListings from './components/ProjectListings';


const App = () => {


  return (
    <>   
    <Navbar />
    <Hero />
    <HomeCards />
    <WellListings />
    <ProjectListings />
   





 
 

  <section className="m-auto max-w-lg my-10 px-6">
    <a
      href="jobs.html"
      className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Projects</a
    >
  </section>
</>

  )
}

export default App;
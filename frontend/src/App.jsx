import React, {useState, useEffect} from 'react'
import api from './api'


const App = () => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const response = await api.get('/projects/');
    setProjects(response.data)
  };
  const [wells, setWells] = useState([]);
  const fetchWells = async () => {
    const response = await api.get('/wells/');
    setWells(response.data)
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  useEffect(() => {
    fetchWells();
  }, []);




  return (
    <>









    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl uppercase">Themis</h2>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Project management 
        </p>
      </div>
    </div>


    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center uppercase">
      <a class="mr-5 hover:text-gray-900">Projects</a>
      <a class="mr-5 hover:text-gray-900">Wells</a>
      <a class="mr-5 hover:text-gray-900">Crew</a>
      <a class="mr-5 hover:text-gray-900">PRA</a>
    </nav>

  </div>
</header>


    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Well Name Here</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>

</>

  )
}

export default App;
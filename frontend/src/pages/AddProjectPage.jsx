import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';

const AddProjectPage = ({ addProjectSubmit }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [customer, setCustomer] = useState('');
    const [project_manager, setProjectmanager] = useState('');

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newProject = {
            name,
            location,
            customer,
            project_manager
        }
        addProjectSubmit(newProject);

        return navigate('/projects');
    };

  return (
    
    <section className="best-body">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Project</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Project Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Project name"
                required
                value = {name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Project Location'
                required 
                value = {location}    
                onChange={(e) => setLocation(e.target.value)}      
              />
            </div>

            <h3 className="text-2xl mb-5">Customer</h3>

            <div className="mb-4">
              <label htmlFor="customer" className="block text-gray-700 font-bold mb-2"
                >Customer Name</label
              >
              <input
                type="text"
                id="customer"
                name="customer"
                className="border rounded w-full py-2 px-3"
                placeholder="Customer Name"
                required
                value = {customer} 
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="customer" className="block text-gray-700 font-bold mb-2"
                >Project Manager</label
              >
              <input
                type="text"
                id="project_manager"
                name="project_manager"
                className="border rounded w-full py-2 px-3"
                placeholder="Project Manager"
                required
                value = {project_manager} 
                onChange={(e) => setProjectmanager(e.target.value)}
              />
            </div>
        
            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export default AddProjectPage
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
    <div>
      {/* Navbar */}
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Hello
          </a>
          <a className='navbar-brand' href='/wells'>
            Wells
          </a>
    
        </div>
      </nav>
      {/* Table Section */}
      <div className='container'>
        <h2 className='text-center my-4'>Projects List</h2>
        <table className='table table-striped table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th>Project</th>
              <th>Location</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
          
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.location}</td>
                <td>{project.customer}</td>
              </tr>
            ))}
            <thead className='table-dark'>
            <h2 className='text-center my-4'>Well List</h2>
            <tr>
              <th>Well</th>
            </tr>
          </thead>
            {wells.map((well) => (
              <tr key={well.id}>
                <td>{well.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
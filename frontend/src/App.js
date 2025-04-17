import React, {useState, useEffect} from 'react'
import api from './api'

const App = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const fetchProjects = async () => {
    const response = await api.get('/projects/');
    setProjects(response.data)
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await api.post('/projects/', formData);
    console.log('formData',formData);
    fetchProjects();
    setFormData({
      project: '',
      location: '',
      customer: ''
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            
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
          </tbody>
        </table>
      </div>
    </div>
  )

}

export default App;
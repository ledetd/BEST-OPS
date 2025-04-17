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
      name: '',
      description: '',
      price: ''
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
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
       
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

}

export default App;
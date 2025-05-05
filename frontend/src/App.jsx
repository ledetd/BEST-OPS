import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import WellsPage from './pages/WellsPage'
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import AddProjectPage from './pages/AddProjectPage';
import AddWellPage from './pages/AddWellPage';


const App = () => {
  const addProject = async (newProject) => {
    const res = await fetch('http://127.0.0.1:8000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });
      return;
  };

  const addWell = async (newWell) => {
    const res = await fetch('http://127.0.0.1:8000/wells', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWell),
    });
      return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      < Route index element={ <HomePage /> } />
      < Route path='/wells' element={ <WellsPage /> } />
      < Route path='/add-well' element={ <AddWellPage addWellSubmit={addWell} /> } />
      < Route path='/projects' element={ <ProjectsPage /> } />
      < Route path='/projects/:id' element={ <ProjectPage /> } />
      < Route path='/add-project' element={ <AddProjectPage addProjectSubmit={addProject} /> } />
    </Route>
    )
  );
    return < RouterProvider router={router}/>
  };

export default App;
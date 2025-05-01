import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import WellsPage from './pages/WellsPage'
import ProjectsPage from './pages/ProjectsPage';
import AddProjectPage from './pages/AddProjectPage';



const App = () => {
  const addProject = (newProject) => {
    console.log(newProject)
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      < Route index element={ <HomePage /> } />
      < Route path='/wells' element={ <WellsPage /> } />
      < Route path='/projects' element={ <ProjectsPage /> } />
      < Route path='/add-project' element={ <AddProjectPage addProjectSubmit={addProject} /> } />
    </Route>
    )
  );
    return < RouterProvider router={router}/>
  };

export default App;
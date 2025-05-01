import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import api from '../api';

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const fetchProject = async () => {
      const response = await api.get(`/projects/${id}`);
      setProject(response.data)
    };

    useEffect(() => {
      fetchProject();
    }, []);


  return (
    <>
    <div>{ project.name }</div>
    <div>{ project.location }</div>
    <div>{ project.customer }</div>
    <div>{ project.project_manager }</div>
    </>
  )
}


export default ProjectPage
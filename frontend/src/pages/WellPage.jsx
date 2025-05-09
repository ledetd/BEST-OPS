import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import api from '../api';

const WellPage = () => {
    const { id } = useParams();
    const [well, setWell] = useState([]);
    const fetchWell = async () => {
      const response = await api.get(`/wells/${id}`);
      setWell(response.data)
    };

    useEffect(() => {
      fetchWell();
    }, []);


  return (
    <>
    <div>{ well.name }</div>
    
    </>
  )
  
}


export default WellPage
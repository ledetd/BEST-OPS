import React, {useState, useEffect} from 'react'
import api from '../api';
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import AddButton from './AddButton';

const WellListings = () => {

    const [wells, setWells] = useState([]);
    const fetchWells = async () => {
      const response = await api.get('/wells/');
      setWells(response.data)
    };

    useEffect(() => {
      fetchWells();
    }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
<div className="sm:flex sm:items-center">
 <div className="sm:flex-auto">
   <h1 className="text-base font-semibold text-gray-900">Wells</h1>
   <p className="mt-2 text-sm text-gray-700">
     A list of all the wells in the database.
   </p>
 </div>
 <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
 <NavLink to="/add-well">
<AddButton />
   </NavLink>
 </div>
</div>
<div className="mt-8 flow-root">
 <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
   <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
     <table className="min-w-full divide-y divide-gray-300">
       <thead>
         <tr>
           <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
             Name
           </th>
           <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
             Customer
           </th>
           <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
             PM
           </th>
           <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
             Status
           </th>
           <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
             <span className="sr-only">Edit</span>
           </th>
         </tr>
       </thead>
       <tbody className="divide-y divide-gray-200">
         {wells.map((well) => (
           <tr key={well.id}>
             <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
               {well.name}
             </td>
             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{well.name}</td>
             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{well.name}</td>
             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{well.name}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Link to={`/wells/${well.id}`} className="text-indigo-600 hover:text-indigo-900">
                        Details
                      </Link>
                    </td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 </div>
</div>
</div>
  )
}

export default WellListings
import React, {useState, useEffect} from 'react'
import api from '../api';

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
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    { wells.map((well) => (

        <div key={well.id}>
        <div class="bg-white rounded-xl shadow-md relative" >
        <div class="p-4">
          <div class="mb-6">
            <div class="text-gray-600 my-2">{ well.name }</div>
            <h3 class="text-xl font-bold">PM</h3>
          </div>

          <div class="mb-5">
           Status
          </div>

          <h3 class="text-indigo-500 mb-2">Revenue</h3>

          <div class="border border-gray-100 mb-5"></div>

          <div class="flex flex-col lg:flex-row justify-between mb-4">
            <div class="text-orange-700 mb-3">
              <i class="fa-solid fa-location-dot text-lg"></i>
              Location
            </div>
            <a
              href="job.html"
              class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
             Details
            </a>
          </div>
        </div>
      </div>
      </div>
     

    ))}
</div>

  )
}

export default WellListings
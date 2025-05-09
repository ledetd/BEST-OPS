import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';

const AddWellPage = ({ addWellSubmit }) => {
    const [name, setName] = useState('');


    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newWell = {
            name,
 
        }
        addWellSubmit(newWell);

        return navigate('/wells');
    };

  return (
    
    <section className="best-body">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Well</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Well Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Well name"
                required
                value = {name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
        
            <div>
            < SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export default AddWellPage
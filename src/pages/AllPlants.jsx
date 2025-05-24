import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {

    const initialPlants = useLoaderData()

    const [plants, setPlants] = useState(initialPlants);

    return (
        <div>
                <section className="my-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">🌿 All Plants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-6">
        {plants.map((plant) => (
          <div key={plant._id} className="card bg-green-100 shadow-md p-2 rounded-xl overflow-hidden">
            <div className="rounded-2xl bg-white">
              <img src={plant.image} alt={plant.plantName} className="h-48 w-full object-contain" />
            </div>
            <div className="p-4 flex justify-between items-end">
                <div>
                                 <h3 className="text-xl font-semibold text-green-800">{plant.plantName}</h3>
              <p className="text-sm text-gray-700">{plant.description}</p>
              <p className="text-sm mt-1 text-green-600 font-medium">Care Level: {plant.careLevel}</p> 
                </div>
                <div>
                    <Link to={`/plantDetails/${plant._id}`} className='btn px-4 py-3 rounded-full hover:bg-green-800 bg-[#234823] trxt-lg font-bold  text-green-300'>Details</Link>
                </div>

            </div>
          </div>
        ))}
      </div>

      {plants.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No New Plants Here</p>
      )}
    </section>
        </div>
    );
};

export default AllPlants;
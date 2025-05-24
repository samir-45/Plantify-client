import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    // Get pre-fetched data from React Router loader
    const plant = useLoaderData();

    return (
        <div className="p-6">

            <div key={plant._id} className="grid p-3 grid-cols-1 md:grid-cols-2 rounded-2xl bg-green-100 shadow-xl">
                <div className="px-4 pt-4 rounded-2xl bg-white">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="rounded-xl h-64 w-full object-contain"
                    />
                </div>

                <div className="card-body ">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="card-title text-2xl">{plant.plantName}</h2>
                            <p className="text-sm text-gray-500">{plant.category}</p>
                        </div>
                        {/* <span className="badge badge-primary badge-lg">${7.99}</span> */}
                    </div>

                    <p className="py-2">{plant.description}</p>

                    <div className="grid grid-cols-2 gap-4 my-4">

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Care: {plant.careLevel}
                        </div>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Water: {plant.wateringFrequency}/week
                        </div>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            Next Watering Date: {plant.nextWateringDate}
                        </div>

                                                <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            Last Watered Date: {plant.lastWateredDate}
                        </div>

                                                <div className="flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                            Health: {plant.health}
                        </div>

                    </div>


                </div>
            </div>



        </div>
    );
};

export default PlantDetails;
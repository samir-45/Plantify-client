import { useState } from "react";
import { Link } from "react-router";

const NewPlants = () => {
  const [newPlants, setNewPlants] = useState([]);

  if (newPlants.length === 0) {
    (async () => {
      try {
        const res = await fetch("https://plant-care-server-mauve.vercel.app/plants");
        const data = await res.json();

        const today = new Date();
        const filtered = data.filter((plant) => {
          const addedDate = new Date(plant.plantAddedDate);
          const diffInDays = (today - addedDate) / (1000 * 60 * 60 * 24);
          return diffInDays <= 20;
        });

        setNewPlants(filtered);
      } catch (error) {
        console.error("Failed to fetch plants:", error);
      }
    })();
  }

  return (
    <section className="my-10 max-w-7xl mx-auto px-4">
            <h2 className='font-bold text-2xl pb-2 text-green-900'>New Plants</h2>
            <span className='px-12 border-t-4 border-green-700'></span>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-6">
        {newPlants.map((plant) => (
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
                    <Link to={`plantDetails/${plant._id}`} className='btn px-4 py-3 rounded-full hover:bg-green-800 bg-[#234823] trxt-lg font-bold  text-green-300'>Details</Link>
                </div>

            </div>
          </div>
        ))}
      </div>

      {newPlants.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No New Plants Here</p>
      )}
    </section>
  );
};

export default NewPlants;

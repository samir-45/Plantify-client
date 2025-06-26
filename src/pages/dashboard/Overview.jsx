import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";


const Overview = () => {

    const { user } = use(AuthContext)

    const [allPlants, setAllPlants] = useState([]);
    const [myPlants, setMyPlants] = useState([]);

      useEffect(() => {
    // Fetch all plants
    fetch("https://plant-care-server-mauve.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => setAllPlants(data));

    // Fetch my plants by user email
    fetch(`https://plant-care-server-mauve.vercel.app/plants/my?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPlants(data));
  }, [user?.email]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">📊 Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
                    <h3 className="text-lg font-semibold">Total Plants</h3>
                    <p className="text-2xl font-bold">{allPlants.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
                    <h3 className="text-lg font-semibold">My Plants</h3>
                    <p className="text-2xl font-bold">{myPlants.length}</p>
                </div>
                {/* Add more stats if needed */}
            </div>

            {/* User Info */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">👤 Logged-in User Info</h3>
                <p><strong>Name:</strong> {user?.displayName}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                {user?.photoURL && <img src={user.photoURL} alt="User" className="w-20 h-20 rounded-full mt-4" />}
            </div>
        </div>
    );
};

export default Overview;

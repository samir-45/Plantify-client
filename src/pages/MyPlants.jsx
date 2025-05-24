import { useState } from "react";
import { Link } from "react-router";

const MyPlants = () => {
  const userEmail = "mdmahinkhan621@gmail.com"; // ✅ Replace with your actual logged-in user logic
  const [myPlants, setMyPlants] = useState([]);

  if (myPlants.length === 0) {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/plants");
        const data = await res.json();
        const userPlants = data.filter((plant) => plant.email === userEmail);
        setMyPlants(userPlants);
      } catch (error) {
        console.error(error);
      }
    })();
  }

  return (
<div className="w-full px-3">
        <div className="overflow-x-auto w-full rounded-2xl mx-auto px-4 my-10 ">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">🌿 My Plants</h2>

      <table className="table">
        {/* Head */}
        <thead>
          <tr>
            <th></th>
            <th>Plant</th>
            <th>Description</th>
            <th>Care Level</th>
            <th></th>
          </tr>
        </thead>

        <tbody >
          {myPlants.map((plant, index) => (
            <tr key={plant._id}>

              <th>
{index + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img className="object-contain" src={plant.image} alt={plant.plantName} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{plant.plantName}</div>
                    <div className="text-sm opacity-50">{plant.email}</div>
                  </div>
                </div>
              </td>

              <td>
                {plant.description}
                <br />
                <span className="badge badge-ghost badge-sm">{plant.category || "General"}</span>
              </td>

              <td>{plant.careLevel || "N/A"}</td>

              <th>
                <button className="btn btn-ghost btn-xs"><Link to=''>Details</Link></button>
                <button className="btn btn-ghost btn-xs"><Link to=''>Delete</Link></button>
                <button className="btn btn-ghost btn-xs"><Link to=''>Edit</Link></button>
              </th>
            </tr>

          ))}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Plant</th>
            <th>Description</th>
            <th>Care Level</th>
            <th></th>
          </tr>
        </tfoot>
      </table>

      {myPlants.length === 0 && (
        <p className="text-center mt-6 text-gray-500">No plants found for your account.</p>
      )}
    </div>
</div>
  );
};

export default MyPlants;

import { use, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const MyPlants = () => {

  const {user} = use(AuthContext);

  const userEmail = user?.email;
  const [myPlants, setMyPlants] = useState([]);

  if (myPlants.length === 0) {
    (async () => {
      try {
        const res = await fetch("https://plant-care-server-mauve.vercel.app/plants");
        const data = await res.json();
        const userPlants = data.filter((plant) => plant.email === userEmail);
        setMyPlants(userPlants);
      } catch (error) {
        console.error(error);
      }
    })();
  }


  // Doing a delete operation
  const handleDelete = (id) => {
    console.log(id)
    // use a delete conformation
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://plant-care-server-mauve.vercel.app/plants/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)

            if (data.deletedCount) {

              const remainingPlants = myPlants.filter(user => user._id !== id);
              setMyPlants(remainingPlants)


              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }

          })

      }
    });
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

          <tbody>
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

                <th className="space-x-3">
                  <button className="btn border-none hover:bg-blue-400 bg-transparent w-7 h-7 btn-xs"><Link to={`/plantDetails/${plant._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-500 hover:text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>

                  </Link></button>


                  <button className="btn border-none hover:bg-green-400 bg-transparent w-7 h-7 btn-xs"><Link to={`/updatePlants/${plant._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500 hover:text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </Link></button>
                  <button onClick={() => handleDelete(plant._id)} className="btn border-none hover:bg-red-400 bg-transparent w-7 h-7 btn-xs"><Link to=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500 hover:text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>

                  </Link></button>
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

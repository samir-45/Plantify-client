import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlants = () => {

    const plant = useLoaderData()
    const { plantName, image, category, description, careLevel, wateringFrequency, lastWateredDate, nextWateringDate, health, email, name, plantAddedDate, _id } = plant;

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatedPlant = Object.fromEntries(formData.entries());
        console.log(updatedPlant);

        // NOw update data to the database
        fetch(`https://plant-care-server-mauve.vercel.app/plants/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPlant)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Coffee updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div className="w-full px-3">
                <div className=" w-full mx-auto p-6 bg-green-50 rounded-2xl shadow-xl mt-10 md:grid gap-5 grid-rows-2 md:grid-rows-1 md:grid-cols-2 ">


                    <div>
                        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Update Plant</h2>
                        <form onSubmit={handleUpdate} className="space-y-4">

                            <input type="text" defaultValue={image} name="image" placeholder="Image URL" className="input input-bordered w-full" required />

                            <input type="text" defaultValue={plantName} name="plantName" placeholder="Plant Name" className="input input-bordered w-full" required />

                            <select name="category" defaultValue={category} className="select select-bordered w-full" required>
                                <option disabled selected>Category</option>
                                <option>Succulent</option>
                                <option>Fern</option>
                                <option>Flowering</option>
                            </select>

                            <textarea defaultValue={description} name="description" className="textarea textarea-bordered w-full" placeholder="Description" rows={3} required />

                            <select defaultValue={careLevel} name="careLevel" className="select select-bordered w-full" required>
                                <option disabled selected>Care Level</option>
                                <option>Easy</option>
                                <option>Moderate</option>
                                <option>Difficult</option>
                            </select>

                            <input defaultValue={wateringFrequency} type="text" name="wateringFrequency" placeholder="Watering Frequency (e.g. every 3 days)" className="input input-bordered w-full" required />
                            <label className="label">
                                <span className="label-text">Last Watered Date </span>
                            </label> <br />
                            <input defaultValue={lastWateredDate} type="date" name="lastWateredDate" placeholder="Last Watered Date" className="input input-bordered w-full" required />
                            <label className="label">
                                <span className="label-text">Next Watering Date</span>
                            </label> <br />
                            <input defaultValue={nextWateringDate} type="date" name="nextWateringDate" placeholder="Next Watering Date" className="input input-bordered w-full" required />
                            <label className="label">
                                <span className="label-text">Todays Date</span>
                            </label> <br />
                            <input defaultValue={plantAddedDate} type="date" name="plantAddedDate" placeholder="Todays Date" className="input input-bordered w-full" required />

                            <input defaultValue={health} type="text" name="health" placeholder="Health Status" className="input input-bordered w-full" required />

                            <input defaultValue={email} type="email" name="email" placeholder="User Email" className="input input-bordered w-full" required />

                            <input defaultValue={name} type="text" name="name" placeholder="User Name" className="input input-bordered w-full" required />

                            <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-4">
                                Update Plant
                            </button>
                        </form>
                    </div>

                    {/* Plant pic */}
                    <div className="bg-white m-5 rounded-2xl hidden  md:flex items-center justify-center">
                        <img className="w-10/12" src='https://i.ibb.co/pjPfnqkZ/image-from-rawpixel-id-12701460-png.png' alt="" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default UpdatePlants;
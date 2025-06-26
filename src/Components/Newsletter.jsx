import React, { use, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Newsletter = () => {

    const {user} = use(AuthContext);

        const [click, setClick] = useState(false)

    const notify = () => {
        setClick(true)
        toast.success('Subscribed successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
}
);
    }



    return (

        <div className='w-full px-3'>
            <section className="bg-base-200 py-12 px-4 my-10 mx-auto rounded-2xl text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">🌱 Get Exclusive Plant Care Tips & Offers!</h2>
                    <p className="mb-6 text-base text-gray-600">
                        Subscribe to our newsletter and receive monthly guides, plant care hacks, and special discounts — straight to your inbox!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <input
                            defaultValue={user?.email}
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full sm:max-w-xs"
                        />
                        <button onClick={notify} className={`btn px-4 ${click && 'cursor-not-allowed'} py-3 rounded-full hover:bg-green-800 bg-[#234823] trxt-lg font-bold  text-green-300`}>Subscribe</button>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>


    );
};

export default Newsletter;
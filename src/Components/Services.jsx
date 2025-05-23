import React from 'react';

const Services = () => {
    return (
<div className='w-full px-3 py-5'>
            <h2 className='font-bold text-2xl pb-2 text-green-900'>Our Services</h2>
            <span className='px-12 border-t-4 border-green-700'></span>
            <div className=' grid py-3 grid-cols-3 gap-3'>

            <div className="card card-side bg-base-100 px-5 py-9 shadow-lg flex justify-around items-center">
                <div>
                    <img
                        src="https://i.ibb.co/8LYWTZPL/rocket.png"
                        alt="Movie" 
                        className='w-5/6'
                        />
                </div>
                <div className="">
                    <h2 className="card-title">Free Shipping!</h2>
                    <p>We Provide Plant information within 24 Hours</p>
                </div>
            </div>

            <div className="card card-side bg-base-100 px-5 py-9 shadow-lg flex justify-around items-center">
                <div>
                    <img
                        src="https://i.ibb.co/JRxJym0t/telephone.png"
                        alt="Movie" 
                        className='w-5/6'
                        />
                </div>
                <div className="">
                    <h2 className="card-title">24/7 Medical Support</h2>
                    <p>We support to prevent from plant desease</p>
                </div>
            </div>

            <div className="card card-side bg-base-100 px-5 py-9 shadow-lg flex justify-around items-center">
                <div>
                    <img
                        src="https://i.ibb.co/Cp4rKKpm/return.png"
                        alt="Movie" 
                        className='w-5/6'
                        />
                </div>
                <div className="">
                    <h2 className="card-title">Pick & Drop Service!</h2>
                    <p>We pick hampered plant and after service drop to the door</p>
                </div>
            </div>

        </div>
</div>

    );
};

export default Services;
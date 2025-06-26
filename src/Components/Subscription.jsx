import React from 'react';
import Swal from 'sweetalert2';

const Subscription = () => {

  const subscribe = () => {
        Swal.fire({
      position: "center",
      icon: "success",
      title: "Subscribed Successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

    return (
        <div>
<section className="py-8 px-3">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-green-800 mb-3">Choose Your Care Plan</h2>
    <p className="text-gray-600 mb-12">
      Whether you're a newbie or a plant pro, we've got the right care plan for your leafy friends.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Basic Plan */}
      <div className="bg-white border border-green-200 p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-green-700 mb-2">🌿 Basic</h3>
        <p className="text-gray-600 mb-4">For casual plant lovers</p>
        <p className="text-3xl font-bold text-green-900 mb-6">$0<span className="text-sm text-gray-500">/mo</span></p>
        <ul className="text-left text-gray-700 mb-6 space-y-2">
          <li>✔ Track up to 5 plants</li>
          <li>✔ Watering alerts</li>
          <li>✘ No cloud backup</li>
        </ul>
        <button onClick={subscribe} className="btn btn-outline hover:bg-green-800 hover:text-white btn-success w-full">Get Started</button>
      </div>

      {/* Pro Plan - Most Popular */}
      <div className="bg-green-100 border-2 border-green-500 p-6 rounded-2xl shadow-lg transform scale-105">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">🌱 Pro</h3>
        <p className="text-green-700 mb-4">For serious plant parents</p>
        <p className="text-3xl font-bold text-green-900 mb-6">$4.99<span className="text-sm text-gray-700">/mo</span></p>
        <ul className="text-left text-green-800 mb-6 space-y-2">
          <li>✔ Unlimited plant tracking</li>
          <li>✔ Cloud sync & reminders</li>
          <li>✔ Plant care history</li>
        </ul>
        <button onClick={subscribe} className="btn btn-success bg-[#234823] text-white hover:bg-green-800  w-full">Upgrade to Pro</button>
      </div>

      {/* Premium Plan */}
      <div className="bg-white border border-green-200 p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-green-700 mb-2">🌳 Premium</h3>
        <p className="text-gray-600 mb-4">For plant businesses & influencers</p>
        <p className="text-3xl font-bold text-green-900 mb-6">$9.99<span className="text-sm text-gray-500">/mo</span></p>
        <ul className="text-left text-gray-700 mb-6 space-y-2">
          <li>✔ All Pro features</li>
          <li>✔ Access to expert tips</li>
          <li>✔ Priority support</li>
        </ul>
        <button onClick={subscribe} className="btn btn-outline hover:bg-green-800 hover:text-white btn-success w-full">Go Premium</button>
      </div>
    </div>
  </div>
</section>


        </div>
    );
};

export default Subscription;
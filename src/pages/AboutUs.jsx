import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-4">🌿 About PlantiFy</h2>
        <p className="text-lg text-gray-600">
          Empowering every plant lover to grow greener, healthier plants — effortlessly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            At <strong>PlantiFy</strong>, our mission is to simplify plant care for everyone. Whether you're a beginner or a plant expert, we provide the tools, reminders, and tips you need to nurture your green friends with confidence and consistency.
          </p>
          <p className="text-gray-700">
            We believe plants don’t just decorate a space — they heal, purify, and bring joy. That’s why we’ve built a platform that not only tracks plant health but also creates a personalized care routine that fits your lifestyle.
          </p>
        </div>

        <img
          src="https://i.ibb.co/YTX5RKZk/openart-image-j-U31-Dx70-1744639171056-raw.png"
          alt="Team Plantify"
          className="rounded-2xl max-w-4/6 shadow-md"
        />
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">Why Choose PlantiFy?</h3>
        <ul className="text-gray-700 list-disc list-inside mx-auto max-w-xl text-left">
          <li>🌱 Intelligent plant care reminders</li>
          <li>📊 Real-time tracking of watering and health</li>
          <li>💚 Personalized dashboard and care analytics</li>
          <li>🌍 Community-powered care tips and guides</li>
        </ul>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">Meet the Creator</h3>
        <p className="text-gray-700">
          PlantiFy is developed with passion by <strong>Md Mahin Khan</strong>, a dedicated full-stack developer on a mission to blend nature with technology. From design to deployment — every line of code is written with care, just like a well-loved plant.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

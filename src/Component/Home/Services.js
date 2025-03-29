import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://tesodtechnologyfinal.onrender.com/services/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-5">
      {/* Header Section */}
      
      {/* Services Content */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide a wide range of services tailored to meet the needs of modern businesses. Our team of experts 
          ensures that every service we offer is crafted with precision and excellence. Explore our offerings below:
        </p>

        {/* Loading and Error Handling */}
        {loading && <p className="text-gray-600">Loading services...</p>}
        {error && <p className="text-red-600">{error}</p>}
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center"
            >
              <img src={service.image} alt={service.title} className="w-24 h-24 object-cover mb-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Know more about us!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Place an Order</h3>
          <p className="text-sm text-gray-600">Fast delivery from your local stores</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Track Progress</h3>
          <p className="text-sm text-gray-600">Real-time updates on your order</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Get Your Order</h3>
          <p className="text-sm text-gray-600">Receive your items at your doorstep</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
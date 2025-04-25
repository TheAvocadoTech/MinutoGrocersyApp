import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="bg-red-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Minutos: Freshness Delivered, Fast and Local</h1>
            <p className="text-lg mb-6">Experience the fastest way to get the groceries right away from your local kirana stores.</p>
            <Link to="/products" className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition">
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/assets/images/grocery-delivery.png" alt="Grocery Delivery" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StoreCard = ({ store }) => {
  return (
    <div className="bg-white rounded-lg p-3 flex items-center border border-gray-200">
      <div className="w-12 h-12 bg-gray-200 rounded-md mr-3 flex-shrink-0"></div>
      
      <div className="flex-grow">
        <h3 className="text-sm font-medium">{store.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <span className="flex items-center text-xs text-yellow-500">
            <span>{store.rating}</span>
            <FaStar className="ml-1" />
          </span>
          <span className="text-xs ml-2 text-green-600 font-medium">
            Open Now
          </span>
        </div>
      </div>
      
      <div className="ml-auto text-right">
        <span className="text-xs text-red-600 font-medium">{store.distance} km</span>
      </div>
    </div>
  );
};

export default StoreCard;
import React from 'react';

const QuantitySelector = ({ quantity, onIncrease, onDecrease, min = 1, max = 99 }) => {
  return (
    <div className="flex items-center border rounded">
      <button 
        onClick={onDecrease}
        disabled={quantity <= min}
        className={`w-8 h-8 flex items-center justify-center ${quantity <= min ? 'text-gray-300' : 'text-gray-700'}`}
      >
        -
      </button>
      
      <span className="w-8 h-8 flex items-center justify-center bg-white">
        {quantity}
      </span>
      
      <button 
        onClick={onIncrease}
        disabled={quantity >= max}
        className={`w-8 h-8 flex items-center justify-center ${quantity >= max ? 'text-gray-300' : 'text-gray-700'}`}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
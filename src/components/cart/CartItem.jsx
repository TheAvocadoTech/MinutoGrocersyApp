import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="flex items-center p-4 bg-gray-200 rounded-lg">
      <div className="w-16 h-16 bg-gray-300 rounded-md mr-4 flex-shrink-0">
        {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />}
      </div>
      
      <div className="flex-grow">
        <h3 className="text-sm font-medium">{item.name}</h3>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={handleDecrease}
              className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-gray-700 border border-gray-300"
            >
              -
            </button>
            <span className="mx-2 text-sm">{item.quantity}</span>
            <button 
              onClick={handleIncrease}
              className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-gray-700 border border-gray-300"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={handleRemove}
            className="text-xs text-gray-500 hover:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
      
      <div className="ml-4 text-right">
        <p className="font-medium text-sm">Rs {item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
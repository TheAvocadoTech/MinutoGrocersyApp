import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';

const OrderSummary = ({ subtotal, deliveryFee, tax, total }) => {
  const [promoCode, setPromoCode] = useState('');
  
  const handleApplyPromo = (e) => {
    e.preventDefault();
    // Handle promo code application logic here
    console.log('Applying promo code:', promoCode);
    // Reset the input after applying
    setPromoCode('');
  };

  return (
    <div className="bg-gray-300 rounded-lg shadow p-4">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm">Subtotal</span>
          <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm">Delivery Fee</span>
          <span className="font-medium">Rs {deliveryFee.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm">Tax</span>
          <span className="font-medium">Rs {tax.toFixed(2)}</span>
        </div>
        
        <div className="flex mt-2">
          <input
            type="text"
            placeholder="Promo Code"
            className="flex-grow p-2 text-sm rounded-l-md border-r-0 focus:outline-none"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button
            onClick={handleApplyPromo}
            className="bg-red-600 text-white px-4 py-2 text-sm rounded-r-md"
          >
            Apply
          </button>
        </div>
        
        <div className="border-t border-gray-400 my-4"></div>
        
        <div className="flex justify-between items-center font-bold">
          <span>TOTAL</span>
          <span>Rs {total.toFixed(2)}</span>
        </div>
        
        <div className="bg-gray-200 rounded-md p-2 flex items-center justify-center gap-2 my-4">
          <FaClock className="text-gray-600" />
          <span className="text-sm">Delivery in 10 minutes</span>
        </div>
        
        <button className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
import React from 'react';

const OrderSummary = ({ items, subtotal, deliveryFee, tax, total }) => {
  return (
    <div className="order-summary bg-gray-100 p-5 rounded-md">
      <h2 className="text-lg font-medium mb-4">Order Summary</h2>
      
      <div className="mb-4">
        {items.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span className="text-sm">{item.quantity} x {item.name}</span>
            <span className="text-sm">Rs.{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-300 my-2"></div>
      
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>Rs.{subtotal.toFixed(2)}</span>
      </div>
      
      <div className="flex justify-between mb-2">
        <span>Delivery Fee</span>
        <span>Rs.{deliveryFee.toFixed(2)}</span>
      </div>
      
      <div className="flex justify-between mb-4">
        <span>Tax</span>
        <span>Rs.{tax.toFixed(2)}</span>
      </div>
      
      <div className="border-t border-gray-300 my-2"></div>
      
      <div className="flex justify-between font-medium">
        <span>TOTAL</span>
        <span>Rs.{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
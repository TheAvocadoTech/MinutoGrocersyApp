import React from 'react';

const OrderHistory = () => {
  const orders = [
    { date: '2nd Feb 2023, 04:56 pm', cost: 'INR' },
    { date: '2nd Feb 2023, 04:56 pm', cost: 'INR' },
  ];

  return (
    <div className="space-y-4">
      {orders.map((order, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex mb-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium text-sm">Order Delivered</div>
              <div className="text-xs text-gray-500">{order.date}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-xs font-medium">Cost {order.cost}</div>
              <button className="mt-1 text-xs text-red-500">Order Again</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
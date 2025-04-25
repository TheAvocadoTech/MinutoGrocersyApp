import React from 'react';

const Wallet = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium mb-4">My Wallet</h2>
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 text-white mb-6">
        <p className="text-sm">Available Balance</p>
        <p className="text-2xl font-bold">₹1,250</p>
        <div className="flex mt-4">
          <button className="bg-white text-red-500 px-3 py-1 rounded text-sm mr-2">
            Add Money
          </button>
          <button className="border border-white text-white px-3 py-1 rounded text-sm">
            Withdraw
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Transaction History</h3>
        <div className="space-y-2">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">
                    {index % 2 === 0 ? 'Money Added' : 'Order Payment'}
                  </p>
                  <p className="text-xs text-gray-500">1st Feb 2023, 10:25 am</p>
                </div>
                <p className={`font-medium ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {index % 2 === 0 ? '+₹500' : '-₹250'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
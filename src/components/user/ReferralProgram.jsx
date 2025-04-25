import React from 'react';

const ReferralProgram = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium mb-4">Referral Program</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="text-sm font-medium">Your Referral Code</p>
        <div className="flex items-center mt-2">
          <input 
            className="border rounded p-2 w-full text-sm bg-white" 
            value="SUBHAN2023" 
            readOnly
          />
          <button className="ml-2 text-blue-500 text-sm">Copy</button>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Referral Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">Total Referrals</p>
            <p className="text-lg font-bold">12</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">Rewards Earned</p>
            <p className="text-lg font-bold">₹240</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
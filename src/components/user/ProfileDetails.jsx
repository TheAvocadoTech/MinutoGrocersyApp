import React from 'react';

const ProfileDetails = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium mb-4">My Profile</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            S
          </div>
          <button className="text-sm text-blue-500">Change Photo</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input 
              className="w-full border rounded p-2 text-sm" 
              value="Subhan" 
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <input 
              className="w-full border rounded p-2 text-sm" 
              value="+91 88854 42200" 
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input 
              className="w-full border rounded p-2 text-sm" 
              value="subhan@example.com" 
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
            <input 
              type="date"
              className="w-full border rounded p-2 text-sm" 
            />
          </div>
        </div>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded text-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
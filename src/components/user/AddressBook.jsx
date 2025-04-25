import React from 'react';

const AddressBook = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Saved Addresses</h2>
        <button className="text-sm bg-red-500 text-white px-3 py-1 rounded">
          Add New
        </button>
      </div>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Home</h3>
            <div className="flex space-x-2">
              <button className="text-xs text-blue-500">Edit</button>
              <button className="text-xs text-red-500">Delete</button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            123 Main Street, Apartment 4B, City Name, State, 123456
          </p>
          <p className="text-sm text-gray-600">Phone: +91 88854 42200</p>
        </div>
        <div className="border rounded-lg p-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Work</h3>
            <div className="flex space-x-2">
              <button className="text-xs text-blue-500">Edit</button>
              <button className="text-xs text-red-500">Delete</button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            456 Business Ave, Floor 5, Office 502, City Name, State, 123456
          </p>
          <p className="text-sm text-gray-600">Phone: +91 88854 42200</p>
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
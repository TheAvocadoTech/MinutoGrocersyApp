import React from 'react';

const CustomerSupport = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium mb-4">Customer Support</h2>
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-medium mb-2">Contact Us</h3>
          <p className="text-sm text-gray-600">Email: support@example.com</p>
          <p className="text-sm text-gray-600">Phone: +1-800-123-4567</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Submit a Ticket</h3>
          <textarea 
            className="w-full border rounded-lg p-2 text-sm" 
            rows="4"
            placeholder="Describe your issue..."
          ></textarea>
          <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded text-sm">
            Submit Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
import React, { useState } from 'react';

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('Orders');

  const menuItems = [
    { name: 'Orders', icon: 'circle' },
    { name: 'Customer Support', icon: 'circle' },
    { name: 'Manage Referrals', icon: 'circle' },
    { name: 'Address', icon: 'circle' },
    { name: 'Profile', icon: 'circle' },
    { name: 'Wallet', icon: 'circle' },
  ];

  const orders = [
    { date: '2nd Feb 2023, 04:56 pm', cost: 'INR' },
    { date: '2nd Feb 2023, 04:56 pm', cost: 'INR' },
  ];

  // Render different content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'Orders':
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
      case 'Customer Support':
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
      case 'Manage Referrals':
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
      case 'Address':
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
      case 'Profile':
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
      case 'Wallet':
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
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p>Select a section from the menu</p>
          </div>
        );
    }
  };

  return (
    <div className="pt-40 mb-16 py-28 flex items-center justify-center">
      <div className="w-[85%]  h-[85vh] border  rounded-lg shadow-md overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar - Fixed width */}
          <div className="w-full md:w-64 bg-white border-r">
            {/* User Info */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Subhan</h3>
                  <p className="text-xs text-gray-500">+91 88854 42200</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div>
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center px-4 py-3 border-b hover:bg-gray-50 cursor-pointer ${
                    activeSection === item.name ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => setActiveSection(item.name)}
                >
                  <div className="w-5 h-5 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Flexible width */}
          <div className="flex-1 p-4 bg-gray-50">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
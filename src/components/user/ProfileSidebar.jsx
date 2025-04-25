import React from 'react';

const ProfileSidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { name: 'Orders', icon: 'circle' },
    { name: 'Customer Support', icon: 'circle' },
    { name: 'Manage Referrals', icon: 'circle' },
    { name: 'Address', icon: 'circle' },
    { name: 'Profile', icon: 'circle' },
    { name: 'Wallet', icon: 'circle' },
  ];

  return (
    <div className="w-full md:w-64 bg-white border-r">
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
  );
};

export default ProfileSidebar;
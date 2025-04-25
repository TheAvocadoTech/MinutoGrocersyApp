import React, { useState } from 'react';
import ProfileSidebar from './ProfileSidebar';
import OrderHistory from './OrderHistory';
import CustomerSupport from './CustomerSupport';
import ReferralProgram from './ReferralProgram';
import AddressBook from './AddressBook';
import ProfileDetails from './ProfileDetails';
import Wallet from './Wallet';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('Orders');

  const renderContent = () => {
    switch (activeSection) {
      case 'Orders':
        return <OrderHistory />;
      case 'Customer Support':
        return <CustomerSupport />;
      case 'Manage Referrals':
        return <ReferralProgram />;
      case 'Address':
        return <AddressBook />;
      case 'Profile':
        return <ProfileDetails />;
      case 'Wallet':
        return <Wallet />;
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
      <div className="w-[85%] h-[85vh] border rounded-lg shadow-md overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row">
          <ProfileSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          <div className="flex-1 p-4 bg-gray-50">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ProfileHeader from '../components/user/ProfileHeader';
import ProfileNavigation from '../components/user/ProfileNavigation';
import OrderHistory from '../components/user/OrderHistory';
import OrderActions from '../components/user/OrderActions';

const ProfilePage = () => {
  // Sample data - replace with actual data from your state/API
  const userData = {
    name: "Subhan",
    phone: "+91 88854 42200"
  };

  const orders = [
    {
      id: 1,
      status: "Delivered",
      date: "2nd Feb 2023, 04:56 pm",
      cost: "NR",
      items: [] // would contain order items in real implementation
    },
    {
      id: 2,
      status: "Delivered",
      date: "2nd Feb 2023, 04:56 pm",
      cost: "NR",
      items: []
    }
  ];

  const navItems = [
    "Orders",
    "Customer Support",
    "Manage Referrals",
    "Address",
    "Profile",
    "Wallet"
  ];

  return (
    <MainLayout>
      <div className="profile-page bg-gray-50 min-h-screen p-4">
        {/* Profile Header */}
        <ProfileHeader name={userData.name} phone={userData.phone} />
        
        {/* Navigation */}
        <ProfileNavigation items={navItems} />
        
        {/* Order History */}
        <div className="order-history-section my-6">
          {orders.map((order) => (
            <div key={order.id} className="mb-6">
              <OrderHistory 
                status={order.status}
                date={order.date}
              />
              <OrderActions 
                cost={order.cost}
                onReorder={() => console.log("Reorder clicked")}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="profile-footer text-center text-sm text-gray-500 mt-8">
          <p>© 2025 Minutos Technologies Pvt Ltd. All Rights Reserved.</p>
        </footer>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
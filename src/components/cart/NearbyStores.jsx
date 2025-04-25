import React from 'react';
import StoreCard from './StoreCard';

const NearbyStores = () => {
  // Mock data for nearby stores
  const stores = [
    { id: 1, name: 'Fresh Foods Market', rating: 4.6, isOpen: true, distance: 1.8 },
    { id: 2, name: 'Fresh Foods Market', rating: 4.8, isOpen: true, distance: 1.8 },
    { id: 3, name: 'Fresh Foods Market', rating: 4.5, isOpen: true, distance: 1.8 },
    { id: 4, name: 'Fresh Foods Market', rating: 4.9, isOpen: true, distance: 1.8 }
  ];

  return (
    <div className="bg-gray-300 rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Nearby Stores</h2>
        <button className="text-sm text-red-600 font-medium">SEE ALL</button>
      </div>
      
      <div className="space-y-4">
        {stores.map(store => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default NearbyStores;
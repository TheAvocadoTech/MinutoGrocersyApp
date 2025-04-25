import React from 'react';

const DeliveryOptions = ({ selectedOption, onOptionChange, addresses }) => {
  return (
    <div className="delivery-options mb-6">
      <h2 className="text-lg font-medium mb-4">Delivery Options</h2>
      
      <div className="mb-4">
        <h3 className="font-medium mb-2">Delivery Address</h3>
        {addresses && addresses.length > 0 ? (
          <div className="space-y-2">
            {addresses.map(address => (
              <div 
                key={address.id} 
                className={`border p-3 rounded cursor-pointer ${
                  selectedOption.addressId === address.id ? 'border-red-500 bg-red-50' : ''
                }`}
                onClick={() => onOptionChange({
                  ...selectedOption,
                  addressId: address.id
                })}
              >
                <p className="font-medium">{address.name}</p>
                <p className="text-sm text-gray-600">{address.fullAddress}</p>
                <p className="text-sm text-gray-600">{address.phone}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed p-4 text-center">
            <p>No saved addresses</p>
            <button className="text-red-500 font-medium mt-2">+ Add New Address</button>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="font-medium mb-2">Delivery Time</h3>
        <div className="space-y-2">
          <div 
            className={`border p-3 rounded cursor-pointer ${
              selectedOption.time === 'asap' ? 'border-red-500 bg-red-50' : ''
            }`}
            onClick={() => onOptionChange({
              ...selectedOption,
              time: 'asap'
            })}
          >
            <p>As soon as possible (10-15pm)</p>
          </div>
          
          <div 
            className={`border p-3 rounded cursor-pointer ${
              selectedOption.time === 'scheduled' ? 'border-red-500 bg-red-50' : ''
            }`}
            onClick={() => onOptionChange({
              ...selectedOption,
              time: 'scheduled'
            })}
          >
            <p>Schedule for later</p>
            {selectedOption.time === 'scheduled' && (
              <input 
                type="datetime-local"
                className="mt-2 border rounded p-2 w-full"
                min={new Date().toISOString().slice(0, 16)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOptions;
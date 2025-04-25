import React, { useState } from 'react';
import Button from '../common/Button';

const PaymentForm = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  
  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ method: paymentMethod, details: paymentMethod === 'card' ? cardDetails : null });
  };
  
  return (
    <div className="payment-form mb-6">
      <h2 className="text-lg font-medium mb-4">Payment Method</h2>
      
      <div className="space-y-3 mb-5">
        <div 
          className={`border p-3 rounded flex items-center cursor-pointer ${
            paymentMethod === 'card' ? 'border-red-500 bg-red-50' : ''
          }`}
          onClick={() => setPaymentMethod('card')}
        >
          <input 
            type="radio" 
            checked={paymentMethod === 'card'} 
            onChange={() => setPaymentMethod('card')}
            className="mr-2"
          />
          <span>Credit/Debit Card</span>
        </div>
        
        <div 
          className={`border p-3 rounded flex items-center cursor-pointer ${
            paymentMethod === 'cod' ? 'border-red-500 bg-red-50' : ''
          }`}
          onClick={() => setPaymentMethod('cod')}
        >
          <input 
            type="radio" 
            checked={paymentMethod === 'cod'} 
            onChange={() => setPaymentMethod('cod')}
            className="mr-2"
          />
          <span>Cash on Delivery</span>
        </div>
        
        <div 
          className={`border p-3 rounded flex items-center cursor-pointer ${
            paymentMethod === 'wallet' ? 'border-red-500 bg-red-50' : ''
          }`}
          onClick={() => setPaymentMethod('wallet')}
        >
          <input 
            type="radio" 
            checked={paymentMethod === 'wallet'} 
            onChange={() => setPaymentMethod('wallet')}
            className="mr-2"
          />
          <span>Wallet</span>
        </div>
      </div>
      
      {paymentMethod === 'card' && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm mb-1">Card Number</label>
            <input 
              type="text" 
              name="number"
              value={cardDetails.number}
              onChange={handleCardDetailsChange}
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="block text-sm mb-1">Cardholder Name</label>
            <input 
              type="text" 
              name="name"
              value={cardDetails.name}
              onChange={handleCardDetailsChange}
              placeholder="Name on card"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div className="flex space-x-3 mb-3">
            <div className="flex-1">
              <label className="block text-sm mb-1">Expiry Date</label>
              <input 
                type="text" 
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleCardDetailsChange}
                placeholder="MM/YY"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">CVV</label>
              <input 
                type="text" 
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                placeholder="XXX"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          
          <Button type="submit" variant="primary" fullWidth>
            Pay Securely
          </Button>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
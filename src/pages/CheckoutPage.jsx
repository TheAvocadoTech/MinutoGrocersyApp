import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import DeliveryOptions from '../components/checkout/DeliveryOptions';
import PaymentForm from '../components/checkout/PaymentForm';
import OrderSummary from '../components/checkout/OrderSummary';
import Button from '../components/common/Button';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [activeStep, setActiveStep] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock addresses
  const savedAddresses = [
    {
      id: 1,
      type: 'Home',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true
    },
    {
      id: 2,
      type: 'Office',
      address: '456 Corporate Park, Building C',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400051',
      isDefault: false
    }
  ];
  
  // Calculate order summary
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 10;
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + deliveryFee + tax;
  
  const handleAddressSelect = (address) => {
    setDeliveryAddress(address);
  };
  
  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };
  
  const handleNextStep = () => {
    if (activeStep === 1 && !deliveryAddress) {
      alert('Please select a delivery address');
      return;
    }
    
    if (activeStep === 2 && !paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      handlePlaceOrder();
    }
  };
  
  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  
  const handlePlaceOrder = () => {
    setIsLoading(true);
    
    // Mock API call to place order
    setTimeout(() => {
      // Clear cart after successful order
      clearCart();
      setIsLoading(false);
      
      // Redirect to order confirmation page
      navigate('/order-confirmation', { 
        state: { 
          orderNumber: `ORD${Math.floor(Math.random() * 1000000)}`,
          total,
          deliveryAddress,
          paymentMethod
        } 
      });
    }, 1500);
  };
  
  // If cart is empty, redirect to cart page
  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Checkout Steps */}
          <div className="flex mb-6">
            <div className={`flex-1 text-center pb-2 ${activeStep === 1 ? 'border-b-2 border-red-600 text-red-600 font-medium' : ''}`}>
              1. Delivery
            </div>
            <div className={`flex-1 text-center pb-2 ${activeStep === 2 ? 'border-b-2 border-red-600 text-red-600 font-medium' : ''}`}>
              2. Payment
            </div>
            <div className={`flex-1 text-center pb-2 ${activeStep === 3 ? 'border-b-2 border-red-600 text-red-600 font-medium' : ''}`}>
              3. Review
            </div>
          </div>
          
          {/* Step Content */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            {activeStep === 1 && (
              <DeliveryOptions 
                addresses={savedAddresses}
                selectedAddress={deliveryAddress}
                onSelectAddress={handleAddressSelect}
              />
            )}
            
            {activeStep === 2 && (
              <PaymentForm
                selectedMethod={paymentMethod}
                onSelectMethod={handlePaymentMethodSelect}
              />
            )}
            
            {activeStep === 3 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Review Your Order</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Delivery Address</h3>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium">{deliveryAddress?.type}</p>
                    <p>{deliveryAddress?.address}</p>
                    <p>{deliveryAddress?.city}, {deliveryAddress?.state} - {deliveryAddress?.pincode}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <div className="bg-gray-50 p-3 rounded">
                    <p>{paymentMethod?.name}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Items</h3>
                  <div className="space-y-3">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-200 w-12 h-12 rounded"></div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {activeStep > 1 ? (
              <Button
                text="Back"
                onClick={handlePreviousStep}
                variant="secondary"
              />
            ) : <div></div>}
            
            <Button
              text={activeStep === 3 ? 'Place Order' : 'Continue'}
              onClick={handleNextStep}
              isLoading={isLoading}
            />
          </div>
        </div>
        
        <div>
          <OrderSummary
            cart={cart}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            tax={tax}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
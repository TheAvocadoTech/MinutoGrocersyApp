import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import PromoCodeInput from '../components/cart/PromoCodeInput';
import OrderSummary from '../components/user/OrderHistory';
import NearbyStores from '../components/cart/NearbyStores';
import Button from '../components/common/Button';

const CartPage = () => {
  const { 
    items: cart = [], 
    getCartTotal, 
    getItemCount,
    updateItemQuantity, 
    removeItem 
  } = useCart();
  
  const [promoCode, setPromoCode] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const navigate = useNavigate();
  
  const handleQuantityChange = (productId, newQuantity) => {
    updateItemQuantity(productId, newQuantity);
  };
  
  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };
  
  const handleApplyPromo = () => {
    if (!promoCode.trim()) return;
    
    setIsApplyingPromo(true);
    setTimeout(() => {
      setIsApplyingPromo(false);
    }, 500);
  };
  
  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  // Safely calculate cart summary with defaults
  const subtotal = (cart || []).reduce(
    (sum, item) => sum + (item?.price || 0) * (item?.quantity || 0),
    0
  );
  const deliveryFee = 10;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  const nearbyStores = [
    { id: 1, name: 'Fresh Foods Market', rating: 4.6, distance: '1.8 km', isOpen: true },
    { id: 2, name: 'Organic Grocery', rating: 4.2, distance: '2.3 km', isOpen: true },
    { id: 3, name: 'Quick Mart', rating: 3.9, distance: '0.7 km', isOpen: false }
  ];
  
  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
          <p className="mb-6">Add some items to your cart to checkout</p>
          <Link 
            to="/" 
            className="inline-block bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h1 className="text-xl font-semibold mb-4">
              Shopping Cart ({getItemCount()} items)
            </h1>
            
            <div className="space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={(q) => handleQuantityChange(item.id, q)}
                  onRemove={() => handleRemoveItem(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <CartSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              tax={tax}
              total={total}
            />
            
            <PromoCodeInput
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              onApply={handleApplyPromo}
              isLoading={isApplyingPromo}
            />
            
            <div className="flex items-center gap-2 mb-4 text-sm">
              <span className="inline-block">⏱️</span>
              <span>Delivery in 10 minutes</span>
            </div>
            
            <Button
              text="Proceed to Payment"
              onClick={handleProceedToCheckout}
              className="w-full bg-green-600 hover:bg-green-700"
            />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Nearby Stores</h2>
              <Link to="/stores" className="text-red-600 text-sm hover:underline">
                SEE ALL
              </Link>
            </div>
            
            <div className="space-y-4">
              {nearbyStores.map((store) => (
                <div key={store.id} className="bg-white p-3 rounded-lg flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                    <div>
                      <h3 className="font-medium">{store.name}</h3>
                      <div className="flex items-center">
                        <span className="text-yellow-500">{store.rating} ★</span>
                        <span className="ml-2 text-sm text-green-600">
                          {store.isOpen ? 'Open Now' : 'Closed'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{store.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
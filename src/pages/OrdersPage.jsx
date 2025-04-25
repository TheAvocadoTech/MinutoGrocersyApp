import React from 'react';
import OrderHistory from '../components/user/OrderHistory'; // Updated import path
import MainLayout from '../components/layout/MainLayout';

const OrderPage = () => {
  return (
    <MainLayout>
      <div className="orders-page">
        <h1>Your Orders</h1>
        
        <div className="order-list">
          <div className="order-card">
            <h2>Order Delivered</h2>
            <p>2nd Feb 2023, 04:56 pm</p>
            <div className="order-actions">
              <span>Cost NR</span>
              <button>Order Again</button>
            </div>
          </div>
          
          <div className="order-card">
            <h2>Order Delivered</h2>
            <p>2nd Feb 2023, 04:56 pm</p>
            <div className="order-actions">
              <span>Cost NR</span>
              <button>Order Again</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderPage;
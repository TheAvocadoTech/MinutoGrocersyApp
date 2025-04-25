import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="not-found-page" style={{ textAlign: 'center', padding: '50px' }}>
        {/* Updated image path */}
        <img 
          src="/assets/images/Minutos.png" 
          alt="Minutos Logo" 
          style={{ maxWidth: '200px', marginBottom: '20px' }}
        />
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="home-link" style={{ 
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}>
          Go to Home Page
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
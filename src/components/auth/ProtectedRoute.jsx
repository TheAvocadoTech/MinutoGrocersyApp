import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom'; // Add useLocation import
import { useAuth } from '../../context/AuthContext';
import Loader from '../common/Loader';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation(); // Get the current location

  if (loading) {
    return <Loader />; // Show loading indicator while checking auth status
  }

  if (!isAuthenticated) {
    // Redirect to login page, saving the current location they were trying to access
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If authenticated, render the child routes (via Outlet) or direct children
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
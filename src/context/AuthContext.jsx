import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import api from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [token, setToken] = useLocalStorage('token', null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Set auth token in API headers when token changes
  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // Clear error after some time
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Send OTP to phone number
  const sendOTP = async (phoneNumber) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.post('/auth/send-otp', { phoneNumber });
      
      if (response.data.success) {
        return response.data;
      } else {
        throw new Error(response.data.message || 'Failed to send OTP');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to send OTP';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and login
  const verifyOTP = async (phoneNumber, otp) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.post('/auth/verify-otp', { phoneNumber, otp });
      
      if (response.data.success) {
        const { user: userData, token: authToken } = response.data.data;
        
        setUser(userData);
        setToken(authToken);
        
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'OTP verification failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'OTP verification failed';
      setError(errorMessage);
      throw err; // Re-throw to let component handle specific error details
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const resendOTP = async (phoneNumber) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.post('/auth/resend-otp', { phoneNumber });
      
      if (response.data.success) {
        return response.data;
      } else {
        throw new Error(response.data.message || 'Failed to resend OTP');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to resend OTP';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Get user profile
  const getProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.get('/auth/profile');
      
      if (response.data.success) {
        setUser(response.data.data.user);
        return response.data.data.user;
      } else {
        throw new Error(response.data.message || 'Failed to fetch profile');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch profile';
      setError(errorMessage);
      
      // If token is invalid, logout user
      if (err.response?.status === 401) {
        logout();
      }
      
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (profileData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.patch('/auth/profile', profileData);
      
      if (response.data.success) {
        setUser(response.data.data.user);
        return response.data.data.user;
      } else {
        throw new Error(response.data.message || 'Failed to update profile');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to update profile';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Legacy login method (for backward compatibility)
  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      
      // If credentials contain phoneNumber and otp, use OTP verification
      if (credentials.phoneNumber && credentials.otp) {
        return await verifyOTP(credentials.phoneNumber, credentials.otp);
      }
      
      // Otherwise, use traditional login (if you have it)
      const response = await api.post('/auth/login', credentials);
      
      if (response.data.success) {
        const { user: userData, token: authToken } = response.data.data;
        setUser(userData);
        setToken(authToken);
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'Login failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Login failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Register method (for backward compatibility)
  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.post('/auth/register', userData);
      
      if (response.data.success) {
        const { user: userInfo, token: authToken } = response.data.data;
        setUser(userInfo);
        setToken(authToken);
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'Registration failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Registration failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      setLoading(true);
      
      // Call logout endpoint if token exists
      if (token) {
        try {
          await api.post('/auth/logout');
        } catch (err) {
          // Ignore logout API errors, still clear local data
          console.warn('Logout API call failed:', err.message);
        }
      }
      
      // Clear local data
      setUser(null);
      setToken(null);
      setError(null);
      
      // Clear API auth header
      delete api.defaults.headers.common['Authorization'];
      
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = !!token && !!user;

  // Check if current user is verified
  const isVerified = user?.isVerified || false;

  // Format phone number for display
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length >= 10) {
      const lastTen = cleaned.slice(-10);
      return `${lastTen.slice(0, 5)} ${lastTen.slice(5)}`;
    }
    return phoneNumber;
  };

  const value = {
    // State
    user,
    token,
    loading,
    error,
    isAuthenticated,
    isVerified,
    
    // OTP Methods
    sendOTP,
    verifyOTP,
    resendOTP,
    
    // Profile Methods
    getProfile,
    updateProfile,
    
    // Legacy Methods (for backward compatibility)
    login,
    register,
    logout,
    
    // Helper Methods
    formatPhoneNumber,
    
    // Manual error clearing
    clearError: () => setError(null)
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the hook that uses the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export the context itself for rare cases when you need it directly
export default AuthContext;
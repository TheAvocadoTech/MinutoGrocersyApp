import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.minutos.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (userData) => api.post('/auth/register', userData);

// Products API
export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const getProductsByCategory = (category) => api.get(`/products?category=${category}`);

// Cart API
export const getCart = () => api.get('/cart');
export const addToCart = (item) => api.post('/cart', item);
export const updateCartItem = (id, updates) => api.patch(`/cart/${id}`, updates);
export const removeFromCart = (id) => api.delete(`/cart/${id}`);

// Orders API
export const createOrder = (orderData) => api.post('/orders', orderData);
export const getOrderHistory = () => api.get('/orders');
export const getOrderById = (id) => api.get(`/orders/${id}`);

// User API
export const getUserProfile = () => api.get('/user/profile');
export const updateUserProfile = (updates) => api.patch('/user/profile', updates);
export const getUserAddresses = () => api.get('/user/addresses');
export const addUserAddress = (address) => api.post('/user/addresses', address);

export default api;
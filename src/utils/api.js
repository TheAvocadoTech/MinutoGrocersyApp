import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token.replace(/"/g, "")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle network errors
    if (!error.response) {
      console.error("Network Error:", error.message);
      return Promise.reject({
        message: "Network error. Please check your connection.",
        code: "NETWORK_ERROR",
      });
    }

    // Handle 401 Unauthorized - token expired
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    // Handle 429 Too Many Requests
    if (error.response.status === 429) {
      const retryAfter = error.response.data?.retryAfter || 60;
      return Promise.reject({
        ...error,
        message: `Too many requests. Please try again in ${retryAfter} seconds.`,
        retryAfter,
      });
    }

    return Promise.reject(error);
  }
);

// Auth API - OTP Based Authentication
export const sendOTP = (phoneNumber) =>
  api.post("/auth/send-otp", { phoneNumber });

export const verifyOTP = (phoneNumber, otp) =>
  api.post("/auth/verify-otp", { phoneNumber, otp });

export const resendOTP = (phoneNumber) =>
  api.post("/auth/resend-otp", { phoneNumber });

// Auth API - Profile Management
export const getProfile = () => api.get("/auth/profile");

export const updateProfile = (profileData) =>
  api.patch("/auth/profile", profileData);

export const logout = () => api.post("/auth/logout");

// Legacy Auth API (for backward compatibility)
export const loginUser = (credentials) => api.post("/auth/login", credentials);

export const registerUser = (userData) => api.post("/auth/register", userData);

// Products API - Updated to match backend endpoints
export const getProducts = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(`/getAllItems${queryString ? `?${queryString}` : ""}`);
};

export const getProductById = (id) => api.get(`/getItemById/${id}`);

// Updated to use backend endpoint and proper category filtering
export const getProductsByCategory = (categoryIdentifier, params = {}) => {
  // Handle both category name and slug
  const queryParams = {
    // Try different parameter names your backend might expect
    category: categoryIdentifier,
    categoryName: categoryIdentifier,
    categorySlug: categoryIdentifier,
    ...params,
  };
  const queryString = new URLSearchParams(queryParams).toString();

  console.log("Fetching products with URL:", `/getAllItems?${queryString}`);
  return api.get(`/getAllItems?${queryString}`);
};

// Alternative: If your backend has a specific category endpoint
export const getProductsByCategoryId = (categoryId, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(
    `/categories/${categoryId}/products${queryString ? `?${queryString}` : ""}`
  );
};

// If your backend expects category filtering via a different endpoint
export const getProductsByCategoryName = (categoryName, params = {}) => {
  const queryParams = {
    filter: "category",
    value: categoryName,
    ...params,
  };
  const queryString = new URLSearchParams(queryParams).toString();
  return api.get(`/products/filter?${queryString}`);
};

export const searchProducts = (query, params = {}) => {
  const queryParams = { search: query, ...params };
  const queryString = new URLSearchParams(queryParams).toString();
  return api.get(`/getAllItems?${queryString}`);
};

// Categories API - Updated to match your exact backend endpoints
export const getCategories = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(`/getcategories${queryString ? `?${queryString}` : ""}`);
};

export const getCategoryById = (id) => api.get(`/getcategories/${id}`);

export const getCategoryWithSubcategories = (id) =>
  api.get(`/getcategories/${id}/subcategories`);

export const createCategory = (categoryData) =>
  api.post("/categories", categoryData);

export const updateCategory = (id, categoryData) =>
  api.put(`/updatecategories/${id}`, categoryData);

export const deleteCategory = (id) => api.delete(`/deletecategories/${id}`);

export const getCategoriesWithCount = () => api.get("/categories/with-count");

// Additional category helper functions
export const searchCategories = (query, params = {}) => {
  const queryParams = { search: query, ...params };
  const queryString = new URLSearchParams(queryParams).toString();
  return api.get(`/getcategories?${queryString}`);
};

export const getActiveCategories = (params = {}) => {
  const queryParams = { isActive: true, ...params };
  const queryString = new URLSearchParams(queryParams).toString();
  return api.get(`/getcategories?${queryString}`);
};

// Legacy category function (for backward compatibility)
export const getSubCategories = (categoryId) =>
  api.get(`/categories/${categoryId}/subcategories`);

// Helper function to generate category slug from name
export const generateCategorySlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Cart API
export const getCart = () => api.get("/cart");

export const addToCart = (item) => api.post("/cart", item);

export const updateCartItem = (id, updates) =>
  api.patch(`/cart/${id}`, updates);

export const removeFromCart = (id) => api.delete(`/cart/${id}`);

export const clearCart = () => api.delete("/cart");

export const applyPromoCode = (promoCode) =>
  api.post("/cart/promo", { promoCode });

export const removePromoCode = () => api.delete("/cart/promo");

// Orders API
export const createOrder = (orderData) => api.post("/orders", orderData);

export const getOrderHistory = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(`/orders${queryString ? `?${queryString}` : ""}`);
};

export const getOrderById = (id) => api.get(`/orders/${id}`);

export const cancelOrder = (id, reason) =>
  api.patch(`/orders/${id}/cancel`, { reason });

export const trackOrder = (id) => api.get(`/orders/${id}/track`);

export const reorderItems = (orderId) => api.post(`/orders/${orderId}/reorder`);

// Address API
export const getUserAddresses = () => api.get("/addresses");

export const addUserAddress = (address) => api.post("/addresses", address);

export const updateUserAddress = (id, address) =>
  api.patch(`/addresses/${id}`, address);

export const deleteUserAddress = (id) => api.delete(`/addresses/${id}`);

export const setDefaultAddress = (id) => api.patch(`/addresses/${id}/default`);

// Wishlist API
export const getWishlist = () => api.get("/wishlist");

export const addToWishlist = (productId) =>
  api.post("/wishlist", { productId });

export const removeFromWishlist = (productId) =>
  api.delete(`/wishlist/${productId}`);

export const moveWishlistToCart = (productId) =>
  api.post(`/wishlist/${productId}/move-to-cart`);

export const clearWishlist = () => api.delete("/wishlist");

// Reviews API
export const getProductReviews = (productId, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(
    `/products/${productId}/reviews${queryString ? `?${queryString}` : ""}`
  );
};

export const addProductReview = (productId, reviewData) =>
  api.post(`/products/${productId}/reviews`, reviewData);

export const updateProductReview = (productId, reviewId, reviewData) =>
  api.patch(`/products/${productId}/reviews/${reviewId}`, reviewData);

export const deleteProductReview = (productId, reviewId) =>
  api.delete(`/products/${productId}/reviews/${reviewId}`);

// Notifications API
export const getNotifications = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(`/notifications${queryString ? `?${queryString}` : ""}`);
};

export const markNotificationAsRead = (id) =>
  api.patch(`/notifications/${id}/read`);

export const markAllNotificationsAsRead = () =>
  api.patch("/notifications/read-all");

export const deleteNotification = (id) => api.delete(`/notifications/${id}`);

// Coupons API
export const getAvailableCoupons = () => api.get("/coupons");

export const validateCoupon = (couponCode) =>
  api.post("/coupons/validate", { couponCode });

// Store/Vendor API
export const getStores = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(`/stores${queryString ? `?${queryString}` : ""}`);
};

export const getStoreById = (id) => api.get(`/stores/${id}`);

export const getStoreProducts = (storeId, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(
    `/stores/${storeId}/products${queryString ? `?${queryString}` : ""}`
  );
};

// Payment API
export const createPaymentIntent = (paymentData) =>
  api.post("/payments/create-intent", paymentData);

export const confirmPayment = (paymentIntentId, paymentMethod) =>
  api.post("/payments/confirm", { paymentIntentId, paymentMethod });

export const getPaymentMethods = () => api.get("/payments/methods");

export const addPaymentMethod = (paymentMethodData) =>
  api.post("/payments/methods", paymentMethodData);

export const deletePaymentMethod = (id) =>
  api.delete(`/payments/methods/${id}`);

// Support API
export const createSupportTicket = (ticketData) =>
  api.post("/support/tickets", ticketData);

export const getSupportTickets = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(`/support/tickets${queryString ? `?${queryString}` : ""}`);
};

export const getSupportTicketById = (id) => api.get(`/support/tickets/${id}`);

export const updateSupportTicket = (id, updateData) =>
  api.patch(`/support/tickets/${id}`, updateData);

// Search & Filters API
export const getSearchSuggestions = (query) =>
  api.get(`/search/suggestions?q=${encodeURIComponent(query)}`);

export const getPopularSearches = () => api.get("/search/popular");

export const getFilterOptions = (category) => api.get(`/filters/${category}`);

// Analytics API (for user behavior tracking)
export const trackUserEvent = (eventData) =>
  api.post("/analytics/events", eventData);

export const trackPageView = (pageData) =>
  api.post("/analytics/page-views", pageData);

// Default export
export default api;

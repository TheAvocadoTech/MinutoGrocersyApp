import axios from "axios";

const API_BASE_URL = "https://minutosa-2.onrender.com/api/category";

// Fetch categories with optional params like pagination
export const getCategories = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getcategories`, {
      params,
    });
    return response.data; // API already returns { message, categories, count, pagination }
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

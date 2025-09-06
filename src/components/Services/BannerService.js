import axios from "axios";

const API_URL = "https://minutosa-2.onrender.com/api/ads/get";

// Get banners from API
export const getBanners = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // { success, count, banners }
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
};

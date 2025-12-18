import axios from "axios";

// Backend base URL from .env
// Example: http://13.203.102.215:5000/api
const API = import.meta.env.VITE_API_URL;

// Create Axios instance
const api = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   PRODUCT APIs
   ========================= */
export const productAPI = {
  // Get all products
  getAllProducts: async () => {
    const response = await api.get("/getproduct");
    return response.data;
  },

  // Create a new product
  createProduct: async (productData) => {
    const response = await api.post("/postProduct", productData);
    return response.data;
  },
};

/* =========================
   USER APIs
   ========================= */
export const userAPI = {
  // Get all users
  getAllUsers: async () => {
    const response = await api.get("/getUser");
    return response.data;
  },

  // Create a new user
  createUser: async (userData) => {
    const response = await api.post("/postUser", userData);
    return response.data;
  },

  // Delete a user
  deleteUser: async (id) => {
    const response = await api.delete(`/deleteUser/${id}`);
    return response.data;
  },

  // Update a user
  updateUser: async (id, userData) => {
    const response = await api.put(`/updateUser/${id}`, userData);
    return response.data;
  },
};

export default api;

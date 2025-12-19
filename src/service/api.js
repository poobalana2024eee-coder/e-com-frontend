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
    const response = await api.get("/api/getproduct");
    return response.data;
  },

  // Create a new product
  createProduct: async (productData) => {
    const response = await api.post("/api/postProduct", productData);
    return response.data;
  },

  // Update a product
  updateProduct: async (id, productData) => {
    const response = await api.put(`/api/updateProduct/${id}`, productData);
    return response.data;
  },

  // Delete a product
  deleteProduct: async (id) => {
    const response = await api.delete(`/api/deleteProduct/${id}`);
    return response.data;
  },
};

/* =========================
   USER APIs
   ========================= */
export const userAPI = {
  // Get all users
  getAllUsers: async () => {
    const response = await api.get("/api/getUser");
    return response.data;
  },

  // Create a new user
  createUser: async (userData) => {
    const response = await api.post("/api/postUser", userData);
    return response.data;
  },

  // Delete a user
  deleteUser: async (id) => {
    const response = await api.delete(`/api/deleteUser/${id}`);
    return response.data;
  },

  // Update a user
  updateUser: async (id, userData) => {
    const response = await api.put(`/api/updateUser/${id}`, userData);
    return response.data;
  },
};

export default api;

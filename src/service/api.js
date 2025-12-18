import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productAPI = {
  getAllProducts: async () => {
    const res = await api.get('/api/getproduct');
    return res.data;
  },

  // ✅ ADD THIS
  createProduct: async (productData) => {
    const res = await api.post('/api/postProduct', productData);
    return res.data;
  },
};

export const userAPI = {
  getAllUsers: async () => {
    const res = await api.get('/api/getUser');
    return res.data;
  },
};

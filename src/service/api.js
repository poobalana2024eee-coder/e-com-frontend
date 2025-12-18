import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productAPI = {
  getAllProducts: async () => {
    const res = await api.get('/getproduct');
    return res.data;
  },
};

export const userAPI = {
  getAllUsers: async () => {
    const res = await api.get('/getUser');
    return res.data;
  },
};

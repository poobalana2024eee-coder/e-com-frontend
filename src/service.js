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
        const response = await api.get('/getproduct');
        return response.data;
    },
    createProduct: async (productData) => {
        const response = await api.post('/postProduct', productData);
        return response.data;
    },
    updateProduct: async (id, productData) => {
        const response = await api.put(`/updateProduct/${id}`, productData);
        return response.data;
    },
    deleteProduct: async (id) => {
        const response = await api.delete(`/deleteProduct/${id}`);
        return response.data;
    },
};

export const userAPI = {
    getAllUsers: async () => {
        const response = await api.get('/getUser');
        return response.data;
    },
    createUser: async (userData) => {
        const response = await api.post('/postUser', userData);
        return response.data;
    },
    updateUser: async (id, userData) => {
        const response = await api.put(`/updateUser/${id}`, userData);
        return response.data;
    },
    deleteUser: async (id) => {
        const response = await api.delete(`/deleteUser/${id}`);
        return response.data;
    },
};

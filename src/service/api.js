const axios = require('axios');

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

const productAPI = {
    getAllProducts: async () => {
        const response = await api.get('/getproduct');
        return response.data;
    },
};

module.exports = { productAPI };

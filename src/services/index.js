import axios from 'axios';

const api = axios.create({
    baseURL: 'https://625f67b592df0bc0f3340282.mockapi.io/api/vi/',
});


export default api;
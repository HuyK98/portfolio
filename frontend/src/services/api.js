import axios from 'axios';

const base = (import.meta.env.VITE_API_URL || '/api/v1').replace(/\/+$/, '');

export const api = axios.create({
    baseURL: base,
    headers: { 'Content-Type': 'application/json' },
});

// log errors
api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);
import axios from 'axios';

const API = axios.create({ baseURL: `${import.meta.env.VITE_BASE_URL}` });

// ✅ GET sweets with optional search & sort
export const getSweets = (queryParams = {}) => API.get('/', { params: queryParams });

// ✅ Add a new sweet (POST)
export const addSweet = (data) => API.post('/', data);

// ✅ Delete sweet by ID (DELETE)
export const deleteSweet = (id) => API.delete(`/${id}`);

// ✅ Purchase sweet (reduce stock) - (POST)
export const purchaseSweet = (id, qty) => API.post(`/purchase/${id}`, { qty });

// ✅ Restock sweet (increase stock) - (POST)
export const restockSweet = (id, qty) => API.post(`/restock/${id}`, { qty });

// Search Sweet By Name - (GET)
export const searchSweetsByName = (name) => API.get(`/search/${encodeURIComponent(name)}`);

// ✅ Sort sweet based on category/price - (GET)
export const sortSweetsBy = (sortBy, value) => API.get(`/sort/${sortBy}/${encodeURIComponent(value)}`);
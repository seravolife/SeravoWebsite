// Seravo Life Sciences — API Service Layer
import axios from 'axios';
import { API_BASE_URL } from '@/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach JWT token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('seravo_admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — handle errors globally
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message || error.message || 'Something went wrong';
    if (error.response?.status === 401) {
      localStorage.removeItem('seravo_admin_token');
      window.location.href = '/admin/login';
    }
    return Promise.reject({ message, status: error.response?.status });
  }
);

// ============ Products ============
export const productService = {
  getAll: (params) => api.get('/products', { params }),
  getBySlug: (slug) => api.get(`/products/${slug}`),
  getFeatured: () => api.get('/products/featured'),
  getByCategory: (categoryId) => api.get(`/products/category/${categoryId}`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};

// ============ Categories ============
export const categoryService = {
  getAll: () => api.get('/categories'),
  create: (data) => api.post('/categories', data),
  update: (id, data) => api.put(`/categories/${id}`, data),
  delete: (id) => api.delete(`/categories/${id}`),
};

// ============ Blogs ============
export const blogService = {
  getAll: (params) => api.get('/blogs', { params }),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  getRecent: () => api.get('/blogs/recent'),
  create: (data) => api.post('/blogs', data),
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
};

// ============ Contact ============
export const contactService = {
  submit: (data) => api.post('/contact', data),
  getAll: () => api.get('/contact'),
  markRead: (id) => api.put(`/contact/${id}/read`),
  delete: (id) => api.delete(`/contact/${id}`),
};

// ============ Distributor ============
export const distributorService = {
  submit: (data) => api.post('/distributors', data),
  getAll: () => api.get('/distributors'),
  updateStatus: (id, status) => api.put(`/distributors/${id}/status`, { status }),
  delete: (id) => api.delete(`/distributors/${id}`),
};

// ============ Testimonials ============
export const testimonialService = {
  getAll: () => api.get('/testimonials'),
  create: (data) => api.post('/testimonials', data),
  update: (id, data) => api.put(`/testimonials/${id}`, data),
  delete: (id) => api.delete(`/testimonials/${id}`),
};

// ============ Auth ============
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  verifyToken: () => api.get('/auth/verify'),
};

// ============ Upload ============
export const uploadService = {
  uploadImage: (formData) =>
    api.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export default api;

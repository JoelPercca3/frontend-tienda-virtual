import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 403) {
      // Token expirado o inválido, redirige al usuario a la página de login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

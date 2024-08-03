// src/services/authServices.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error('Error en registro:', error.response.data);
      throw new Error(error.response.data.error || 'Error en el servidor');
    } else {
      console.error('Error en registro:', error.message);
      throw new Error('Error en el servidor');
    }
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = response.data;
    // Almacenar el token en el localStorage o en un lugar seguro
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error('Error en login:', error.response.data);
      throw new Error(error.response.data.error || 'Error en el servidor');
    } else {
      console.error('Error en login:', error.message);
      throw new Error('Error en el servidor');
    }
  }
};

import api from './api';

const API_URL = '/addresses'; // Cambia esto si tu URL base es diferente

// Crear una nueva dirección
export const createAddress = async (address) => {
  try {
    const response = await axios.post(API_URL, address);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error creating address');
  }
};

// Obtener todas las direcciones
export const getAllAddresses = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error fetching addresses');
  }
};
// Obtener una dirección por ID
export const getAddressById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error fetching address');
  }
};

// Actualizar una dirección
export const updateAddress = async (id, address) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, address);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error updating address');
  }
};

// Eliminar una dirección
export const deleteAddress = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error deleting address');
  }
};

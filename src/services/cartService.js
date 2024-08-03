import api from './api'; // Asegúrate de que la ruta a api.js sea correcta

// Crear un nuevo ítem en el carrito
export const createCartItem = async (item) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.post('/cart', item, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      // Token expirado o inválido, redirige al usuario a la página de login
      window.location.href = '/login';
    } else {
      throw error;
    }
  }
};

// Obtener todos los ítems del carrito
export const getCartItems = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.get('/cart', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

// Actualizar la cantidad de un ítem en el carrito
export const updateCartItem = async (id, quantity) => {
  try {
    const response = await api.put(`/cart/${id}`, { quantity }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error updating cart item');
  }
};

// Eliminar un ítem del carrito
export const deleteCartItem = async (id) => {
  try {
    const response = await api.delete(`/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error deleting cart item');
  }
};

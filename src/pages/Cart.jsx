// src/pages/Cart.jsx
import React, { useState, useEffect } from 'react';
import { getCartItems, updateCartItem, deleteCartItem } from '../services/cartService';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId'); // Obtén el ID del usuario del almacenamiento local

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const items = await getCartItems(userId);
        setCartItems(items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userId]);

  const handleUpdateQuantity = async (id, newQuantity) => {
    try {
      await updateCartItem(id, newQuantity);
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteCartItem(id);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>Product ID: {item.product_id}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>Increase Quantity</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>Decrease Quantity</button>
              <button onClick={() => handleDeleteItem(item.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default Cart;

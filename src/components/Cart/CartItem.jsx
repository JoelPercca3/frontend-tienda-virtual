import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item flex items-center bg-white shadow-md rounded-lg overflow-hidden p-4 transform hover:scale-105 transition-transform duration-300">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-24 h-24 object-cover rounded-md hover:opacity-75 transition-opacity duration-300"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">{item.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-800">${item.price}</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

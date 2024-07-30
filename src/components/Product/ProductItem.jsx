import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-lg font-bold mb-4">${product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Ver detalles
      </button>
    </div>
  );
};

export default ProductItem;

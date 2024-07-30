// src/components/Category/CategoryItem.jsx
import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <div className="category-item bg-white shadow-md rounded-lg overflow-hidden">
      <img 
        src={category.image} 
        alt={category.name} 
        className="w-150 h-50 object-cover  hover:opacity-75 transition-opacity duration-300" // Ajusta el tamaño de la imagen aquí
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryItem;

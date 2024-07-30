// src/components/Category/CategoryList.jsx
import React from "react";
import CategoryItem from "./CategoryItem";
import electronica from "../../assets/images/electronica.jpeg";
import hogar from "../../assets/images/hogar.jpeg";
import ropa from "../../assets/images/ropa.jpeg";

const categories = [
  { id: 1, name: "Electrónica", image: electronica },
  { id: 2, name: "Ropa", image: ropa },
  { id: 3, name: "Hogar", image: hogar },
  // Agrega más categorías según sea necesario
];

const CategoryList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

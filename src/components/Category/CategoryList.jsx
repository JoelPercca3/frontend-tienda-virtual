// src/components/Category/CategoryList.jsx
import React from "react";
import CategoryItem from "./CategoryItem";

const categories = [
  { id: 1, name: "Electrónica", image: "link_to_image" },
  { id: 2, name: "Ropa", image: "link_to_image" },
  { id: 3, name: "Hogar", image: "link_to_image" },
  // Agrega más categorías según sea necesario
];

const CategoryList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

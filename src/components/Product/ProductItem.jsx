// src/components/Product/FeaturedProducts.jsx
import React from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Producto 1", price: 100, image: "link_to_image" },
  { id: 2, name: "Producto 2", price: 200, image: "link_to_image" },
  { id: 3, name: "Producto 3", price: 300, image: "link_to_image" },
  // Agrega más productos destacados según sea necesario
];

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Productos Destacados</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

import React from 'react';
import ProductItem from '../components/Product/ProductItem';

// Simula una lista de productos
const products = [
  { id: 1, name: 'Producto 1', price: 100, image: 'link_to_image_1' },
  { id: 2, name: 'Producto 2', price: 200, image: 'link_to_image_2' },
  { id: 3, name: 'Producto 3', price: 300, image: 'link_to_image_3' },
  // Puedes agregar más productos si lo deseas
];

const Products = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

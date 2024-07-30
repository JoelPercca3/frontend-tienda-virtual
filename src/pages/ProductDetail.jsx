// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams(); // Obtén el ID del producto desde los parámetros de la URL

    // Simula la información del producto
    // En un caso real, podrías obtener esta información desde una API
    const product = {
        id: id,
        name: "Producto Simulado",
        price: "$2102021",
        image: "link_to_image", // Reemplaza con una imagen real
        description: "Descripción del producto aquí."
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex">
                <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mr-8" />
                <div>
                    <p className="text-xl font-semibold mb-4">{product.price}</p>
                    <p className="mb-4">{product.description}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

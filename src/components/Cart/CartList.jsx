// src/components/Cart/CartList.jsx
import React from "react";
import CartItem from "./CartItem";

const cartItems = [
  {
    id: 1,
    name: "Producto 1",
    description: "Descripción del producto 1",
    price: 29.99,
    image: "link_a_la_imagen_del_producto_1", // Actualiza con la ruta de tu imagen
  },
  {
    id: 2,
    name: "Producto 2",
    description: "Descripción del producto 2",
    price: 49.99,
    image: "link_a_la_imagen_del_producto_2", // Actualiza con la ruta de tu imagen
  },
  // Agrega más productos según sea necesario
];

const CartList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartList;

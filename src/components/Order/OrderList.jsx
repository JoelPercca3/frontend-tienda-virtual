// src/components/Order/OrderList.jsx
import React from "react";
import OrderItem from "./OrderItem";

const orders = [
  {
    id: 1,
    date: "2023-07-30",
    status: "Completado",
    items: [
      { id: 1, name: "Producto 1", price: 29.99, quantity: 1 },
      { id: 2, name: "Producto 2", price: 49.99, quantity: 2 },
    ],
    total: 129.97,
  },
  {
    id: 2,
    date: "2023-07-28",
    status: "Pendiente",
    items: [
      { id: 3, name: "Producto 3", price: 19.99, quantity: 3 },
    ],
    total: 59.97,
  },
  // Agrega más órdenes según sea necesario
];

const OrderList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Mis Órdenes</h2>
      <div className="grid grid-cols-1 gap-4">
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;

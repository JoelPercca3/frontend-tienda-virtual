// src/components/Order/OrderItem.jsx
import React from "react";

const OrderItem = ({ order }) => {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold mb-2">Orden #{order.id}</h3>
      <p className="text-gray-600 mb-2">Fecha: {new Date(order.date).toLocaleDateString()}</p>
      <p className="text-gray-600 mb-2">Estado: {order.status}</p>
      <div className="mb-2">
        <h4 className="font-semibold">Productos:</h4>
        <ul className="list-disc list-inside">
          {order.items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600 font-semibold">Total: ${order.total}</p>
    </div>
  );
};

export default OrderItem;

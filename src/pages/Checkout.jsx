// src/pages/Checkout.jsx
import React from 'react';
import PaymentItem from '../components/Payment/PaymentItem';

// Ejemplo de datos, estos podrían provenir de un estado o una API
const paymentMethods = [
  { id: 1, name: "Tarjeta de Crédito", image: "/path/to/image.jpg" },
  { id: 2, name: "PayPal", image: "/path/to/image.jpg" },
];

const Checkout = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="grid grid-cols-1 gap-4">
        {paymentMethods.map(method => (
          <PaymentItem key={method.id} paymentMethod={method} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;

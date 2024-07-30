// src/components/Payment/PaymentItem.jsx
import React from 'react';

const PaymentItem = ({ paymentMethod }) => {
  if (!paymentMethod) {
    return <div className="text-red-500">Método de pago no disponible</div>;
  }

  const { image, name } = paymentMethod;

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      {image ? (
        <img src={image} alt={name} className="w-16 h-16 object-cover mb-2" />
      ) : (
        <div className="w-16 h-16 bg-gray-200 mb-2"></div>
      )}
      <h3 className="text-lg font-semibold">{name || 'Método de Pago'}</h3>
    </div>
  );
};

export default PaymentItem;

// src/components/Payment/PaymentList.jsx
import React from "react";
import PaymentItem from "./PaymentItem";

const payments = [
  { id: 1, name: "Visa", image: "/assets/images/visa.png", details: "Termina en 1234" },
  { id: 2, name: "MasterCard", image: "/assets/images/mastercard.png", details: "Termina en 5678" },
  { id: 3, name: "PayPal", image: "/assets/images/paypal.png", details: "Cuenta: usuario@example.com" },
  // Agrega más métodos de pago según sea necesario
];

const PaymentList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Métodos de Pago</h2>
      <div className="grid grid-cols-1 gap-4">
        {payments.map(payment => (
          <PaymentItem key={payment.id} payment={payment} />
        ))}
      </div>
    </div>
  );
};

export default PaymentList;

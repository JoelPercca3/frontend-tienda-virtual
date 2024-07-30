// src/pages/Addresses.jsx
import React from 'react';
import AddressItem from '../components/Address/AddressItem';

// Supongamos que tienes una lista de direcciones
const addresses = [
  { id: 1, address: "123 Calle Falsa, Ciudad" },
  { id: 2, address: "456 Calle Verdadera, Ciudad" },
  { id: 3, address: "789 Calle Imaginaria, Ciudad" },
  // Asegúrate de que cada id sea único
];

const Addresses = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Mis Direcciones</h2>
      <div className="space-y-4">
        {addresses.map(address => (
          <AddressItem key={address.id} address={address} />
        ))}
      </div>
    </div>
  );
};

export default Addresses;

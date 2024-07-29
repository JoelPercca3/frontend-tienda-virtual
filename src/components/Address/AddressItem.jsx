// src/components/Address/AddressItem.jsx
import React from 'react';

const AddressItem = ({ address }) => {
  return (
    <div className="border p-4 mb-4 rounded">
      <p><strong>Dirección:</strong> {address.street}</p>
      <p><strong>Ciudad:</strong> {address.city}</p>
      <p><strong>Estado:</strong> {address.state}</p>
      <p><strong>Código Postal:</strong> {address.zip}</p>
    </div>
  );
};

export default AddressItem;

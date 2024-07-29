import React, { useState } from 'react';
import AddressItem from '../components/Address/AddressItem';

const Addresses = () => {
  // Ejemplo de direcciones (esto debería venir de un API o un estado global)
  const [addresses, setAddresses] = useState([
    { id: 1, street: "123 Main St", city: "Hometown", state: "CA", zip: "12345" },
    { id: 2, street: "456 Elm St", city: "Othertown", state: "TX", zip: "67890" }
  ]);

  // Funciones para agregar, editar y eliminar direcciones (aquí solo es un ejemplo)
  const addAddress = () => {/* Funcionalidad para agregar dirección */};
  const editAddress = (id) => {/* Funcionalidad para editar dirección */};
  const removeAddress = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mis Direcciones</h1>
      <button onClick={addAddress} className="mb-4 p-2 bg-blue-500 text-white rounded">Agregar Dirección</button>
      {addresses.map(address => (
        <AddressItem 
          key={address.id} 
          address={address} 
          onEdit={() => editAddress(address.id)} 
          onRemove={() => removeAddress(address.id)}
        />
      ))}
    </div>
  );
};

export default Addresses;

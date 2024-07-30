// src/components/Address/AddressItem.jsx
import React from 'react';

const AddressItem = ({ address }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <p>{address.address}</p>
    </div>
  );
};

export default AddressItem;

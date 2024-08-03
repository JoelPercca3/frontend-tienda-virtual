import React, { useState, useEffect } from 'react';
import { getAllAddresses } from '../services/addressService';

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddresses = async () => {
      setLoading(true);
      try {
        const data = await getAllAddresses();
        setAddresses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Addresses</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {addresses.length > 0 ? (
          <ul className="space-y-4">
            {addresses.map((address) => (
              <li key={address.id} className="border border-gray-200 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">{address.address_line1}</h2>
                {address.address_line2 && (
                  <p className="text-gray-600">{address.address_line2}</p>
                )}
                <p className="text-gray-800">{address.city}, {address.state}</p>
                <p className="text-gray-600">{address.postal_code}</p>
                <p className="text-gray-600">{address.country}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No addresses found</p>
        )}
      </div>
    </div>
  );
};

export default Addresses;

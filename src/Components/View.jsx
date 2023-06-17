import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const View = ({ data }) => {
  
  const { id } = useParams();
  const toy = data.find((item) => item.id === Number(id));

  if (!toy) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Toy Merchant | {toy.toy_name}</title>
      </Helmet>
      <div className="border p-4 rounded shadow">
        <img
          src={toy.picture}
          alt={toy.toy_name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 className="text-lg font-semibold mb-2">{toy.toy_name}</h2>
        <p className="text-gray-700 mb-2">Seller: {toy.seller_name || 'N/A'}</p>
        <p className="text-gray-700 mb-2">Seller Email: {toy.seller_email || 'N/A'}</p>
        <p className="text-gray-700 mb-2">Price: ${toy.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-2">Rating: {toy.rating}</p>
        <p className="text-gray-700 mb-2">Available Quantity: {toy.available_quantity}</p>
        <p className="text-gray-700 mb-2">{toy.detail_description}</p>
      </div>
    </div>
  );
};

export default View;

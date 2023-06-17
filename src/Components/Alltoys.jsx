import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AllToys = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setVisibleData(data.slice(0, 20)); // Set initial visible data to first 20 items
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filteredData = data.filter((toy) =>
      toy.toy_name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setVisibleData(filteredData.slice(0, 20));
  };

  return (
    <div>
      <Helmet>
        <title>Toy Merchant | All Toys</title>
      </Helmet>
      <h2>All Toys</h2>
      <input
        type="text"
        placeholder="Search by toy name"
        value={searchQuery}
        onChange={handleSearch}
      />
      <table className="w-full table-fixed">
  <thead>
    <tr className="bg-gray-200">
      <th className="w-1/6 py-2">Seller</th>
      <th className="w-1/6 py-2">Toy Name</th>
      <th className="w-1/6 py-2">Sub-category</th>
      <th className="w-1/6 py-2">Price</th>
      <th className="w-1/6 py-2">Available Quantity</th>
      <th className="w-1/6 py-2"></th>
    </tr>
  </thead>
  <tbody>
    {visibleData.map((toy) => (
      <tr key={toy.id} className="bg-white">
        <td className="px-3">{toy.seller_name || 'N/A'}</td>
        <td className="py-2">{toy.toy_name}</td>
        <td className="px-3">{toy.sub_category}</td>
        <td className="py-2">${toy.price.toFixed(2)}</td>
        <td className="px-3">{toy.available_quantity}</td>
        <td className="py-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View Details
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default AllToys;

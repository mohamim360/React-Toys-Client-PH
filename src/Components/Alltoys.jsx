import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AllToys = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Helmet>
       <title>Toy Merchant | All Toys</title>
        
       </Helmet>
      <h2>All Toys</h2>
      <table>
        <thead>
          <tr >
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.seller_name || 'N/A'}</td>
              <td>{toy.toy_name}</td>
              <td>{toy.sub_category}</td>
              <td>{toy.price}</td>
              <td>{toy.available_quantity}</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

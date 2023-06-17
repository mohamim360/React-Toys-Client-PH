import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('https://toys-server-mohamim360.vercel.app/addedtoy')
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

 

  const handleDelete = (toyId) => {
 
    fetch(`https://toys-server-mohamim360.vercel.app/addedtoy/${toyId}`, {
      method: 'DELETE'
  })
      .then(res => res.json())
      .then(data => {
         
          if (data.deletedCount > 0) {
              alert('deleted')
          }
      })
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Toys</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Sub-category</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Rating</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th> {/* Added Actions column */}
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="border border-gray-300 px-4 py-2">{toy.name}</td>
              <td className="border border-gray-300 px-4 py-2">{toy.subCategory}</td>
              <td className="border border-gray-300 px-4 py-2">{toy.price}</td>
              <td className="border border-gray-300 px-4 py-2">{toy.rating}</td>
              <td className="border border-gray-300 px-4 py-2">{toy.quantity}</td>
              <td className="border border-gray-300 px-4 py-2">{toy.description}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`update/${toy._id}`}>
                <button  className="btn btn-success" >Update</button>
                </Link>
                <button className="btn btn-danger m-1" onClick={() => handleDelete(toy._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

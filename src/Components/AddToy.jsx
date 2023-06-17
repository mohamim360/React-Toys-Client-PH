import React, { useState } from 'react';

const AddToy = () => {
  const [toyData, setToyData] = useState({
    pictureUrl: '',
    name: '',
    subCategory: '',
    price: '',
    rating: '',
    quantity: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setToyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any actions with the collected toy data,
    // such as sending it to a server or storing it in local state.
    console.log(toyData);
    // Reset the form fields
    setToyData({
      pictureUrl: '',
      name: '',
      subCategory: '',
      price: '',
      rating: '',
      quantity: '',
      description: '',
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4">Add a Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Picture URL of the toy</label>
          <input
            type="text"
            name="pictureUrl"
            value={toyData.pictureUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={toyData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Sub-category</label>
          <select
            name="subCategory"
            value={toyData.subCategory}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a sub-category</option>
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="text"
            name="price"
            value={toyData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Rating</label>
          <input
            type="text"
            name="rating"
            value={toyData.rating}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
                   
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Available quantity</label>
          <input
            type="text"
            name="quantity"
            value={toyData.quantity}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Detail description</label>
          <textarea
            name="description"
            value={toyData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="px-4 py-2 btn btn-success"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;


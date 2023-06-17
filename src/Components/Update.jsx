import React from 'react';

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, price, rating, subCategory,description , pictureUrl} = coffee;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toyData = {
      description,
      rating ,
      price,
      subCategory,
      pictureUrl,
      name,
      quantity,
     
    };
console.log(toyData)
    fetch("https://toys-server-mohamim360.vercel.app/addedtoy/${_id}", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          alert("update added");
        }
      });
    
    };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4">Add a Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Picture URL of the toy
          </label>
          <input
            type="text"
            name="pictureUrl"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Sub-category</label>
          <select
            name="subCategory"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Rating</label>
          <input
            type="text"
            name="rating"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Available quantity</label>
          <input
            type="text"
            name="quantity"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Detail description</label>
          <textarea
            name="description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="btn btn-success"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
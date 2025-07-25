
// AddProductForm.js
import React, { useState } from 'react';
import '../CSS/Form.css'

const AddProductForm = ({ onAdd, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        onAdd(result.data); // pass new product back to parent
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <div className="flex gap-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Product
          </button>
          <button type="button" onClick={onBack} className="bg-gray-300 px-4 py-2 rounded">
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;

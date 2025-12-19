import React, { useState, useEffect } from 'react';
import { productAPI } from './service/api';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productAPI.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await productAPI.updateProduct(editingProduct._id, formData);
      } else {
        await productAPI.createProduct(formData);
      }
      fetchProducts();
      resetForm();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productAPI.deleteProduct(id);
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', price: '', description: '', image: '' });
    setEditingProduct(null);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel - Product Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Add New Product
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-2 border rounded mb-3"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full p-2 border rounded mb-3"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 border rounded mb-3"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
              <input
                type="url"
                placeholder="Image URL"
                className="w-full p-2 border rounded mb-4"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                required
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                >
                  {editingProduct ? 'Update' : 'Add'} Product
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold text-green-600 mb-3">₹{product.price}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
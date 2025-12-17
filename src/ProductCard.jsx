import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import ProductForm from "./ProductForm";
import UserForm from "./UserForm";
import { productAPI, userAPI } from "./service";

function Products() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productAPI.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const data = await userAPI.getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleProductSubmit = async (data) => {
    try {
      if (editingProduct) {
        await productAPI.updateProduct(editingProduct._id, data);
      } else {
        await productAPI.createProduct(data);
      }
      fetchProducts();
      setShowProductForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product. Make sure backend is running.");
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await productAPI.deleteProduct(id);
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product.");
      }
    }
  };

  const handleUserSubmit = async (data) => {
    try {
      await userAPI.createUser(data);
      fetchUsers();
      setShowUserForm(false);
      alert("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      alert(`Failed to add user: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await userAPI.deleteUser(id);
        fetchUsers();
        alert("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user.");
      }
    }
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    const cartData = localStorage.getItem("cart");
    let existingCart = cartData ? JSON.parse(cartData) : [];
    
    const existingItem = existingCart.find(item => item.id === product.id);

    if(existingItem){
      existingItem.quantity += 1;
    } else {
      existingCart.push({...product, quantity: 1});
    }
    
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Added to cart!");
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center px-4 mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="flex gap-4">
          <button 
            onClick={() => setShowProductForm(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg"
          >
            ➕ Add Product
          </button>
          <button 
            onClick={() => setShowUserForm(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg"
          >
            👤 Add User
          </button>
          <button 
            onClick={() => setShowUsers(!showUsers)}
            className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-900 transition-all duration-300 shadow-lg"
          >
            {showUsers ? '📦 Show Products' : '👥 Show Users'}
          </button>
        </div>
      </div>
      
      {showUsers ? (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">Users List</h3>
        <div className="grid gap-4">
          {users.map(user => (
            <div key={user._id} className="bg-white rounded-lg p-4 border-2 border-gray-300 shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{user.name}</h4>
                  <p className="text-gray-600">📧 {user.email}</p>
                  <p className="text-gray-600">📱 {user.phone || 'N/A'}</p>
                  <p className="text-gray-600">👤 {user.role || 'user'}</p>
                </div>
                <button 
                  onClick={() => handleDeleteUser(user._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      ) : (
      <div className="flex flex-wrap gap-8 justify-start p-4">
        {products.map(product => (
          <div key={product._id || product.id} className="bg-blue-100 rounded-lg p-3 border-2 border-black hover:shadow-lg transition">
            <Link to={`/product/${product._id || product.id}`} className="no-underline">
              <p className="text-center text-gray-800 text-base font-bold mb-2">{product.description}</p>
              <img src={product.image} alt={product.name} className="h-72 w-72 object-cover p-2"/>
              <h4 className="text-center text-blue-600 font-bold">{product.name}</h4>
              <h4 className="text-center text-blue-600 font-bold pb-2">₹{product.price}</h4>
            </Link>
            <div className="flex gap-2 mt-2">
              <button 
                onClick={(e) => handleAddToCart(product, e)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
              >
                Cart
              </button>
              <button 
                onClick={() => handleEditProduct(product)}
                className="px-3 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
              >Edit
              </button>
              <button 
                onClick={() => handleDeleteProduct(product._id)}
                className="px-3 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      )}

      {showProductForm && (
        <ProductForm
          onSubmit={handleProductSubmit}
          initialData={editingProduct}
          onCancel={() => {
            setShowProductForm(false);
            setEditingProduct(null);
          }}
        />
      )}

      {showUserForm && (
        <UserForm
          onSubmit={handleUserSubmit}
          onCancel={() => setShowUserForm(false)}
        />
      )}
    </div>
  )
}

export default Products;
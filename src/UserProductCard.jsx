import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productAPI } from "./service/api";

function UserProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productAPI.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
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
      </div>
      
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
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProductCard;
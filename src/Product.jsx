import React from "react";
import {Link} from "react-router-dom";
import { Product } from "./ProductData";

function Products() {
  return (
    <div>
     <h2 className="text-2xl font-bold text-center mb-6">Products</h2>
      <div className="flex flex-wrap gap-8 justify-start p-4">
        {Product.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="no-underline">
            <div className="bg-blue-100 rounded-lg p-3 border-2 border-black hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="h-72 w-72 object-cover p-2"/>
              <h4 className="text-center text-blue-600 font-bold">{product.name}</h4>
              <h4 className="text-center text-blue-600 font-bold pb-2">₹{product.price}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products;
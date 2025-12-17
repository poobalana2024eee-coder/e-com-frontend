import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home.jsx";
import Product from "./ProductCard.jsx";
import Cart from "./Cart.jsx";
import NavBar from "./NavBar.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Contact from "./Contact.jsx";

function App(){
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;

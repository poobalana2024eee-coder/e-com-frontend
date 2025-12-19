import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Product from "./ProductCard.jsx";
import Cart from "./Cart.jsx";
import NavBar from "./NavBar.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Contact from "./Contact.jsx";
import AdminPanel from "./AdminPanel.jsx";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userType) => {
    setUser(userType);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <NavBar userType={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {user === 'admin' ? (
          <Route path="/products" element={<AdminPanel />} />
        ) : (
          <Route path="/products" element={<Product />} />
        )}
        {user === 'user' && <Route path="/cart" element={<Cart />} />}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

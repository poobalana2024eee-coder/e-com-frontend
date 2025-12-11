import {Link} from "react-router-dom";
import React from "react";

function NavBar(){
    return (
        <div>
        <nav className="bg-gradient-to-r from-slate-700 to-slate-800 shadow-lg py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-white font-bold text-2xl">e-Shop</div>
                <div className="flex gap-8 items-center">
                    <Link to="/home" className="no-underline text-white font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105">Home</Link>
                    <Link to="/products" className="no-underline text-white font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105">Products</Link>
                    <Link to="/cart" className="no-underline text-white font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105">Cart</Link>
                    <Link to="/contact" className="no-underline text-white font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105">Contact</Link>
                </div>
            </div>
        </nav>
        </div>
    )
}
export default NavBar;
import { Link } from "react-router-dom";
import React from "react";

function NavBar({ userType, onLogout }) {
    return (
        <div>
            <nav className="bg-gradient-to-r from-slate-700 to-slate-800 shadow-lg py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-white font-bold text-2xl">Next-Gen Tech</div>
                    <div className="flex gap-8 items-center">
                        <Link to="/home" className="no-underline text-white font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105">Home</Link>
                        <Link to="/products" className="no-underline text-white font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105">
                            {userType === 'admin' ? 'Manage Products' : 'Products'}
                        </Link>
                        {userType === 'user' && (
                            <Link to="/cart" className="no-underline text-white font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105">Cart</Link>
                        )}
                        <Link to="/contact" className="no-underline text-white font-semibold hover:text-blue-400 transition duration-300 transform hover:scale-105">Contact</Link>
                        <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                userType === 'admin' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                            }`}>
                                {userType === 'admin' ? 'Admin' : 'User'}
                            </span>
                            <button
                                onClick={onLogout}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;
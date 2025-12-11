import React, { useState, useEffect } from "react";

function Cart(){
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                const items = JSON.parse(savedCart);
                setCartItems(items);
            } catch (error) {
                console.log("Error loading cart:", error);
            }
        }
    }, []);

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
                <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
            <div className="space-y-6">
            {cartItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex gap-6">
            <img src={item.image} alt={item.name} className="h-48 w-48 object-cover rounded-md" />
            <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <p className="text-xl font-bold text-gray-800 mb-4">₹{item.price}</p>
            <button onClick={() => removeItem(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold cursor-pointer">Remove</button>
        </div>
    </div>
))}
</div>
</div>
</div>
);
}

export default Cart;
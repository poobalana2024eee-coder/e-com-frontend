import React from "react";
import home from "./assets/home-image.png";

function Home(){
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <img src={home} alt="home" className="w-full h-full object-cover brightness-50"></img>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">Next-Gen Tech Essentials</h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl drop-shadow-lg font-medium text-gray-100 leading-relaxed">Discover cutting-edge technology that transforms your digital lifestyle. Premium electronics with innovation at every touch!</p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">Shop Now</button>
            </div>
        </div>
    )
}

export default Home;
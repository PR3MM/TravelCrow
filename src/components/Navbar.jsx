import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="h-16 w-full bg-black flex items-center justify-between px-6 shadow-md">
      <div className=" sm:text-5xl md:text-4xl font-extrabold text-white mb-6  mt-3">TravelCrow</div>
      <div className="flex gap-6">
        <a href="#destinations" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">Destinations</a>
        <button href="#login" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">Login</button>
        <button href="#signup" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

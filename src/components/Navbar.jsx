import React from 'react';
import './Navbar.css'; 
import { Link ,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="h-16 w-full bg-black flex items-center justify-between px-6 shadow-md">
      <Link to='/' className=" sm:text-5xl md:text-4xl font-extrabold text-white mb-6  mt-3">TravelCrow</Link>
      <div className="flex gap-6">
        <Link to="/about" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">About</Link>
        <Link to="/destinations" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">Destinations</Link>
        <Link to="/login" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">Login</Link>
        <Link to="/signup" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
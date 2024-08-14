import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="h-16 w-full bg-black flex items-center justify-between px-6 shadow-md">
      <Link to='/' className="sm:text-5xl md:text-4xl font-extrabold text-white">TravelCrow</Link>
      <div className="flex items-center gap-6">
        <Link to="/about" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">About</Link>
        <Link to="/destinations" className="text-xl font-bold text-white hover:text-gray-300 transition-colors font-custom">Destinations</Link>
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={20} />
            </div>
            <ChevronDown size={20} className="ml-1" />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Profile</Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
              <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
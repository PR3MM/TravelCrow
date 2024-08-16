import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css'; 

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { currentUser, Logout } = useAuth();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    setError('');
    try {
      await Logout();
      navigate('/');
      console.log('Logout successful');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <nav className="absolute top-0 h-16 w-full text-white backdrop-filter backdrop-blur-lg flex items-center justify-between px-6 z-20 transition-all duration-300 ease-in-out">
      <Link to="/" className="text-3xl font-bold hover:text-gray-300 transition-colors">
        TravelCrow
      </Link>
      <div className="flex items-center space-x-6">
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `text-lg sm:text-xl font-semibold ${isActive ? 'text-gray-300' : 'text-white'} hover:text-gray-300 transition-colors`
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/destinations" 
          className={({ isActive }) => 
            `text-lg sm:text-xl font-semibold ${isActive ? 'text-gray-300' : 'text-white'} hover:text-gray-300 transition-colors`
          }
        >
          Destinations
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => 
            `text-lg sm:text-xl font-semibold ${isActive ? 'text-gray-300' : 'text-white'} hover:text-gray-300 transition-colors`
          }
        >
          Login
        </NavLink>
        <NavLink 
          to="/signup" 
          className={({ isActive }) => 
            `text-lg sm:text-xl font-semibold ${isActive ? 'text-gray-300' : 'text-white'} hover:text-gray-300 transition-colors`
          }
        >
          Sign Up
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;

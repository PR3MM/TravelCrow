import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, ChevronDown, Search } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { currentUser, Logout } = useAuth();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      await Logout();
      navigate('/');
      console.log('Logout successful');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  function handleSearch() {
    if (searchQuery.trim()) {
      navigate(`/destination/${encodeURIComponent(searchQuery)}`);
    }
  }

  return (
    <nav className="absolute top-0 w-full h-16 bg-transparent backdrop-filter backdrop-blur-lg flex items-center justify-between px-6 z-20 transition-all duration-300 ease-in-out">
      <Link
        to="/"
        className="text-3xl sm:text-4xl font-bold text-white hover:text-gray-300 transition-colors"
      >
        TravelCrow
      </Link>
      <div className="flex items-center gap-6">
        <Link
          to="/about"
          className="text-lg sm:text-xl font-semibold text-white hover:text-gray-300 transition-colors"
        >
          About
        </Link>
        <Link
          to="/destinations"
          className="text-lg sm:text-xl font-semibold text-white hover:text-gray-300 transition-colors"
        >
          Destinations
        </Link>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search Destinations.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-1 rounded-md border border-gray-300 text-black"
          />
          <button
            onClick={handleSearch}
            className="ml-2 p-2 bg-black text-white rounded-md hover:text-gray-300 transition-colors"
          >
            <Search size={20} />
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div className="ml-2 text-sm sm:text-base">
              {currentUser?.displayName || currentUser?.email}
            </div>
            <ChevronDown size={20} className="ml-1 text-white" />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                View Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

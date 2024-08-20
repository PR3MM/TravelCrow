import React from "react";
import { User, ArrowLeft } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-black pt-14 min-h-screen text-white">
      <header className="bg-black p-6 ">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className="text-white hover:text-gray-300 transition-colors flex items-center"
          >
            <ArrowLeft size={24} />
            <span className="ml-2">Back</span>
          </button>
          <h1 className="text-3xl font-bold">Profile</h1>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-semibold">
                {currentUser?.displayName || "User Name"}
              </h2>
              <p className="text-gray-400">
                {currentUser?.email || "user@example.com"}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-lg font-semibold mb-4">Details</h3>
            <ul>
              <li className="flex justify-between py-2 border-b border-gray-700">
                <span className="font-medium">Full Name:</span>
                <span>{currentUser?.displayName || "User Name"}</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-700">
                <span className="font-medium">Email:</span>
                <span>{currentUser?.email || "user@example.com"}</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-700">
                <span className="font-medium">Joined:</span>
                <span>{currentUser?.metadata?.creationTime || "N/A"}</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

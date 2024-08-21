import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AIContentPage() {
  const { destination } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({
    description: "",
    history: "",
    attractions: [],
    Hiddenattractions: "",
    photos: [],
    travelTips: [],
  });
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchAIContent();
    fetchPexelsPhotos();
  }, [destination]);

  const fetchAIContent = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://travelcrow.onrender.com/api/ai-content/${destination}`
        // `http://localhost:3000/api/ai-content/${destination}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch AI content");
      }
      const data = await response.json();
      setContent({
        description: data.description || "",
        history: data.ExtraDescription || "",
        attractions: Array.isArray(data.attractions) ? data.attractions : [],
        Hiddenattractions: data.HiddenAttractions || "",
        photos: Array.isArray(data.photos) ? data.photos : [],
        travelTips: Array.isArray(data.travelTips) ? data.travelTips : [],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPexelsPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${destination}&per_page=10`,
        {
          headers: {
            Authorization: import.meta.env.VITE_APP_PEXELS_API_KEY,
          },
        }
      );
      setPhotos(response.data.photos);
    } catch (err) {
      console.error("Error fetching photos from Pexels:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-white bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p>
            Loading... Please wait while we fetch amazing content for{" "}
            {destination}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-lg text-white bg-black p-6">
        <p className="mb-4 text-center">
          📈 Due to the overwhelming popularity, we’re currently facing some issues. 
          Don’t worry, our team is working hard to resolve this as quickly as possible!
        </p>
        <p className="mb-4 text-center">
          Unfortunately, an error occurred: {error}. Please try again.
        </p>
        <button
          className="bg-white text-black px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }
  

  return (
    <div className="bg-black text-white min-h-screen pt-20 px-4 sm:px-8 md:px-16">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold tracking-wide mb-2">
          {destination}
        </h1>
        <p className="text-xl font-light text-gray-400">
          Discover the wonders of {destination}
        </p>
      </header>

      {/* About Section */}
      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">About {destination}</h2>
        <p className="text-lg leading-relaxed">{content.description}</p>
      </section>

      {/* History Section */}
      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">History and Culture</h2>
        <p className="text-lg leading-relaxed">{content.history}</p>
      </section>

      {/* Top Attractions Section */}
      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Top Attractions</h2>
        <ul className="list-disc pl-5 space-y-2">
          {content.attractions.length > 0 ? (
            content.attractions.map((attraction, index) => (
              <li
                key={index}
                className="text-lg leading-relaxed hover:underline"
              >
                {attraction}
              </li>
            ))
          ) : (
            <li className="text-lg text-gray-500">
              No attractions available
            </li>
          )}
        </ul>
      </section>

      {/* Hidden Attractions Section */}
      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Top Hidden Attractions</h2>
        <p className="text-lg leading-relaxed">{content.Hiddenattractions}</p>
      </section>

      {/* Travel Tips Section */}
      <section className="pb-12 mb-12  bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Travel Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          {Array.isArray(content.travelTips) &&
          content.travelTips.length > 0 ? (
            content.travelTips.map((tip, index) => (
              <li
                key={index}
                className="text-lg leading-relaxed hover:underline"
              >
                {tip}
              </li>
            ))
          ) : (
            <li className="text-lg text-gray-500">No travel tips available</li>
          )}
        </ul>
      </section>

      {/* Photos Section */}
      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Photos of {destination}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.length > 0 ? (
            photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.src.medium}
                alt={photo.photographer}
                className="rounded-lg object-cover h-80 w-full transition duration-300 hover:shadow-lg"
              />
            ))
          ) : (
            <p className="text-lg text-gray-500">
              No photos available for {destination}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

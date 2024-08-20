import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    fetchAIContent();
  }, [destination]);

  const fetchAIContent = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:3000/api/ai-content/${destination}`
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-white bg-black">
        Loading... Please wait while we fetch amazing content for {destination}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-white bg-black">
        An error occurred: {error}
        <button
          className="bg-white text-black px-4 py-2 rounded-md ml-4"
          onClick={() => window.location.reload()}
        >
          Retry
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

      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">About {destination}</h2>
        <p className="text-lg leading-relaxed">{content.description}</p>
      </section>

      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">History and Culture</h2>
        <p className="text-lg leading-relaxed">{content.history}</p>
      </section>

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

      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">
          Top Hidden Attractions
        </h2>
        <p className="text-lg leading-relaxed">
          {content.Hiddenattractions}
        </p>
      </section>

      {/* <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {content.photos.length > 0 ? (
            content.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${destination} - Photo ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-300"
              />
            ))
          ) : (
            <p className="text-lg text-gray-500">No photos available</p>
          )}
        </div>
      </section> */}

      <section className="pb-12  bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
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
    </div>
  );
}

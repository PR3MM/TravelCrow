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
      {
        console.log(data.HiddenAttractions);
      }
      setContent({
        description: data.description || "",
        history: data.ExtraDescription || "",
        // history: Array.isArray(data.history) ? data.history : [],
        attractions: Array.isArray(data.attractions) ? data.attractions : [],
        // Hiddenattractions: Array.isArray(data.Hiddenattractions) ? data.Hiddenattractions : [],
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
        Generating amazing content for {destination}...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">{destination}</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About {destination}</h2>
        <p className="text-lg">{content.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">History and Culture</h2>
        <ul className="list-disc pl-5">
          <p className="text-lg">{content.history}</p>

          {/* {Array.isArray(content.history) && content.history.length > 0 ? (
            content.history.map((tip, index) => (
              <li key={index} className="text-lg">{tip}</li>
            ))
          ) : (
            <li className="text-lg text-gray-500">No History available</li>
          )} */}

          {/* {content.history.length > 0 ? (
            content.history.map((history, index) => (
              <li key={index} className="text-lg">{history}</li>
            ))
          ) : (
            <li className="text-lg text-gray-500">No history available</li>
          )} */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Top Attractions</h2>
        <ul className="list-disc pl-5">
          {content.attractions.length > 0 ? (
            content.attractions.map((attraction, index) => (
              <li key={index} className="text-lg">
                {attraction}
              </li>
            ))
          ) : (
            <li className="text-lg text-gray-500">No attractions available</li>
          )}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Top Hidden Attractions</h2>
        {/* <ul className="list-disc pl-5">
          {content.Hiddenattractions.length > 0 ? (
            content.Hiddenattractions.map((attraction, index) => (
              <li key={index} className="text-lg">{attraction}</li>
            ))
          ) : (
            <li className="text-lg text-gray-500">No Hidden attractions available</li>
          )}
        </ul> */}
        <p className="text-lg">{content.Hiddenattractions}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {content.photos.length > 0 ? (
            content.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${destination} - Photo ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg border border-gray-200"
              />
            ))
          ) : (
            <p className="text-lg text-gray-500">No photos available</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Travel Tips</h2>
        <ul className="list-disc pl-5">
          {Array.isArray(content.travelTips) &&
          content.travelTips.length > 0 ? (
            content.travelTips.map((tip, index) => (
              <li key={index} className="text-lg">
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

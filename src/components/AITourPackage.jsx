import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AITourPackage() {
  const { destination } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({
    description: "",
    tourPackage: "",
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
        `http://localhost:3000/api/tour-packages/${destination}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch AI content");
      }
      const data = await response.json();
      setContent({
        description: data.description || "",
        tourPackage: data.tourPackage || "",
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
      <div className="flex items-center justify-center h-screen text-lg text-red-500 bg-black">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-20 px-4 md:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">{destination}</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About {destination}</h2>
        <p className="text-lg leading-relaxed">{content.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tour Packages for {destination}</h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed whitespace-pre-line">{content.tourPackage}</p>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AITourPackage() {
  const { destination } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({
    description: '',
    tourPackage: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAIContent();
  }, [destination]);

  const fetchAIContent = async () => {
    // setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3000/api/tour-packages/${destination}`);
      // const response = await fetch(`https://travelcrow.onrender.com/api/tour-packages/${destination}`);
      if (!response.ok) {
        throw new Error('Failed to fetch AI content');
      }
      const data = await response.json();
      setContent({
        description: data.description || '',
        tourPackage: data.tourPackage || '',
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
    <div className="bg-black text-white min-h-screen pt-20 px-4 md:px-8 m-0">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">{destination}</h1>
      </header>

      <section className="mb-8 mb-12 p-6 bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">About {destination}</h2>
        <p className="text-lg leading-relaxed">{content.description}</p>
      </section>

      <section className="pb-8   bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Tour Packages for {destination}</h2>
        <div className="space-y-4">
          {content.tourPackage.split('\n').map((packageItem, index) => (
            <p key={index} className="text-lg leading-relaxed whitespace-pre-line">
              {packageItem}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
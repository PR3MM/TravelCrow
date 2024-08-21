import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

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
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://travelcrow.onrender.com/api/tour-packages/${destination}`);
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
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading... Please wait while we fetch amazing content for {destination}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-white bg-black">
        <div className="text-center">
          <p className="mb-4">An error occurred: {error}</p>
          <button
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  const renderTourPackage = () => {
    if (!content.tourPackage) {
      return <p>No tour package information available.</p>;
    }

    const lines = content.tourPackage.split('\n');
    let currentSection = null;
    
    return lines.map((line, index) => {
      if (!line) return null;

      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('##')) {
        currentSection = trimmedLine.replace(/^#+\s*/, '').trim();
        return (
          <h2 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">
            {currentSection}
          </h2>
        );
      } else if (trimmedLine.startsWith('**')) {
        const cleanedLine = trimmedLine.replace(/\*+/g, '').trim();
        const [key, ...valueParts] = cleanedLine.split(':');
        const value = valueParts.join(':').trim();
        
        if (value) {
          return (
            <p key={index} className="mb-3 text-lg">
              <span className="font-semibold">{key}: </span>
              <span>{value}</span>
            </p>
          );
        } else {
          return (
            <h3 key={index} className="text-2xl font-semibold mt-6 mb-3 text-white">
              {key}
            </h3>
          );
        }
      } else if (trimmedLine.startsWith('*') || trimmedLine.startsWith('★')) {
        return (
          <div key={index} className="flex items-start mb-2 ml-4">
            <Star className="text-white mr-2 mt-1 flex-shrink-0" size={18} />
            <p className="text-lg">{trimmedLine.replace(/^[*★]\s*/, '')}</p>
          </div>
        );
      } else if (trimmedLine) {
        return <p key={index} className="mb-2 text-lg">{trimmedLine}</p>;
      }
      return null;
    }).filter(Boolean);
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen pt-20 px-4 md:px-8 m-0">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-white">
          {destination}
        </h1>
      </header>

      <section className="mb-12 p-6 bg-white bg-opacity-10 rounded-xl transition duration-300 hover:bg-opacity-20 hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-4 text-white">About {destination}</h2>
        <p className="text-lg leading-relaxed">{content.description || 'No description available.'}</p>
      </section>

      <section className="pb-8 bg-white bg-opacity-10 rounded-xl p-6 transition duration-300 hover:bg-opacity-20 hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-white">Tour Package for {destination}</h2>
        <div className="space-y-2">
          {renderTourPackage()}
        </div>
      </section>
    </div>
  );
}
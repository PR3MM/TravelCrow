import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AIContentPage() {
  const { destination } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAIContent();
  }, [destination]);

  const fetchAIContent = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/ai-content/${destination}`);
      if (!response.ok) {
        throw new Error('Failed to fetch AI content');
      }
      const data = await response.json();
      setContent(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Generating amazing content for {destination}...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="ai-content-page">
      <h1>{destination}</h1>
      
      <section className="description">
        <h2>About {destination}</h2>
        <p>{content.description}</p>
      </section>
      
      <section className="attractions">
        <h2>Top Attractions</h2>
        <ul>
          {content.attractions.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>
      </section>
      
      <section className="photo-gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
          {content.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`${destination} - Photo ${index + 1}`} />
          ))}
        </div>
      </section>
      
      <section className="travel-tips">
        <h2>Travel Tips</h2>
        <ul>
          {content.travelTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
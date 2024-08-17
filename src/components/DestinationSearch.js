import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function DestinationSearch() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      history.push(`/destination/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="destination-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a destination"
        className="search-input"
      />
      <button type="submit" className="search-button">Explore</button>
    </form>
  );
}
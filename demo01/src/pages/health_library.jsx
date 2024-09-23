import React, { useState, useEffect, useRef } from 'react';

export default function HealthLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [entries, setEntries] = useState([]);
  const [displayedEntries, setDisplayedEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    fetchEntries();
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchSuggestions();
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    updateDisplayedEntries();
  }, [searchTerm, entries, showAll]);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/health-library/entries');
      if (!response.ok) {
        throw new Error('Failed to fetch entries');
      }
      const data = await response.json();
      setEntries(data);
      updateDisplayedEntries(data);
    } catch (error) {
      setError('Failed to load health library entries');
    }
    setLoading(false);
  };

  const updateDisplayedEntries = (data = entries) => {
    const filteredEntries = searchTerm
      ? data.filter(entry => 
          entry.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : data;
    
    setDisplayedEntries(showAll ? filteredEntries : filteredEntries.slice(0, 5));
  };

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(`/api/health-library/search?query=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowAll(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Health Library</h1>
      
      <div className="relative mb-4" ref={searchRef}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search health entries..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border rounded"
          />
        </form>
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border rounded mt-1">
            {suggestions.map((suggestion) => (
              <li 
                key={suggestion._id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <ul className="space-y-4">
        {displayedEntries.map((entry) => (
          <li key={entry._id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{entry.title}</h2>
            <p><strong>Symptoms:</strong> {entry.symptoms}</p>
            <p><strong>Precautions:</strong> {entry.precautions}</p>
            <p><strong>Treatment:</strong> {entry.treatment}</p>
          </li>
        ))}
      </ul>

      {!showAll && displayedEntries.length < entries.length && (
        <button 
          onClick={handleShowMore}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Show More
        </button>
      )}
    </div>
  );
}
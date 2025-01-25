import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../stylesheet/searchbar.css";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMall, setSelectedMall] = useState('');

  const mallList = ['VR Mall', 'Phoenix Mall', 'Wave Mall', 'City Centre', 'Mall of India'];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      setSuggestions(mallList.filter((mall) => mall.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectMall = (mall) => {
    setSelectedMall(mall);
    setQuery(mall); 
    setSuggestions([]); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && selectedMall) {
      e.preventDefault();
    }
  };

  return (
    <div className='search-box'>
      <input
        className='input-box'
        type="text"
        value={query}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        placeholder="Search for a mall"
      />
      
      {suggestions.length > 0 && (
        <div className="suggestions-box">
          <ul className="suggestions-list">
            {suggestions.map((mall) => (
              <li className="suggestion-item" key={mall} onClick={() => handleSelectMall(mall)}>
                {mall}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link to={{
        pathname: '/booking',
        state: { selectedMall }
      }}>
        <button>Book a Slot</button>
      </Link>
    </div>
  );
};

export default SearchBar;

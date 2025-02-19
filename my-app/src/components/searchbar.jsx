import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../stylesheet/searchbar.css";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMall, setSelectedMall] = useState('');
    const navigate = useNavigate()
  

  const mallList = ['VR Mall', 'Phoenix Mall', 'Wave Mall', 'City Centre', 'Mall of India'];
  console.log("its suggestion", suggestions);
  console.log("query1", query);

  const handleslot = () => {
    console.log("its inside");
    console.log("query2", query);
    if (mallList.map((mall) => mall.toLowerCase().includes(query.toLowerCase()))) {
      console.log(" in the mall list.");
      navigate("/booking")
    } else {
      alert("not in the mall list");
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      setSuggestions(mallList.filter((mall) => mall.toLowerCase().includes(value.toLowerCase())));
    } 
    
  };

  const handleSelectMall = (mall) => {
    console.log("mall",mall)
    setSelectedMall(mall);
    setQuery(mall);
    setSuggestions([]);
  };

  return (
    <div className='search-box'>
      <input
        className='input-box'
        type="text"
        value={query}
        onChange={handleSearch}
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

      <div>
      <div className='bookslot' onClick={handleslot}>
          <h5 className='slotbtn'>Book a Slot</h5>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
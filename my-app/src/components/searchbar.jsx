import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../stylesheet/searchbar.css";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || '';
  //const selectedSlot = location.state?.selectedSlot || '';
  console.log('userName in SearchBar:', userName);

  const mallList = ['RIT MALL'];
  const targetLatitude = 13.096111547096362;
  const targetLongitude =80.10960961240892;  

  const handleslot = () => {
    if (mallList.some((mall) => mall.toLowerCase().includes(query.toLowerCase()))) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        const distance = calculateDistance(userLatitude, userLongitude, targetLatitude, targetLongitude);

        if (distance <= 700) {
          navigate('/booking', { state: { query, userName } }); // Pass userName to Booking
        } else {
          alert("You are not within 700m of the booking location.");
        }
      }, (error) => {
        alert("Error getting your location: " + error.message);
      });
    } else {
      alert("Not in the mall list.");
    }
  };

  const handleCloseSlot = () => {
    if (!userName) {
      alert("User name is missing!");
      return;
    }
    navigate('/closeslot', { state: { userName } }); // Pass userName to CloseSlot
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371000; // Radius of the Earth in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      setSuggestions(mallList.filter((mall) => mall.toLowerCase().includes(value.toLowerCase())));
    }
  };

  const handleSelectMall = (mall) => {
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
      <div className='bookslot'>
        <div className="book-div" onClick={handleslot}>
          <h5 className='bookbtn'>Book a Slot</h5>
        </div>
        <div className="close-div" onClick={handleCloseSlot}>
          <h5 className='closebtn'>Close the slot</h5>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../stylesheet/searchbar.css";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMall, setSelectedMall] = useState('');
    const navigate = useNavigate()
    const location = useLocation();
    const userName = location.state?.data || '';
    console.log('userName',userName)
   

    // useEffect = (()=>{
    //   handleslot();
    // },[query]);
  

  const mallList = ['RIT MALL'];
  

  const targetLatitude =  13.100767714568137; //13.038420375354919;
  const targetLongitude =  80.11160936323166; //80.04539349561912;
  
  const handleslot = () => {
      console.log("its inside");
      console.log("query2", query);
  
      if (mallList.map((mall) => mall.toLowerCase().includes(query.toLowerCase()))) {
          navigator.geolocation.getCurrentPosition((position) => {
              const userLatitude = position.coords.latitude;
              const userLongitude = position.coords.longitude;
  
              const distance = calculateDistance(userLatitude, userLongitude, targetLatitude, targetLongitude);
  
              if (distance <= 700) {
                  console.log(" in the mall list and within 700m.");
                  navigate('/booking ', {state :{query,userName}});
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
  // function to close a slot 
  const handleCloseSlot = () =>{
    navigate('/closeslot',{state :{userName}});
  }
  
  // Function to calculate the distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371000; // Radius of the Earth in meters
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance;
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
      <div className='bookslot'>
        <div className="book-div" onClick={handleslot}>
          <h5 className='bookbtn'>Book a Slot</h5>
        </div>
        <div className="close-div" onClick={handleCloseSlot}>
          <h5 className='closebtn'>Close the slot</h5>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
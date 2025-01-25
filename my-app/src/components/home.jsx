import React from 'react';
import PurpleBG from "../assets/purplebg.png";
import "../stylesheet/home.css";
import  SearchBar from "../components/searchbar";
import ParkingContent from "../components/parking-content.jsx"
import Footer from "../components/footer.jsx"


function Home() {
  return (
    <div className="home-main">
      <div className="background"></div>
      <div className='home-header'>
        <h1>“Smart Parking Made Simple”</h1>
        <p>Find and Book Parking Slots Anytime, Anywhere</p>
      </div>
      <div className="searchbar">
        <SearchBar/>;
      </div>
      <div>
        <ParkingContent/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;

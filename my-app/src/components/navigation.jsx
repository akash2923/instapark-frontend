import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheet/navigation.css";
import Profile from"../assets/profile.png"

function NavBar() {
  return (
    <nav className="nav-bar">
      {/* Logo Section */}
      <div className="nav-bar-logo">
        <h1>INSTAPARKS</h1>
      </div>

      {/* Navigation Links */}
      <ul className="nav-bar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>

      {/* Profile Picture */}
      <div className="nav-bar-profile">
        <img 
          src={Profile} // Replace with the actual image path
          alt="Profile"
          className="profile-pic"
        />
      </div>
    </nav>
  );
}

export default NavBar;


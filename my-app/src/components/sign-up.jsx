// src/components/SignUp.js
import "../stylesheet/signup.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, rePassword } = formData;
    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add form submission logic (e.g., send data to server)
    console.log("Form submitted successfully:", formData);
  };

  return (
    <div className="signup-maindiv">
      <div className="signup-div">
        <h2 className="signuptext">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="signup-phonenumber">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Phone number should be 10 digits"
              required
            />
          </div>
          <div className="signup-email">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="signup-password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="signup-repassword">
            <label htmlFor="rePassword">Re-enter Password</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
            />
          </div>
          <div className="btn-end">
            <button type="submit" className="signup-btn">Sign Up</button>
            <p className="navigate-text">
              Already have an account?{" "}
              <Link to="/" className="signin-link">Sign-In</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="signup-text">
        <h1>Join the Parking Revolution</h1>
        <p>“Create an account to experience effortless parking”</p>
      </div>
    </div>
  );
}

export default SignUp;

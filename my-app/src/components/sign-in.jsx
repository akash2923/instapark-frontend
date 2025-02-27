import '../stylesheet/signin.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlesignin = async () => {
    try {
      const response = await axios.post("https://localhost:7130/User/signin", { username, password });
      console.log("Response data:", response.data);
      const userName = response.data[0]?.userName || "";
      navigate('/home', { state: { userName } }); // Pass userName to the next component
      alert("Sign in successful!");
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Sign in failed. Please check your credentials.");
    }
  };

  return (
    <div className="signin-maindiv">
      <div className="signin-div">
        <h2 className="signintext">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="signin-username">
            <label htmlFor="username">Username</label><br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="signin-password">
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="btn-end">
            <button type="submit" className="signup-btn" onClick={handlesignin}>Sign In</button>
            <p className="navigate-text">
              Don't have an account?{" "}
              <Link to="/signup" className="signin-link">Sign-Up</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="signin-text">
        <h1>Welcome Back</h1>
        <p>Log in to continue your parking journey</p>
      </div>
    </div>
  );
}

export default SignIn;
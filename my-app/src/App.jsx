import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navigation';
import SignIn from './components/sign-in'; 
import SignUp from './components/sign-up'; 
import AboutUs from './components/about'; 
import Pricing from './components/feedback'; 
import ContactUs from './components/contact'; 
import Home from './components/home';
import Booking from './components/booking-slot'; 
import Details from './components/details'; 
import AboutUs from './components/about';

function App() {
  return (
    <Router>
     <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/feedback" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/details" element={<Details />} />
       

      </Routes>
    </Router>
  );
}

export default App;

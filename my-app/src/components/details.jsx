import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "../stylesheet/details.css";
import axios from 'axios';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const notify = () => toast("Succesfully Booked!");

  // Retrieve the selected slot passed from the previous component
  const selectedSlot = location.state?.selectedSlot || '';
  const Name = location.state?.userName || '';

  // State variables for form inputs
  const [userName, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberPlate, setNumberPlate] = useState('');

  // Handle the booking confirmation
  const handleConfirmBooking = async() => {
    if (!userName || !phoneNumber || !numberPlate) {
      alert('Please fill out all fields!');
      return;
    }
    try{
      console.log("am in ")
      const response = await axios.post("https://localhost:7130/User/Booking",{userName,phoneNumber,numberPlate,selectedSlot})
      console.log(response);
    }
    catch(error){
      console.log(error);
    };
    
  };

  // Handle Back Navigation
  const handleBack = () => {
    navigate(-1); // Navigates to the previous page in the history stack
  };

  return (
    <div className="details-container">
       <div className="background-2"></div>
      <h1>Fill Your Details</h1>
      <form className="details-form" onSubmit={(e) => e.preventDefault()}>
        {/* Display selected slot */}
        <label>Selected Slot:</label>
        <input
          type="text"
          value={selectedSlot}
          className="form-input"
          readOnly
        />

        {/* Input for Name */}
        <label>Enter UserName:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
        />

        {/* Input for Phone Number */}
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="form-input"
          required
        />

        {/* Input for Number Plate */}
        <label>Number Plate:</label>
        <input
          type="text"
          value={numberPlate}
          onChange={(e) => setNumberPlate(e.target.value)}
          className="form-input"
          required
        />

        {/* Input for Timing */}
        

        <div className="button-group">
          {/* Back Button */}
          <button
            type="button"
            className="back-btn"
            onClick={handleBack}
          >
            Back
          </button>

          {/* Confirm Button */}
          <button
            type="button"
            className="confirm-btn"
            onClick={handleConfirmBooking}
            
          >
            Confirm Booking
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../stylesheet/details.css";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the selected slot passed from the previous component
  const selectedSlot = location.state?.selectedSlot || '';

  // State variables for form inputs
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberPlate, setNumberPlate] = useState('');
  const [timing, setTiming] = useState('');

  // Handle the booking confirmation
  const handleConfirmBooking = () => {
    if (!name || !phoneNumber || !numberPlate || !timing) {
      alert('Please fill out all fields!');
      return;
    }

    console.log({
      name,
      phoneNumber,
      numberPlate,
      timing,
      selectedSlot,
    });

    alert('Booking Confirmed!');
    navigate('/'); // Navigate to the home page or any other page after confirmation
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
        <label>Name:</label>
        <input
          type="text"
          value={name}
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
        <label>Timing:</label>
        <input
          type="time"
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
          className="form-input"
          required
        />

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

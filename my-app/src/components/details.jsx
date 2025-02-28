import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../stylesheet/details.css";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedSlot = location.state?.selectedSlot || '';
  const userName = location.state?.userName || '';
  const [userName1, setuserName1] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberPlate, setNumberPlate] = useState('');

  const handleConfirmBooking = async () => {
    if (!userName || !phoneNumber || !numberPlate) {
      alert('Please fill out all fields!');
      return;
    }
    try {
      const response = await axios.post("https://localhost:7130/User/Booking", { userName, phoneNumber, numberPlate, selectedSlot });
      console.log(response);
      alert("Successfully Booked");
      navigate('/home', { state: { userName } }); // Pass userName back to Home
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="details-container">
      <div className="background-2"></div>
      <h1 className='h1'>Fill Your Details</h1>
      <form className="details-form" onSubmit={(e) => e.preventDefault()}>
        <label>Selected Slot:</label>
        <input type="text" value={selectedSlot} className="form-input" readOnly />
        <label>Phone Number:</label>
        <input type="text" value={userName1} onChange={(e) => setuserName1(e.target.value)} className="form-input" required />
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-input" required />
        <label>Number Plate:</label>
        <input type="text" value={numberPlate} onChange={(e) => setNumberPlate(e.target.value)} className="form-input" required />
        <div className="button-group">
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          <button type="button" className="confirm-btn" onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default Details;
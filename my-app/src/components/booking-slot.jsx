import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../stylesheet/booking.css"


const Booking = () => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigate = useNavigate();

  const slots = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10'];

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookSlot = () => {
    if (selectedSlot) {
      navigate('/details', { state: { selectedSlot } });
    } else {
      alert('Please select a slot before proceeding!');
    }
  };

  return (
    <div className="booking-container">
      <div className="background-1"></div>
      <h1>Select a Parking Slot</h1>
      <div className="parking-slots-container">
        {slots.map((slot) => (
          <div
            key={slot}
            className={`parking-slot ${selectedSlot === slot ? 'selected' : ''}`}
            onClick={() => handleSlotSelection(slot)}
          >
            {slot}
          </div>
        ))}
      </div>
      <button className="book-slot-btn" onClick={handleBookSlot}>
        Book Slot
      </button>
    </div>
  );
};

export default Booking;

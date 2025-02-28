import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../stylesheet/booking.css";

const Booking = () => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const mallName = location.state?.query || '';
  const userName = location.state?.userName || '';
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://localhost:7130/User/SeatsBlocked", { mallName });
        setSlots(response.data);
      } catch (e) {
        console.log('Error', e);
      }
    };
    fetchData();
  }, [mallName]);

  const handleSlotSelection = (slot) => {
    if (slot.isAvaliable === 0) return;
    setSelectedSlot(slot.selectedSlot);
  };

  const handleBookSlot = () => {
    if (selectedSlot) {
      navigate('/details', { state: { selectedSlot, userName } }); // Pass userName to Details
    } else {
      alert('Please select a slot before proceeding!');
    }
  };

  return (
    <div className="booking-container">
      <div className="background-1"></div>
      <h1>Select a Parking Slot</h1>
      <div className="parking-slots-container">
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`parking-slot ${slot.isAvaliable === 0 ? 'bookedslot' : ''} ${selectedSlot === slot.selectedSlot ? 'selected' : ''}`}
            onClick={() => handleSlotSelection(slot)}
            style={{
              backgroundColor: slot.isAvailable === 0 ? 'red' : '',
              cursor: slot.isAvailable === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            {slot.selectedSlot}
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
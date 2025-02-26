import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../stylesheet/booking.css";

const Booking = () => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const mallName = location.state?.query || '';
 // const userName = location.state?.userName || '';
  //console.log("username2",userName)

  const [slots, setSlots] = useState([]);
  console.log('mallName', mallName);

  // Handle slot selection (check if slot is available)
  const handleSlotSelection = (slot) => {
    // Prevent selecting if the slot is booked
    if (slot.isAvaliable === 0) {
      return;
    }
    setSelectedSlot(slot.selectedSlot); // Set the selected slot
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://localhost:7130/User/SeatsBlocked", { mallName });
        console.log(response.data);
        setSlots(response.data); // Set the slot data from the API response
      } catch (e) {
        console.log('Error', e);
      }
    };
    fetchData(); // Fetch slots when component is mounted or mallName changes
  }, [mallName]);

  // Handle the booking action
  const handleBookSlot = () => {
    if (selectedSlot) {
      navigate('/details', { state: { selectedSlot} }); // Navigate to the details page with selected slot
    } else {
      alert('Please select a slot before proceeding!'); // Alert if no slot is selected
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
            className={`parking-slot 
                        ${slot.isAvaliable === 0 ? 'bookedslot' : ''} 
                        ${selectedSlot === slot.selectedSlot ? 'selected' : ''}`}
            onClick={() => handleSlotSelection(slot)} // Select the slot if available
            style={{
              backgroundColor: slot.isAvailable === 0 ? 'red' : '', // Red for booked slots
              cursor: slot.isAvailable === 0 ? 'not-allowed' : 'pointer' // Disable pointer for booked slots
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

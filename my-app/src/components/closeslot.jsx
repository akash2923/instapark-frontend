import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../stylesheet/closeslot.css";

const CloseSlot = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || '';
  console.log('userName', userName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://localhost:7130/User/ClosetheSlot", { userName });
        setData(response.data);
      } catch (e) {
        console.log(e.response.data);
      }
    };
    fetchData();
  }, [userName]);

  const handleCloseSlot = async () => {
    try {
      await axios.post("https://localhost:7130/User/ClosetheSlot", { userName });
      // Add any further actions you want to perform upon successful closure
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="details">
      <div className="detailslist">
        <h5 className="userName">Name: {data.userName}</h5>
        <h5 className="userNoPlate">Number Plate: {data.numberPlate}</h5>
        <h5 className="slotName">Slot: {data.slotName}</h5>
        <h5 className="userNo">Phone Number: {data.phoneNumber}</h5>
        <h5 className="timing">Booking Timing: {data.bookingTime}</h5>
        <div className="closebtn-2">
          <button onClick={handleCloseSlot}>Confirm Closing</button>
        </div>
      </div>
    </div>
  );
};

export default CloseSlot;

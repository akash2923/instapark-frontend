import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheet/closeslot.css";

const CloseSlot = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const receivedUserName = location.state?.userName || "";
  console.log("Location State in CloseSlot:", receivedUserName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data for user:", receivedUserName);
        const response = await axios.post("https://localhost:7130/User/ClosetheSlot", { userName: receivedUserName });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching slot details:", error.response?.data || error.message);
      }
    };
    fetchData();
  }, [receivedUserName]);

  console.log('data coming', data);

  const handleCloseSlot = async () => {
    try {
      const detailsResponse = await axios.post("https://localhost:7130/User/ClosetheSlot", { userName: receivedUserName });
      console.log(detailsResponse);

      // Calculate the amount
      const currentDate = new Date();
      const bookingDate = new Date(data[0]?.bookingTime); // Assuming you use the first item for the booking time
      const durationInMinutes = Math.ceil((currentDate - bookingDate) / (1000 * 60));
      const amount = Math.ceil(durationInMinutes / 5) * 10; // 10 Rs for every 5 minutes

      console.log(`Total Amount: ${amount} Rs`);

      alert("Slot closed successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Error closing slot:", error.response?.data || error.message);
    }
  };

  return (
    <div className="details">
      <div className="detailslist">
        {data.map((item, index) => (
          <div key={index}>
            <h5 className="userName">Name: {item.userName || "N/A"}</h5>
            <h5 className="userNoPlate">Number Plate: {item.numberPlate || "N/A"}</h5>
            <h5 className="slotName">Slot: {item.slotName || "N/A"}</h5>
            <h5 className="userNo">Phone Number: {item.phoneNumber || "N/A"}</h5>
            <h5 className="timing">Booking Timing: {item.bookingTime || "N/A"}</h5>
          </div>
        ))}
        <div className="closebtn-2">
          <button onClick={handleCloseSlot}>Confirm Closing</button>
        </div>
      </div>
    </div>
  );
};

export default CloseSlot;

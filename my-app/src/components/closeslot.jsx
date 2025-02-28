import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CloseSlot = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const receivedUserName = location.state?.userName || "";
  console.log('data',data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://localhost:7130/User/ClosetheSlot", {
          userName: receivedUserName,
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching slot details:", error.response?.data || error.message);
      }
    };
    fetchData();
  }, [receivedUserName]);

  const loadRazorpay = (amount) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: "rzp_test_hh96z1BCiHEesr", // Replace with your Razorpay Test Key ID
        amount: amount * 100, // Razorpay works in paise (INR 1 = 100 paise)
        currency: "INR",
        name: "Slot Payment",
        description: "Closing Slot Payment",
        image: "https://yourlogo.com/logo.png", // Optional logo URL
        handler: (response) => {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
          try{
            axios.post("https://localhost:7130/User/ConfirmClosing",{userName:{receivedUserName},selectedSlot})
          }
          catch(e){
            console.log(e)
          }

          navigate("/home", { state: { userName: receivedUserName } });

        },
        prefill: {
          name: receivedUserName,
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  };

  const handleCloseSlot = async () => {
    try { 
      const detailsResponse = await axios.post("https://localhost:7130/User/ClosetheSlot", { userName: receivedUserName});

      const currentDate = new Date();
      const bookingDate = new Date(data[0]?.bookingTime);
      const durationInMinutes = Math.ceil((currentDate - bookingDate) / (1000 * 60));
      const amount = Math.ceil(durationInMinutes / 60) * 40;

      console.log(`Total Amount: ${amount} Rs`);

      loadRazorpay(amount);
    } catch (error) {
      console.error("Error closing slot:", error.response?.data || error.message);
    }
  };

  return (
    <div className="details">
      <div className="detailslist">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <h5 className="userName">Name: {item.userName || "N/A"}</h5>
              <h5 className="userNoPlate">Number Plate: {item.numberPlate || "N/A"}</h5>
              <h5 className="slotName">Slot: {item.selectedSlot || "N/A"}</h5>
              <h5 className="userNo">Phone Number: {item.phoneNumber || "N/A"}</h5>
              <h5 className="timing">Booking Timing: {item.bookingTime || "N/A"}</h5>
              <br />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
        <div className="closebtn-2">
          <button onClick={handleCloseSlot}>Confirm Closing</button>
        </div>
      </div>
    </div>
  );
};

export default CloseSlot;

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../stylesheet/closeslot.css"

const CloseSlot = () => {
    const[data ,SetData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fecthData = async ()=>{
            try{
                const response = await axios.post("https://localhost:7130/User/ClosetheSlot",userName)
                SetData(response);
            }
            catch(e){
                console.log(e)
            }
        }
    },[]);

    const HandleCloseSlot = () => {
        // axios.post("https://localhost:7130/User/ClosetheSlot",userName)

    }

  return (
    <div className="details">
        <div className="detailslist">
            <h5 className='userName'>Name :{data.userName}</h5>
            <h5 className="userNoPlate">NumberPlate:{data.numberPlate}</h5>
            <h5 className="slotName">Slot : {data.slotName}</h5>
            <h5 className='userNo'>PhoneNumber :{data.phoneNumber}</h5>
            <h5 className="timing">Booking Timing :{data.bookingTime}</h5>
            <div className="closebtn-2">
                <button>Confirm Closing</button>
            </div>
        </div>
        
    </div>
  )
}
export default CloseSlot;
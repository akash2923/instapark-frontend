import ParkingBg from "../assets/parking-image.png";
import "../stylesheet/parking-content.css"
function ParkingContent (){
    return (
        <>
            <div className="parking-content">
                <div className="content-1">
                    <img src={ParkingBg} alt="Parking Background" />
                </div>
                <div className="content-2">
                    <p>"Discover a hassle-free way to park with ease. Book your spot in advance and enjoy a seamless parking experience at your favorite destinations. With our smart parking solution, you can find, reserve, and manage parking spaces effortlessly, saving time and eliminating the stress of searching for a spot. Whether you're heading to a shopping mall, office, or an event, we make parking convenient, reliable, and smarter for all your needs." </p>
                </div>
            </div>
        
        
        </>
    )
}
export default ParkingContent;
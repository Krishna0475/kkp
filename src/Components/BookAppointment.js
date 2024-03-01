import React from "react";
import Doctor from "../Assets/group.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    
    <div className="ba-section">
      <div className="ba-image-content">
    <img src ={Doctor} alt="Doctor Group" className="ba-image1" ></img>    
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Harmonising Health</span>
        </h3>
        <p className="ba-description">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Best Professional Doctors
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Vital Survey
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> AI Chat 
        </p>
        
        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Fix Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;

import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile1.jpg";
import profile2 from "../Assets/profile2.jpg";
import profile3 from "../Assets/profile3.jpg";
import profile4 from "../Assets/profile4.jpg";
import "../Styles/Doctors.css";

import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr.Krishna Kumar"
          title="General Surgeons"
          stars="9.8"
          reviews="12"
        />
        <DoctorCard
          img={profile4}
          name="Dr.Shreya"
          title="Cardiac Surgeon"
          stars="8.9"
          reviews="13"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Joshua Wilson"
          title="Endocrinologists"
          stars="8.9"
          reviews="14"
        />
        <DoctorCard
          img={profile2}
          name="Dr.Anwin Dilip"
          title="Hematologists"
          stars="9.5"
          reviews="15"
        />
      </div>
    </div>
  );
}

export default Doctors;

import React from "react";
import DoctorCard from "./DoctorCard";

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
          //img={profile1}
          name="Dr.Krishna Kumar"
          title="General Surgeons"
          stars="0"
          reviews="0"
        />
        <DoctorCard
          //img={profile2}
          name="Dr.Porvitha Krishna"
          title="Cardiac Surgeon"
          stars="0"
          reviews="0"
        />
        <DoctorCard
          //img={profile3}
          name="Dr. Joshua Wilson"
          title="Endocrinologists"
          stars="0"
          reviews="0"
        />
        <DoctorCard
          //img={profile4}
          name="Dr.Anwin Dilip"
          title="Hematologists"
          stars="0"
          reviews="0"
        />
      </div>
    </div>
  );
}

export default Doctors;

import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Welcome to our revolutionary medical platform designed to provide instant diagnosis and personalized health
        insights in just a minute. 
        Our user-friendly website empowers individuals to input their vital informations and symptoms, 
        enabling rapid assessment and understanding of potential health concerns.
         Whether you're seeking quick guidance or a comprehensive analysis, 
        our platform is here to support your well-being.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="AI CHAT BOT"
          description="Experience seamless healthcare interaction with our cutting-edge AI Chatbot, embedded directly into our medical website.
           This intelligent virtual assistant offers personalized support, guiding users through symptom assessment, treatment queries, and health information retrieval.
           With natural language processing capabilities, it understands user inquiries instantly, providing accurate responses and recommendations. "
          icon={faTruckMedical}
        />

        <InformationCard
          title="Recommending Doctors"
          description="Discover the ideal healthcare provider effortlessly through our integrated Doctor Recommendation feature on our medical website.
           By analyzing user preferences, medical history, and location, our platform suggests specialized physicians who best suit your needs. 
          Seamlessly navigate through profiles, qualifications, and patient reviews to make informed decisions."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Vital Survey"
          description="Easily track and manage your health with our integrated Vitals Survey feature on our medical website. Take control of your well-being by regularly inputting vital signs such as blood pressure, heart rate, and glucose levels. Our intuitive interface guides you through the process, providing personalized insights based on your data."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
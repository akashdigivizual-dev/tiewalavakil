import React from "react";
import "./LegalConsultation.scss";

const LegalConsultation = () => {
  return (
    <section className="legal-section">
      <div className="overlay-gradient" />
      <div className="container">
        <div className="consultation-content">
          <div className="text-area">
            <h1 className="title">
              Book Your <span>Legal Consultation</span>
            </h1>
            <p className="subtitle">
              Get expert legal advice from{" "}
              <strong>Advocate Ajay Shankar Sharma</strong>. Choose your preferred
              consultation method and complete secure payment with confidence.
            </p>
           {/* <button className="book-btn">Book Appointment</button> */}
          </div>

          <div className="image-area">
            <div className="image-wrapper">
              <img
                src="/images/ownerji.png"
                alt="Advocate Ajay Shankar Sharma - Professional Legal Consultant"
                className="advocate-img"
              />
              <div className="floating-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalConsultation;

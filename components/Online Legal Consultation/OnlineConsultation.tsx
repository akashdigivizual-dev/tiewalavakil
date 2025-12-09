import React from "react";
import { Link } from "react-router-dom";
import "./OnlineConsultationSection.scss";

const OnlineConsultationSection = () => {
  return (
    <section className="online-consultation">
      <div className="container">
        <div className="grid">
          {/* Left Text Content */}
          <div className="text-content">
            <h2>Online Legal Consultation</h2>
            <p>
              Connect with Advocate Ajay Shankar Sharma from the comfort of your
              home. Choose phone, video, or WhatsApp consultation.
            </p>

            <Link to="/book consultation" className="book-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Book Your Session
            </Link>
          </div>

          {/* Right Image */}
          <div className="image-content">
            <img src="/images/ownerji.png" alt="Advocate Ajay Shankar Sharma" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineConsultationSection;

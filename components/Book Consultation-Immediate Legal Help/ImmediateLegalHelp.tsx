import React from "react";
import "./ImmediateLegalHelp.scss";

const ImmediateHelp = () => {
  return (
    <section className="immediate-help">
      <div className="container">
        <h2 className="heading">Need Immediate Legal Help?</h2>
        <p className="description">
          Don’t wait! Call us directly for urgent legal matters. Advocate Ajay
          Shankar Sharma is available for immediate consultation.
        </p>

        <div className="button-group">
          <a
            href="tel:7037455191"
            aria-label="Call Tiewalavakil at 7037455191"
            className="btn call-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.1 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now: 7037455191
          </a>

          <a
            href="https://wa.me/917037455191"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Tiewalavakil on WhatsApp"
            className="btn whatsapp-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImmediateHelp;

import React from "react";
import { Link } from "react-router-dom";
import "./CallToAction.scss";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Ready to Get Legal Assistance?</h2>
        <p className="cta-subtitle">
          Contact us today for expert property legal consultation and
          documentation services
        </p>

        <div className="cta-buttons">
          <Link to="/book consultation">
            <button className="btn btn-primary">Book Consultation</button>
          </Link>
          <a href="tel:7037455191">
            <button className="btn btn-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

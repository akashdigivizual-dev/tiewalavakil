import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          Tiewalavakil – Trusted Legal Document Services in Hapur
        </h1>
        {/* <p className="hero-subtitle">
          Tiewalavakil provides reliable, affordable, and professional legal documentation and registration services in Hapur. We specialize in property-related deeds, family documentation, and legal advisory, all tailored to local requirements and legal standards. Our team of experienced legal professionals ensures that your documents are drafted with clarity and registered on time.
        </p> */}

        <div className="hero-buttons">
          <a href="/book-consultant">
            <button className="btn btn-primary">
              Book Free Consultation
            </button>
          </a>
          <a href="tel:7037455191" aria-label="Call Tiewalavakil for immediate legal assistance">
            <button className="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call: 7037455191
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

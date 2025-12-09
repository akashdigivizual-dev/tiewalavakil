import React from "react";
import "./LegalHeritage.scss";

const LegalHeritage = () => {
  return (
    <section className="legal-section">
      <div className="container">
        {/* ---- Section Heading ---- */}
        <div className="section-header">
          <h2>Our Legal Heritage</h2>
          <p>
            Three generations of legal excellence, serving the community with dedication and expertise
          </p>
        </div>

        {/* ---- Family Grid ---- */}
        <div className="family-grid">
          {/* --- Person 1 --- */}
          <div className="member">
            <div className="photo border-red">
              <img
                src="/images/Late Shri Nagendra Dutt Sharma.png"
                alt="Late Shri Nagendra Dutt Sharma - License No. 1 Holder"
              />
            </div>
            <h3>Late Shri Nagendra Dutt Sharma</h3>
            <p className="role">License No. 1 Holder</p>
            <p className="legacy">Founded our legal heritage, establishing the foundation of trust and expertise that continues today.</p>
          </div>

          {/* --- Person 2 --- */}
          <div className="member">
            <div className="photo border-red">
              <img
                src="/images/Late Shri Narottam Dutt Sharma.png"
                alt="Late Shri Narottam Dutt Sharma - Legal Family Heritage"
              />
            </div>
            <h3>Late Shri Narottam Dutt Sharma</h3>
            <p className="role">Second Generation</p>
            <p className="legacy">Continued the family tradition of legal excellence, expanding our expertise in property law and client service.</p>
          </div>

          {/* --- Person 3 --- */}
          <div className="member">
            <div className="photo border-primary">
              <img src="/images/ownerji.png" alt="Advocate Ajay Shankar Sharma" />
            </div>
            <h3>Advocate Ajay Shankar Sharma</h3>
            <p className="role">Current Legal Expert</p>
            <p className="legacy">Leading the third generation with 33+ years of experience, combining traditional expertise with modern digital solutions.</p>
          </div>
        </div>

        {/* ---- Bottom Highlight ----
        <div className="highlight-box">
          <h3>Three Generations of Trust - Serving from Hapur</h3>
          <p>
            The tradition is now carried forward by Advocate Ajay Shankar Sharma
            from Hapur, fulfilling all your property-related legal needs with
            the same dedication and expertise.
          </p>

          <div className="highlight-info">
            <div className="info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon red"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              <span>License No. 1 Legacy</span>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=PQJG%2B28+Hapur%2C+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="info-item link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon primary"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Hapur Office Location</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LegalHeritage;

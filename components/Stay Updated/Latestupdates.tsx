import React from "react";
import "./Latestupdates.scss";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <h2 className="section-title">Stay Updated with Legal Insights</h2>
        <p className="section-subtitle">
          Get the latest updates on property law, legal procedures, and expert advice delivered straight to your inbox.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

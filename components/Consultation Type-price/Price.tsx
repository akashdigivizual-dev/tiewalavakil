import React from "react";
import "./Price.scss";

const ConsultationTypes = [
  {
    title: "Phone Consultation",
    description: "Quick legal advice over phone call",
    duration: "15-30 minutes",
    price: "₹500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    title: "Video Consultation",
    description: "Face-to-face consultation via video call",
    duration: "30-45 minutes",
    price: "₹800",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
      </svg>
    ),
  },
  {
    title: "WhatsApp Consultation",
    description: "Chat-based legal guidance",
    duration: "Ongoing support",
    price: "₹300",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
      </svg>
    ),
  },
  {
    title: "Document Review",
    description: "Comprehensive document analysis",
    duration: "2-3 hours",
    price: "₹1500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
    ),
  },
];

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="clock-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const ConsultationSection = () => {
  return (
    <section className="consultation-section">
      <div className="container">
        <h2 className="section-title">Choose Your Consultation Type</h2>
        <div className="grid-container">
          {ConsultationTypes.map((item, index) => (
            <div className="consultation-card" key={index}>
              <div className="icon-wrapper">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
              <div className="card-info">
                <div className="duration">
                  <ClockIcon />
                  {item.duration}
                </div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;

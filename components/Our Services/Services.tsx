import React from "react";
import "./Services.scss";

const services = [
  {
    title: "Property Registration",
    description:
      "Expert assistance in property registration and documentation with complete transparency.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00a7a7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
        <path d="m16 16 6-6"></path>
        <path d="m8 8 6-6"></path>
        <path d="m9 7 8 8"></path>
        <path d="m21 11-8-8"></path>
      </svg>
    ),
  },
  {
    title: "Legal Documentation",
    description:
      "Drafting and reviewing legal documents for contracts, deeds, and agreements with precision.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00a7a7"
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
  {
    title: "Online Consultation",
    description:
      "Get expert legal advice through phone, video, or WhatsApp consultations from anywhere.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00a7a7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
      </svg>
    ),
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="overlay"></div>
      <div className="container">
        <h2 className="title">Our Services</h2>
        <div className="cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;


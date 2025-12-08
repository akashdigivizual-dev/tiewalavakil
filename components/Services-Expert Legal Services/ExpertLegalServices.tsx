import React from 'react';
import './ExpertLegalServices.scss';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const servicesData: Service[] = [
  {
    title: "Property Document Verification",
    description:
      "We verify ownership, legal title, encumbrance, and past transactions of any property in Hapur to ensure your investment is risk-free.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
  {
    title: "Property Document Drafting",
    description:
      "Custom drafting of property documents like sale agreements, affidavits, and POAs by legal experts familiar with Hapur property laws.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
];

const ExpertLegalServices: React.FC = () => {
  return (
    <section className="expert-legal-services">
      <div className="container">
        <h2 className="section-title">Expert Legal Services</h2>
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertLegalServices;

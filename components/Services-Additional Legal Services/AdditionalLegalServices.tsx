import React from 'react';
import './AdditionalLegalServices.scss';

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    title: "गोदनामा (Adoption Deed)",
    description: "Make your adoption legally valid and recognized with an official deed.",
    features: [
      "Drafting of Adoption Deeds as per Indian adoption laws",
      "Guidance on supporting documents and age conditions",
      "Confidential handling and legal clarity",
      "Suitable for court or legal presentation",
    ],
  },
  {
    title: "ट्रस्ट डीड (Trust Deed)",
    description: "Set up your charitable or private family trust with legal documentation.",
    features: [
      "Drafting of Trust Deeds including trustees, beneficiaries, and objectives",
      "Includes rules for managing funds and property",
      "Legal compliance with trust laws in India",
      "Trust registration and advisory support",
    ],
  },
  {
    title: "कैंसिलेशन (Cancellation Deed)",
    description: "Cancel an already registered deed if it's no longer valid or required.",
    features: [
      "Cancellation of Sale, Gift, or Lease Deeds",
      "Requires mutual consent and legal documentation",
      "Drafting of legal grounds for cancellation",
      "Registration support in the concerned office",
    ],
  },
  {
    title: "करेक्शन डीड (Correction Deed)",
    description: "Fix spelling mistakes or clerical errors in your registered property document.",
    features: [
      "Drafting Correction Deeds for minor changes",
      "Examples: name spelling, area, property number corrections",
      "Affidavit and supporting paperwork",
      "Helps maintain accuracy without legal complications",
    ],
  },
  {
    title: "शादी रजिस्ट्रेशन (Marriage Registration)",
    description: "Make your marriage legally valid with a government-issued certificate.",
    features: [
      "Marriage registration under Hindu/Special Marriage Acts",
      "Affidavit and document preparation",
      "Appointment booking and submission at Marriage Registrar",
      "Certificate delivery with legal acceptance",
    ],
  },
];

const AdditionalLegalServices: React.FC = () => {
  return (
    <section className="additional-legal-services">
      <div className="container">
        <h2 className="section-title">Additional Legal Services</h2>
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="feature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-icon"
                    >
                      <path d="M9 11l3 3L22 4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalLegalServices;

import React, { ReactNode } from "react";
import "./PracticeAreas.scss";

interface PracticeAreaCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

// Example PracticeAreaCard component
const PracticeAreaCard = ({
  icon,
  title,
  description,
}: PracticeAreaCardProps) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PracticeAreasSection = () => {
  return (
    <section className="practice-areas-section h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="section-content max-w-6xl w-full px-6">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Practice Areas</h2>
          <p className="text-gray-700 text-lg">
            We offer a comprehensive range of legal services tailored to your
            needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <PracticeAreaCard
            icon={
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
                className="w-12 h-12 text-primary mb-3"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
              </svg>
            }
            title="Legal Expertise"
            description="Over three generations of legal expertise in property law and consultation."
          />
          <PracticeAreaCard
            icon={
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
                className="w-12 h-12 text-primary mb-3"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            title="Client Focused"
            description="Personalized legal solutions tailored to your unique property needs."
          />
          <PracticeAreaCard
            icon={
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
                className="w-12 h-12 text-primary mb-3"
              >
                <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                <path d="M12 17.5v-11"></path>
              </svg>
            }
            title="Transparent Pricing"
            description="Clear and upfront consultation fees with no hidden charges."
          />
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;

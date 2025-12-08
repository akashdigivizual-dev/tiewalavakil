import React, { useState } from "react";
import "./FAQ.scss";

const faqData = [
  {
    question: "Why is a Sale Deed important?",
    answer:
      "A Sale Deed is crucial as it serves as proof of ownership transfer from seller to buyer.",
  },
  {
    question: "What is Mutation and when is it needed?",
    answer:
      "Mutation is the process of updating land records in the government registry. It is needed when property ownership changes.",
  },
  {
    question: "Can I verify documents before buying property?",
    answer:
      "Yes, verifying property documents is essential to ensure there are no disputes or frauds.",
  },
  {
    question: "Do I need legal advice for property matters?",
    answer:
      "Legal advice is recommended to avoid future complications and ensure smooth transactions.",
  },
  {
    question: "Can I get legal help online from Hapur?",
    answer:
      "Yes, you can get online legal assistance from Hapur through various legal service platforms.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`chevron ${activeIndex === index ? "rotate" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

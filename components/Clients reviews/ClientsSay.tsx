import React, { useEffect, useState } from "react";
import "./ClientsSay.scss";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Satisfied Client",
    feedback:
      "Advocate Ajay Shankar Sharma provided excellent legal advice and helped me resolve my property dispute quickly.",
    stars: 5,
  },
  {
    name: "Neha Gupta",
    role: "Satisfied Client",
    feedback:
      "Professional and knowledgeable. Highly recommend for any legal consultation related to property matters.",
    stars: 5,
  },
  {
    name: "Suresh Kumar",
    role: "Satisfied Client",
    feedback:
      "Very responsive and clear in communication. The consultation was worth every penny.",
    stars: 4,
  },
];

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="star"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="title">What Our Clients Say</h2>

        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">
                  {[...Array(item.stars)].map((_, index) => (
                    <Star key={index} />
                  ))}
                </div>
                <p className="feedback">“{item.feedback}”</p>
                <div className="divider"></div>
                <h4 className="name">{item.name}</h4>
                <p className="role">{item.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`dot ${current === i ? "active" : ""}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

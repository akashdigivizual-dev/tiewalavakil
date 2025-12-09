import React from "react";
import "./StatsSection.scss";

const stats = [
  { value: "75+", label: "Years of Heritage" },
  { value: "33+", label: "Years Experience" },
  { value: "3", label: "Generations Served" },
  { value: "1000+", label: "Happy Clients" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

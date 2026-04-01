import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <h1>Features</h1>
      <div className="features-grid">
        <div className="card">AI Layout Generator</div>
        <div className="card">Instant Design</div>
        <div className="card">Budget Friendly</div>
      </div>
    </section>
  );
};

export default Features;
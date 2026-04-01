import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">

      {/* Heading */}
      <h1>About Advance Solar</h1>
      <p>
        We are committed to providing high-quality solar energy solutions
        for homes and businesses. Our mission is to reduce electricity costs
        and promote clean, renewable energy across India.
      </p>

      {/* Cards */}
      <div className="about-grid">

        <div className="about-card">
          <h3>🌞 Our Mission</h3>
          <p>
            To make solar energy affordable and accessible for every household.
          </p>
        </div>

        <div className="about-card">
          <h3>⚡ Our Vision</h3>
          <p>
            Power the future with sustainable and eco-friendly energy solutions.
          </p>
        </div>

        <div className="about-card">
          <h3>🏆 Our Expertise</h3>
          <p>
            Years of experience in solar installation, maintenance, and support.
          </p>
        </div>

      </div>

      {/* Stats Section */}
      <div className="stats">

        <div className="stat-box">
          <h2>500+</h2>
          <p>Installations</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Customer Satisfaction</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </div>

    </section>
  );
};

export default About;
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>30+ Years of Trusted Solar Excellence ⚡</h1>
          <p>
            Power your home with reliable solar solutions. Save up to 90% on electricity bills and switch to clean energy today.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Free Consultation</button>
            <button className="secondary-btn">View Our Projects</button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="trust-item">✔ 30+ Years Experience</div>
        <div className="trust-item">✔ Govt. Approved Vendor</div>
        <div className="trust-item">✔ 500+ Installations</div>
        <div className="trust-item">✔ 100% Customer Satisfaction</div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Solar Services</h2>
        <p className="section-subtext">
          Complete solar solutions tailored for homes, businesses, and industries.
        </p>

        <div className="service-grid">

          <div className="card">
            <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231" alt="" />
            <h3>Solar Panel Installation</h3>
            <p>High-performance rooftop solar systems designed for maximum efficiency.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1" alt="" />
            <h3>Residential Solutions</h3>
            <p>Affordable solar solutions to reduce your home electricity bills.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634" alt="" />
            <h3>Commercial Projects</h3>
            <p>Scale your business with powerful and cost-saving solar energy.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9" alt="" />
            <h3>Maintenance & Support</h3>
            <p>Reliable long-term service and performance optimization.</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Advance Solar?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>⚡ Proven Expertise</h3>
            <p>Over 30 years of delivering trusted solar solutions.</p>
          </div>

          <div className="why-card">
            <h3>💰 Maximum Savings</h3>
            <p>Cut electricity bills drastically with efficient systems.</p>
          </div>

          <div className="why-card">
            <h3>🏆 Quality Assurance</h3>
            <p>Top-quality products with long-term durability.</p>
          </div>

          <div className="why-card">
            <h3>🤝 Complete Support</h3>
            <p>From consultation to installation & maintenance.</p>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="projects">
        <h2>Our Recent Projects</h2>

        <div className="project-grid">
          <img src="https://images.unsplash.com/photo-1505731131651-2f6f83d1d03b" alt="" />
          <img src="https://images.unsplash.com/photo-1584270354949-1b2c5c4b1a63" alt="" />
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Saving on Electricity Today ⚡</h2>
        <p>Join hundreds of satisfied customers who switched to solar.</p>
        <button>Get Your Free Solar Quote</button>
      </section>

    </div>
  );
};

export default Home;
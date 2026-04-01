// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const statsRef = useRef([]);

  // Stats counter animation
  const stats = [
    { value: 30, suffix: "+", label: "Years Experience", icon: "⚡" },
    { value: 5000, suffix: "+", label: "Installations", icon: "🏠" },
    { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "😊" },
    { value: 45, suffix: "M+", label: "kWh Generated", icon: "🌞" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animate counters when stats section is visible
  useEffect(() => {
    if (isVisible.stats) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = end;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(start);
              return newCounters;
            });
          }
        }, 16);
        
        return () => clearInterval(timer);
      });
    }
  }, [isVisible.stats]);

  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Homeowner",
      content: "My electricity bill dropped from $350 to just $25! The team was professional and installation was seamless. Best decision I ever made!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content: "Advance Solar helped our company save over $40,000 annually. Exceptional service and top-quality products. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Chen",
      role: "Property Developer",
      content: "The installation was flawless and completed ahead of schedule. The savings have been incredible. Thank you Advance Solar!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ];

  const services = [
    {
      icon: "🔧",
      title: "Solar Panel Installation",
      description: "High-performance rooftop solar systems designed for maximum efficiency with premium panels.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      delay: "0.1s"
    },
    {
      icon: "🏠",
      title: "Residential Solutions",
      description: "Affordable solar solutions to reduce your home electricity bills by up to 90%.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      delay: "0.2s"
    },
    {
      icon: "🏭",
      title: "Commercial Projects",
      description: "Scale your business with powerful and cost-saving solar energy systems.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      delay: "0.3s"
    },
    {
      icon: "🛠️",
      title: "Maintenance & Support",
      description: "24/7 reliable long-term service, monitoring, and performance optimization.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      delay: "0.4s"
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800",
      title: "Residential Rooftop System",
      location: "Austin, TX",
      capacity: "12.5 kW",
      savings: "$3,200/year"
    },
    {
      image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=800",
      title: "Commercial Solar Farm",
      location: "San Diego, CA",
      capacity: "250 kW",
      savings: "$45,000/year"
    },
    {
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800",
      title: "Industrial Installation",
      location: "Houston, TX",
      capacity: "1.2 MW",
      savings: "$180,000/year"
    },
    {
      image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=800",
      title: "Community Solar Project",
      location: "Denver, CO",
      capacity: "500 kW",
      savings: "$95,000/year"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <span className="badge-icon">⚡</span>
            <span>30+ Years of Excellence</span>
          </div>
          <h1 className="animate-fade-in-up delay-1">
            Power Your Future with <span className="gradient-text">Clean Solar Energy</span>
          </h1>
          <p className="animate-fade-in-up delay-2">
            Save up to 90% on electricity bills with premium solar solutions. Join 5000+ satisfied customers 
            who switched to sustainable energy and never looked back.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-3">
            <button className="primary-btn" onClick={() => scrollToSection("contact")}>
              Get Free Consultation
              <span className="btn-icon">→</span>
            </button>
            <button className="secondary-btn" onClick={() => scrollToSection("projects")}>
              View Our Projects
            </button>
          </div>
          <div className="hero-stats animate-fade-in-up delay-4">
            <div className="hero-stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection("services")}>
          <span>Scroll</span>
          <div className="scroll-mouse"></div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="trust-container">
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>30+ Years Experience</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Govt. Approved Vendor</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>5000+ Installations</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>100% Satisfaction</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header animate-on-scroll" id="services-header">
            <div className="section-tag">Our Services</div>
            <h2>Complete Solar <span className="gradient-text">Solutions</span></h2>
            <p className="section-subtext">
              Tailored solar systems for homes, businesses, and industries with cutting-edge technology
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card animate-on-scroll" 
                id={`service-${index}`}
                style={{ animationDelay: service.delay }}
              >
                <div className="card-icon" style={{ background: service.gradient }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="card-btn" onClick={() => scrollToSection("contact")}>
                  Learn More
                  <span className="card-btn-icon">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section animate-on-scroll" id="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number-large">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <div className="container">
          <div className="section-header animate-on-scroll" id="why-header">
            <div className="section-tag">Why Choose Us</div>
            <h2>The <span className="gradient-text">Advance Solar</span> Advantage</h2>
            <p className="section-subtext">
              Setting new standards in solar excellence with unmatched expertise
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card animate-on-scroll" id="why-1">
              <div className="why-icon">⚡</div>
              <h3>Proven Expertise</h3>
              <p>Over 30 years of delivering trusted solar solutions with 5000+ successful installations.</p>
            </div>
            <div className="why-card animate-on-scroll" id="why-2">
              <div className="why-icon">💰</div>
              <h3>Maximum Savings</h3>
              <p>Cut electricity bills drastically with efficient systems. Average savings of 70-90%.</p>
            </div>
            <div className="why-card animate-on-scroll" id="why-3">
              <div className="why-icon">🏆</div>
              <h3>Quality Assurance</h3>
              <p>Top-quality products with 25-year performance warranty and lifetime support.</p>
            </div>
            <div className="why-card animate-on-scroll" id="why-4">
              <div className="why-icon">🤝</div>
              <h3>Complete Support</h3>
              <p>From consultation to installation & maintenance. 24/7 customer support available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header animate-on-scroll" id="projects-header">
            <div className="section-tag">Recent Installations</div>
            <h2>Our <span className="gradient-text">Latest Projects</span></h2>
            <p className="section-subtext">
              See how we've transformed properties with clean, renewable energy
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card animate-on-scroll" id={`project-${index}`}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-details">
                      <span className="project-location">{project.location}</span>
                      <span className="project-capacity">{project.capacity}</span>
                      <span className="project-savings">Save {project.savings}</span>
                    </div>
                    <button className="project-btn" onClick={() => scrollToSection("contact")}>
                      Get Quote
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.location} • {project.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header animate-on-scroll" id="testimonials-header">
            <div className="section-tag">Testimonials</div>
            <h2>What Our <span className="gradient-text">Customers Say</span></h2>
            <p className="section-subtext">
              Trusted by thousands of homeowners and businesses across the country
            </p>
          </div>

          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card ${activeTestimonial === index ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-rating">
                  {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`dot ${activeTestimonial === index ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="cta">
        <div className="cta-container">
          <div className="cta-content animate-on-scroll" id="cta-content">
            <div className="cta-icon">⚡</div>
            <h2>Start Saving on Electricity Today</h2>
            <p>Join thousands of satisfied customers who switched to solar and never looked back.</p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={() => window.location.href = "#contact"}>
                Get Your Free Solar Quote
                <span className="cta-arrow">→</span>
              </button>
              <button className="cta-secondary" onClick={() => window.location.href = "tel:+18005551234"}>
                📞 Call Us Now
              </button>
            </div>
            <div className="cta-features">
              <span>✓ Zero Upfront Cost</span>
              <span>✓ 25-Year Warranty</span>
              <span>✓ Free Installation</span>
              <span>✓ Lifetime Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
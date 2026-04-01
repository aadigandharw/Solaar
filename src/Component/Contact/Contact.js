// Contact.jsx
import React, { useState } from "react";
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SendOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
  ThunderboltOutlined
} from "@ant-design/icons";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined />,
      title: "Phone Number",
      details: ["+1 (800) 555-1234", "+1 (800) 555-5678"],
      link: "tel:+18005551234",
      color: "#ffb703"
    },
    {
      icon: <MailOutlined />,
      title: "Email Address",
      details: ["info@advancesolar.com", "support@advancesolar.com"],
      link: "mailto:info@advancesolar.com",
      color: "#4facfe"
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Office Location",
      details: ["123 Solar Way, Austin,", "Texas 78701, United States"],
      link: "https://maps.google.com",
      color: "#fa709a"
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Closed"],
      color: "#52c41a"
    }
  ];

  const socialLinks = [
    { icon: <FacebookOutlined />, link: "https://facebook.com", color: "#1877f2" },
    { icon: <TwitterOutlined />, link: "https://twitter.com", color: "#1da1f2" },
    { icon: <InstagramOutlined />, link: "https://instagram.com", color: "#e4405f" },
    { icon: <LinkedinOutlined />, link: "https://linkedin.com", color: "#0077b5" }
  ];

  const faqs = [
    { q: "How long does installation take?", a: "Typically 1-3 days depending on system size." },
    { q: "Do you offer financing options?", a: "Yes, we offer 0% financing and flexible payment plans." },
    { q: "What warranty do you provide?", a: "25-year performance warranty on all panels." },
    { q: "Do you service all areas?", a: "We serve the entire state with free site assessments." }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="hero-badge " style={{marginTop:"30px"}}>
            <ThunderboltOutlined />
            <span>Get In Touch</span>
          </div>
          <h1>Let's Power Your <span className="gradient-text">Solar Journey</span></h1>
          <p>
            Have questions about solar installation? Ready to start saving? 
            Our solar experts are here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="info-icon" style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)` }}>
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
                {info.link && (
                  <a href={info.link} className="info-link">
                    Contact Now →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            {/* <div className="contact-form-container">
              <div className="form-header">
                <div className="form-tag">Send a Message</div>
                <h2>Schedule Your <span className="gradient-text">Free Consultation</span></h2>
                <p>Fill out the form below and our solar experts will get back to you within 24 hours.</p>
              </div>

              {isSubmitted && (
                <div className="success-message">
                  <CheckCircleOutlined />
                  <span>Thank you! We'll contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your solar needs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <SendOutlined />
                    </>
                  )}
                </button>

                <p className="form-note">
                  By submitting, you agree to our <a href="#">Privacy Policy</a> and consent to be contacted.
                </p>
              </form>
            </div> */}

            {/* Map & Info */}
            <div className="map-container">
              {/* <div className="map-card">
                <div className="map-header">
                  <h3>Find Us Here</h3>
                  <p>Visit our headquarters or schedule a site visit</p>
                </div>
                <div className="map-wrapper">
                  <iframe
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.888888888888!2d-97.74306078458034!3d30.26715398180791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5998c6c5d5d%3A0x8e8d8e8d8e8d8e8d!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="map-details">
                  <div className="map-address">
                    <EnvironmentOutlined />
                    <span>123 Solar Way, Austin, TX 78701, United States</span>
                  </div>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{ background: social.color }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="stat-item">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Customer Support</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">30+</div>
                  <div className="stat-label">Years Experience</div>
                <div className="stat-item">
                  <div className="stat-value">5000+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">98%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <div className="faq-tag">FAQ</div>
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Find quick answers to common questions about our solar services</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <div className="cta-text">
            <h3>Ready to Switch to Solar?</h3>
            <p>Get a free quote and see how much you can save today!</p>
          </div>
          <button className="cta-banner-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Get Free Quote <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
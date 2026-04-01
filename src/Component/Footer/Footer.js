// Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  YoutubeOutlined,
  ThunderboltOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import { Button, Input, message, Space, Divider } from "antd";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      message.warning("Please enter your email address");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email address");
      return;
    }
    
    setSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      message.success("Thanks for subscribing! We'll keep you updated with solar tips and offers.");
      setEmail("");
      setSubscribing(false);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/product", label: "Products" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
  ];

  const services = [
    { name: "Solar Panel Installation", path: "/services/installation" },
    { name: "Residential Solar", path: "/services/residential" },
    { name: "Commercial Solar", path: "/services/commercial" },
    { name: "Industrial Solutions", path: "/services/industrial" },
    { name: "Maintenance & Support", path: "/services/maintenance" },
    { name: "Battery Storage", path: "/services/battery" },
  ];

  const contactInfo = [
    { icon: <PhoneOutlined />, text: "+1 (800) 555-SOLAR", href: "tel:+18005551234" },
    { icon: <MailOutlined />, text: "info@advancesolar.com", href: "mailto:info@advancesolar.com" },
    { icon: <EnvironmentOutlined />, text: "123 Solar Way, Austin, TX 78701", href: "#" },
  ];

  const socialLinks = [
    { icon: <FacebookOutlined />, href: "https://facebook.com", color: "#1877f2", label: "Facebook" },
    { icon: <TwitterOutlined />, href: "https://twitter.com", color: "#1da1f2", label: "Twitter" },
    { icon: <InstagramOutlined />, href: "https://instagram.com", color: "#e4405f", label: "Instagram" },
    { icon: <LinkedinOutlined />, href: "https://linkedin.com", color: "#0077b5", label: "LinkedIn" },
    { icon: <YoutubeOutlined />, href: "https://youtube.com", color: "#ff0000", label: "YouTube" },
  ];

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <MailOutlined />
            </div>
            <div className="newsletter-text">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest solar updates, tips, and exclusive offers straight to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <Input 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onPressEnter={handleSubscribe}
                size="large"
                prefix={<MailOutlined style={{ color: "#ffb703" }} />}
                className="newsletter-input"
              />
              <Button 
                type="primary" 
                size="large" 
                onClick={handleSubscribe}
                loading={subscribing}
                className="newsletter-btn"
                icon={<ArrowRightOutlined />}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Company Info Section */}
          <div className="footer-section company-section">
            <div className="footer-logo">
              <ThunderboltOutlined className="logo-icon" />
              <span>Urja Solar</span>
            </div>
            <p className="company-description">
              Powering homes and businesses with clean, affordable solar energy. 
              Trusted for 30+ years with 5000+ successful installations.
            </p>
            <div className="company-badges">
              <span className="badge"><CheckCircleOutlined /> Govt. Approved</span>
              <span className="badge"><CheckCircleOutlined /> 30+ Years</span>
              <span className="badge"><CheckCircleOutlined /> 24/7 Support</span>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  style={{ '--hover-color': social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <ArrowRightOutlined className="link-icon" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="footer-link">
                    <ArrowRightOutlined className="link-icon" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">Get In Touch</h3>
            <ul className="contact-list">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a href={contact.href} className="contact-link">
                    <span className="contact-icon">{contact.icon}</span>
                    <span className="contact-text">{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="business-hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p className="copyright">
            © {currentYear} Advance Solar. All Rights Reserved. 
            <span className="separator">|</span>
            <Link to="/privacy" className="bottom-link">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms" className="bottom-link">Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/sitemap" className="bottom-link">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
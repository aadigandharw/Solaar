import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={handleClick}>
            ⚡ <span>Advance Solar</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          
          <Link to="/" onClick={handleClick}
            className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>

          <Link to="/about" onClick={handleClick}
            className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>

          <Link to="/services" onClick={handleClick}
            className={location.pathname === "/services" ? "active" : ""}>
            Services
          </Link>

          <Link to="/projects" onClick={handleClick}
            className={location.pathname === "/projects" ? "active" : ""}>
            Projects
          </Link>

          <Link to="/contact" onClick={handleClick}
            className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>

          <button className="cta-btn">Get Quote</button>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Header;
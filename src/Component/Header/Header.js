// Header.jsx
import React, { useState, useEffect } from "react";
import { Layout, Drawer, Button, Badge, Tooltip, Dropdown, Space } from "antd";
import { 
  MenuOutlined, 
  CloseOutlined, 
  ThunderboltOutlined, 
  PhoneOutlined,
  DownOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  MailOutlined,
  SunOutlined
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const { Header } = Layout;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links with icons
  const links = [
    { path: "/", label: "Home", icon: <HomeOutlined /> },
    { path: "/about", label: "About", icon: <InfoCircleOutlined /> },
    { path: "/service", label: "Services", icon: <AppstoreOutlined /> },
    { path: "/product", label: "Products", icon: <ShoppingOutlined /> },
    { path: "/contact", label: "Contact", icon: <MailOutlined /> },
  ];

  // Services dropdown menu items
  const serviceItems = [
    { key: "residential", label: "Residential Solar", path: "/services/residential" },
    { key: "commercial", label: "Commercial Solar", path: "/services/commercial" },
    { key: "industrial", label: "Industrial Solutions", path: "/services/industrial" },
    { key: "maintenance", label: "Maintenance & Support", path: "/services/maintenance" },
  ];

  // Handle navigation close
  const handleNavClick = () => {
    setOpen(false);
  };

  // Handle quote button click
  const handleGetQuote = () => {
    // You can integrate with your quote modal or navigation
    console.log("Get Quote clicked");
    // Example: open consultation modal or navigate
  };

  return (
    <>
      <Header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Logo */}
        <Link to="/" className="logo">
          <SunOutlined className="logo-icon" />
          <span>Urja Solar </span>
          {/* <Badge count="30+" className="logo-badge" size="small" /> */}
        </Link>

        {/* Desktop Navigation */}
        <div  className="nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? "active" : ""}`}
            >
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-label">{link.label}</span>
            </Link>
          ))}
          
          {/* Services Dropdown */}
          {/* <Dropdown
            menu={{
              items: serviceItems.map(item => ({
                key: item.key,
                label: <Link to={item.path} className="dropdown-link">{item.label}</Link>,
              })),
            }}
            className="services-dropdown"
            overlayClassName="dropdown-menu"
          >
            <a className="nav-item dropdown-trigger" onClick={(e) => e.preventDefault()}>
              <span className="nav-icon"><AppstoreOutlined /></span>
              <span className="nav-label">Services</span>
              <DownOutlined className="dropdown-icon" />
            </a>
          </Dropdown> */}
        </div>

        {/* Right Section */}
        <div className="nav-right">
          {/* Contact Info (Desktop) */}
          {/* <div className="contact-info">
            <Tooltip title="24/7 Support">
              <PhoneOutlined className="contact-icon" />
            </Tooltip>
            <span className="contact-number">+1 (800) 555-SOLAR</span>
          </div> */}
          
          {/* CTA Button */}
          <Button 
            className="cta-btn" 
            onClick={handleGetQuote}
            icon={<ThunderboltOutlined />}
          >
            Get Free Quote
          </Button>

          {/* Mobile Menu Icon */}
          <MenuOutlined
            className="menu-icon"
            onClick={() => setOpen(true)}
          />
        </div>
      </Header>

       {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="drawer-title">
            <SunOutlined className="drawer-logo-icon" />
            <span>Advance Solar</span>
          </div>
        }
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        closeIcon={<CloseOutlined className="drawer-close-icon" />}
        width={280}
        className="mobile-drawer"
      > 
        <div className="drawer-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`drawer-link ${location.pathname === link.path ? "drawer-active" : ""}`}
              onClick={handleNavClick}
            >
              <span className="drawer-link-icon">{link.icon}</span>
              <span className="drawer-link-label">{link.label}</span>
            </Link>
          ))}
          
          {/* Services Submenu in Drawer */}
          <div className="drawer-submenu">
            <div className="drawer-submenu-title">
              <AppstoreOutlined /> Services
            </div>
            <div className="drawer-submenu-items">
              {serviceItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="drawer-submenu-link"
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Contact Info in Drawer */}
          <div className="drawer-contact">
            <div className="drawer-contact-item">
              <PhoneOutlined />
              <span>+1 (800) 555-1234</span>
            </div>
            <div className="drawer-contact-item">
              <MailOutlined />
              <span>info@advancesolar.com</span>
            </div>
          </div>
          
          {/* Mobile CTA Button */}
          <Button 
            className="drawer-cta-btn" 
            onClick={() => {
              handleGetQuote();
              setOpen(false);
            }}
            icon={<ThunderboltOutlined />}
            block
          >
            Get Free Quote
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
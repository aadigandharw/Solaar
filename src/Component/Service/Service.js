// Services.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  ThunderboltOutlined,
  HomeOutlined,
  ApartmentOutlined,
  ToolOutlined,
  CarOutlined,
  SafetyOutlined,
  DollarOutlined,
  CalendarOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
  StarOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
  CloudOutlined,
  LineChartOutlined
} from "@ant-design/icons";
import "./Service.css";

const Services = () => {
  const [activeTab, setActiveTab] = useState("residential");
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Service Categories
  const serviceCategories = [
    { id: "residential", label: "Residential", icon: <HomeOutlined /> },
    { id: "commercial", label: "Commercial", icon: <ApartmentOutlined /> },
    { id: "industrial", label: "Industrial", icon: <SettingOutlined /> },
    { id: "maintenance", label: "Maintenance", icon: <ToolOutlined /> }
  ];

  // Detailed Services Data
  const servicesData = {
    residential: {
      title: "Residential Solar Solutions",
      subtitle: "Power Your Home with Clean Energy",
      description: "Transform your home into a sustainable power station. Our residential solar solutions are designed to maximize energy savings while minimizing environmental impact.",
      services: [
        {
          id: 1,
          title: "Rooftop Solar Panel Installation",
          icon: <ThunderboltOutlined />,
          description: "High-efficiency solar panels installed on your rooftop, designed to capture maximum sunlight and reduce electricity bills by up to 90%.",
          features: [
            "Premium 550W Monocrystalline Panels",
            "Smart Inverter Technology",
            "25-Year Performance Warranty",
            "Real-time Monitoring App"
          ],
          savings: "Save ₹45,000-₹60,000/year",
          duration: "2-3 Days Installation",
          image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600"
        },
        {
          id: 2,
          title: "Solar Battery Storage",
          icon: <SafetyOutlined />,
          description: "Store excess solar energy for night use or power outages. Our lithium-ion batteries ensure reliable backup power when you need it most.",
          features: [
            "Lithium-ion Technology",
            "10-Year Warranty",
            "Smart Energy Management",
            "Scalable Capacity (5kWh-20kWh)"
          ],
          savings: "100% Backup Protection",
          duration: "1 Day Installation",
          image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600"
        },
        {
          id: 3,
          title: "Solar Water Heaters",
          icon: <ClockCircleOutlined />,
          description: "Eco-friendly solar water heating systems that provide hot water year-round while cutting electricity costs.",
          features: [
            "Energy Efficient Design",
            "All-Weather Performance",
            "5-Year Warranty",
            "Saves 1,500 Units/Year"
          ],
          savings: "Save ₹12,000-₹15,000/year",
          duration: "1 Day Installation",
          image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600"
        }
      ]
    },
    commercial: {
      title: "Commercial Solar Solutions",
      subtitle: "Reduce Operational Costs for Your Business",
      description: "Cut your business electricity costs by up to 70% with our commercial solar solutions. Perfect for offices, retail stores, hotels, and more.",
      services: [
        {
          id: 1,
          title: "Rooftop Commercial Solar",
          icon: <ApartmentOutlined />,
          description: "Large-scale rooftop solar installations designed for commercial buildings, maximizing ROI through net metering and government incentives.",
          features: [
            "Custom System Sizing (10kW-500kW)",
            "Accelerated Depreciation Benefits",
            "Net Metering Integration",
            "ROI Within 3-4 Years"
          ],
          savings: "Save ₹2-5 Lakhs/year",
          duration: "5-7 Days Installation",
          image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600"
        },
        {
          id: 2,
          title: "Solar Carport Systems",
          icon: <CarOutlined />,
          description: "Dual-purpose structures that provide parking shade while generating clean electricity for your business.",
          features: [
            "Durable Steel Structure",
            "EV Charging Ready",
            "Maximum Space Utilization",
            "Aesthetic Design"
          ],
          savings: "Save ₹3-6 Lakhs/year",
          duration: "7-10 Days Installation",
          image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600"
        },
        {
          id: 3,
          title: "Solar Hybrid Systems",
          icon: <CloudOutlined />,
          description: "Combine solar with diesel generator or grid power for uninterrupted operations and maximum savings.",
          features: [
            "Automatic Switchover",
            "Diesel Reduction Up to 80%",
            "Grid-Solar Hybrid",
            "Smart Load Management"
          ],
          savings: "Save ₹4-8 Lakhs/year",
          duration: "5 Days Installation",
          image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=600"
        }
      ]
    },
    industrial: {
      title: "Industrial Solar Solutions",
      subtitle: "Power Your Manufacturing with Solar",
      description: "Large-scale solar solutions for factories, warehouses, and manufacturing units. Reduce carbon footprint while significantly cutting operational costs.",
      services: [
        {
          id: 1,
          title: "Ground-Mounted Solar Farms",
          icon: <LineChartOutlined />,
          description: "Large-scale ground-mounted solar installations for industrial facilities with available land, offering maximum energy generation.",
          features: [
            "1MW-10MW+ Capacity",
            "Tracker Systems Available",
            "PPA/BOOT Models",
            "Carbon Credits Eligible"
          ],
          savings: "Save ₹15-50 Lakhs/year",
          duration: "15-30 Days Installation",
          image: "https://images.unsplash.com/photo-1508514177221-1889b5cf9f6d?w=600"
        },
        {
          id: 2,
          title: "Open Access Solar",
          icon: <GlobalOutlined />,
          description: "Generate solar power at remote locations and transfer energy to your industrial facility through the grid.",
          features: [
            "No Land Required",
            "Wheeling Charges Applicable",
            "Long-term PPA",
            "Hassle-free Setup"
          ],
          savings: "Save ₹20-60 Lakhs/year",
          duration: "3-4 Months Setup",
          image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600"
        },
        {
          id: 3,
          title: "Solar + Storage Solutions",
          icon: <SafetyOutlined />,
          description: "Complete energy independence with solar plus battery storage for critical industrial operations.",
          features: [
            "BESS Integration (MWh Scale)",
            "Black Start Capability",
            "Peak Load Shaving",
            "Grid Independence"
          ],
          savings: "Save ₹25-75 Lakhs/year",
          duration: "20-40 Days Installation",
          image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600"
        }
      ]
    },
    maintenance: {
      title: "Solar Maintenance & Support",
      subtitle: "Keep Your System Running at Peak Performance",
      description: "Comprehensive maintenance plans to ensure your solar investment delivers maximum returns for years to come.",
      services: [
        {
          id: 1,
          title: "Annual Maintenance Contract (AMC)",
          icon: <ToolOutlined />,
          description: "Regular preventive maintenance to ensure optimal system performance and longevity.",
          features: [
            "Quarterly Site Visits",
            "Panel Cleaning & Inspection",
            "Performance Reporting",
            "Priority Support"
          ],
          savings: "Maximize ROI",
          duration: "Annual Contract",
          image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600"
        },
        {
          id: 2,
          title: "Remote Monitoring & Diagnostics",
          icon: <LineChartOutlined />,
          description: "24/7 real-time monitoring with instant alerts and proactive issue resolution.",
          features: [
            "Real-time Performance Dashboard",
            "Instant Fault Detection",
            "Energy Generation Analytics",
            "Mobile App Access"
          ],
          savings: "Early Problem Detection",
          duration: "Continuous Monitoring",
          image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600"
        },
        {
          id: 3,
          title: "Emergency Repair Services",
          icon: <CustomerServiceOutlined />,
          description: "Rapid response team for urgent repairs to minimize downtime and revenue loss.",
          features: [
            "24/7 Emergency Support",
            "2-Hour Response Time",
            "Genuine Spare Parts",
            "Temporary Solutions"
          ],
          savings: "Minimize Downtime",
          duration: "Same Day Service",
          image: "https://images.unsplash.com/photo-1581090700227-1e8c1b62c2b1?w=600"
        }
      ]
    }
  };

  const currentServices = servicesData[activeTab];

  const benefits = [
    { icon: <DollarOutlined />, title: "Up to 90% Savings", desc: "Reduce electricity bills dramatically" },
    { icon: <SafetyOutlined />, title: "25-Year Warranty", desc: "Long-term peace of mind" },
    { icon: <TeamOutlined />, title: "Expert Installation", desc: "Certified professionals" },
    { icon: <CalendarOutlined />, title: "Quick Installation", desc: "Minimal disruption" },
    { icon: <CustomerServiceOutlined />, title: "24/7 Support", desc: "Round-the-clock assistance" },
    { icon: <CheckCircleOutlined />, title: "Govt. Approved", desc: "MNRE certified installer" }
  ];

  const faqs = [
    { q: "How much can I save with solar panels?", a: "Depending on your location and system size, you can save 70-90% on electricity bills, with typical payback period of 3-5 years." },
    { q: "What is the installation time?", a: "Residential systems take 2-3 days, commercial systems 5-7 days, and industrial systems 2-4 weeks depending on scale." },
    { q: "Do you provide financing options?", a: "Yes! We offer 0% EMI options, bank financing assistance, and PPA models with no upfront cost." },
    { q: "What warranty do you offer?", a: "25-year performance warranty on solar panels, 10-year warranty on inverters, and 5-year workmanship warranty." }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <div className="hero-badge animate-fade-in">
            <span>⚡ Comprehensive Solar Solutions</span>
          </div>
          <h1 className="animate-fade-in-up">
            Complete <span className="gradient-text">Solar Services</span> for Every Need
          </h1>
          <p className="animate-fade-in-up delay-1">
            From residential rooftops to industrial solar farms, we provide end-to-end solar solutions 
            designed to maximize your savings and minimize your carbon footprint.
          </p>
          <div className="hero-stats animate-fade-in-up delay-2">
            <div className="stat">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">45M+</div>
              <div className="stat-label">kWh Generated</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section animate-on-scroll" id="benefits">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why Choose Us</div>
            <h2>The <span className="gradient-text">Advance Solar</span> Advantage</h2>
            <p>Experience the best in solar technology with unmatched benefits</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="services-tabs-section">
        <div className="container">
          <div className="tabs-container">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`tab-btn ${activeTab === category.id ? "active" : ""}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-label">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="services-display">
        <div className="container">
          <div className="services-header">
            <h2>{currentServices.title}</h2>
            <p>{currentServices.subtitle}</p>
            <p className="services-description">{currentServices.description}</p>
          </div>

          <div className="services-grid">
            {currentServices.services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card animate-on-scroll"
                id={`service-${service.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(service)}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="service-icon-wrapper">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="feature-tag">
                        <CheckCircleOutlined />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="service-meta">
                    <div className="meta-item">
                      <DollarOutlined />
                      <span>{service.savings}</span>
                    </div>
                    <div className="meta-item">
                      <ClockCircleOutlined />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <button className="service-cta" onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/contact";
                  }}>
                    Get Quote <ArrowRightOutlined />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Process</div>
            <h2>Simple <span className="gradient-text">4-Step</span> Process</h2>
            <p>Getting solar has never been easier</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon"><CustomerServiceOutlined /></div>
              <h3>Free Consultation</h3>
              <p>Talk to our experts about your energy needs</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon"><EnvironmentOutlined /></div>
              <h3>Site Survey</h3>
              <p>We assess your location for optimal placement</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon"><SettingOutlined /></div>
              <h3>Installation</h3>
              <p>Professional installation by certified technicians</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon"><StarOutlined /></div>
              <h3>Commissioning</h3>
              <p>System testing, grid connection, and go-live</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">FAQ</div>
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Got questions? We've got answers</p>
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

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-icon">☀️</div>
            <h2>Ready to Switch to Solar?</h2>
            <p>Get a free consultation and see how much you can save</p>
            <button className="cta-button" onClick={() => window.location.href = "/contact"}>
              Get Free Quote <ArrowRightOutlined />
            </button>
            <div className="cta-features">
              <span>✓ No Obligation</span>
              <span>✓ Free Site Survey</span>
              <span>✓ 25-Year Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="service-modal" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>×</button>
            <div className="modal-image">
              <img src={selectedService.image} alt={selectedService.title} />
            </div>
            <div className="modal-body">
              <h2>{selectedService.title}</h2>
              <p className="modal-description">{selectedService.description}</p>
              <div className="modal-features">
                <h3>Key Features:</h3>
                <ul>
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircleOutlined />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-meta">
                <div className="modal-meta-item">
                  <DollarOutlined />
                  <div>
                    <strong>Estimated Savings</strong>
                    <p>{selectedService.savings}</p>
                  </div>
                </div>
                <div className="modal-meta-item">
                  <ClockCircleOutlined />
                  <div>
                    <strong>Installation Time</strong>
                    <p>{selectedService.duration}</p>
                  </div>
                </div>
              </div>
              <button className="modal-cta" onClick={() => {
                setSelectedService(null);
                window.location.href = "/contact";
              }}>
                Get Quote for This Service <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
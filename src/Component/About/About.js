// About.jsx (Fixed)
import React, { useEffect, useRef, useState } from "react";
import { 
  RocketOutlined, 
  EyeOutlined, 
  TrophyOutlined, 
  TeamOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
  HeartOutlined,
  StarOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  LeftOutlined,
  RightOutlined
} from "@ant-design/icons";
import "./About.css";

const About = () => {
  const [counters, setCounters] = useState({
    installations: 0,
    years: 0,
    satisfaction: 0,
    customers: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { id: "installations", value: 5000, suffix: "+", label: "Installations Completed", icon: "🔧" },
    { id: "years", value: 30, suffix: "+", label: "Years Experience", icon: "📅" },
    { id: "satisfaction", value: 98, suffix: "%", label: "Customer Satisfaction", icon: "😊" },
    { id: "customers", value: 4500, suffix: "+", label: "Happy Customers", icon: "👥" }
  ];

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const stepTime = 16;
      
      stats.forEach((stat) => {
        const targetValue = stat.value;
        const steps = duration / stepTime;
        const increment = targetValue / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setCounters(prev => ({ ...prev, [stat.id]: targetValue }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [stat.id]: Math.floor(current) }));
          }
        }, stepTime);
        
        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  const coreValues = [
    { icon: <ThunderboltOutlined />, title: "Innovation", desc: "Pioneering solar technology for maximum efficiency" },
    { icon: <SafetyOutlined />, title: "Quality", desc: "Premium materials with 25-year warranty" },
    { icon: <HeartOutlined />, title: "Integrity", desc: "Honest consultations with no hidden costs" },
    { icon: <CustomerServiceOutlined />, title: "Customer First", desc: "24/7 support and lifetime service" },
    { icon: <GlobalOutlined />, title: "Sustainability", desc: "Committed to a greener planet" },
    { icon: <TeamOutlined />, title: "Excellence", desc: "Certified experts with years of training" }
  ];

  const milestones = [
    { year: "1994", title: "Company Founded", desc: "Started with a vision to make solar energy accessible" },
    { year: "2005", title: "First Major Project", desc: "Completed 1MW commercial solar installation" },
    { year: "2015", title: "5000+ Installations", desc: "Reached milestone of 5000 happy customers" },
    { year: "2024", title: "Innovation Hub", desc: "Launched R&D center for advanced solar tech" }
  ];

  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      quote: "Making solar energy accessible to every home is my life's mission."
    },
    {
      name: "Priya Patel",
      role: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      quote: "Innovation drives everything we do. We're constantly pushing boundaries."
    },
    {
      name: "Amit Kumar",
      role: "Head of Operations",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      quote: "Quality execution and customer satisfaction are our top priorities."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="hero-badge" style={{marginTop:"50px"}}>
            <span>⚡ 30+ Years of Excellence</span>
          </div>
          <h1>Powering India's <span className="gradient-text">Solar Revolution</span></h1>
          <p>
            With over 30 years of expertise and 5000+ successful installations, 
            we're committed to making clean, affordable solar energy accessible 
            to every home and business across the nation.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Installations</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="section-tag">Our Story</div>
              <h2>From Humble Beginnings to <span className="gradient-text">Solar Leadership</span></h2>
              <p className="story-text">
                Founded in 1994 with a small team of passionate engineers, Advance Solar began 
                with a simple mission: to harness the abundant power of the sun and make it 
                accessible to every Indian household. What started as a dream in a small garage 
                has now grown into one of India's most trusted solar solution providers.
              </p>
              <p className="story-text">
                Over the past three decades, we've completed over 5,000 installations, from 
                small residential rooftops to massive industrial solar farms. Our commitment 
                to quality, innovation, and customer satisfaction has earned us the trust of 
                thousands of families and businesses across the country.
              </p>
              <div className="story-features">
                <div className="feature-item">
                  <CheckCircleOutlined />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="feature-item">
                  <CheckCircleOutlined />
                  <span>MNRE Approved Installer</span>
                </div>
                <div className="feature-item">
                  <CheckCircleOutlined />
                  <span>25-Year Performance Warranty</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-1889b5cf9f6d?w=600" 
                  alt="Solar Installation"
                />
                <div className="image-badge">
                  <CalendarOutlined />
                  <span>Since 1994</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Expertise Cards */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="card-icon mission-icon">
                <RocketOutlined />
              </div>
              <h3>Our Mission</h3>
              <p>
                To democratize solar energy by providing affordable, high-quality solar 
                solutions that reduce electricity costs and promote environmental sustainability 
                for every Indian household and business.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon vision-icon">
                <EyeOutlined />
              </div>
              <h3>Our Vision</h3>
              <p>
                To lead India's transition to renewable energy, creating a sustainable future 
                where clean, affordable solar power is accessible to all, reducing carbon 
                emissions and energy poverty.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon expertise-icon">
                <TrophyOutlined />
              </div>
              <h3>Our Expertise</h3>
              <p>
                With 30+ years of specialized experience, our certified engineers deliver 
                cutting-edge solar solutions, from design and installation to maintenance 
                and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Core Values</div>
            <h2>What Drives <span className="gradient-text">Our Excellence</span></h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-card">
            <div className="founder-image">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Founder"
              />
              <div className="founder-quote-icon">
                <LeftOutlined />
              </div>
            </div>
            <div className="founder-content">
              <div className="section-tag">Founder's Message</div>
              <h2>Rajesh Sharma</h2>
              <p className="founder-title">Founder & CEO, Advance Solar</p>
              <p className="founder-message">
                "When I started Advance Solar over 30 years ago, solar energy was considered 
                a luxury. Today, I'm proud to say we've helped thousands of families take 
                control of their energy bills while contributing to a cleaner planet. 
                Our journey has been driven by one belief: quality solar solutions should 
                be accessible to everyone. As we look to the future, we remain committed 
                to innovation, excellence, and making a positive impact on our environment."
              </p>
              <div className="founder-signature">Rajesh Sharma</div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="milestones-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Journey</div>
            <h2>Key <span className="gradient-text">Milestones</span></h2>
            <p>Celebrating three decades of solar excellence</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Leadership Team</div>
            <h2>Meet Our <span className="gradient-text">Experts</span></h2>
            <p>The passionate minds behind our success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <StarOutlined />
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-quote">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Counter */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number-large">
                  {counters[stat.id] || 0}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h3>Ready to Start Your Solar Journey?</h3>
            <p>Join thousands of satisfied customers who switched to clean, affordable solar energy.</p>
            <button className="cta-button" onClick={() => window.location.href = "/contact"}>
              Get Free Consultation <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
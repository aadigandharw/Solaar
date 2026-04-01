import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">

      {/* Heading */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Advance Solar</h1>
        <p>
          We provide high-quality solar solutions for homes & businesses.
          Our goal hai electricity cost kam karna aur clean energy promote karna.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="about-grid">

        {[ 
          { title: "🌞 Our Mission", text: "Solar energy ko har ghar tak affordable banana." },
          { title: "⚡ Our Vision", text: "Eco-friendly future build karna with sustainable power." },
          { title: "🏆 Our Expertise", text: "Installation, maintenance aur support me strong experience." }
        ].map((item, index) => (

          <motion.div
            key={index}
            className="about-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>

        ))}

      </div>

      {/* Stats */}
      <div className="stats">

        {[ 
          { num: "500+", text: "Installations" },
          { num: "10+", text: "Years Experience" },
          { num: "100%", text: "Customer Satisfaction" },
          { num: "24/7", text: "Support" }
        ].map((item, index) => (

          <motion.div
            key={index}
            className="stat-box"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <h2>{item.num}</h2>
            <p>{item.text}</p>
          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default About;
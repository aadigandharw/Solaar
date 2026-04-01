import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
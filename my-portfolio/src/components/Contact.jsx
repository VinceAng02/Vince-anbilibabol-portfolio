import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:vincentangelo092@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      formData.message
    )} (%0D%0AFrom: ${encodeURIComponent(formData.email)})`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <span className="section-subtitle">Get In Touch</span>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">vincentangelo092@gmail.com</span>
              <a href="mailto:vincentangelo092@gmail.com" className="contact-button">
                Write me →
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3 className="contact-card-title">GitHub</h3>
              <span className="contact-card-data">@VinceAng02</span>
              <a
                href="https://github.com/VinceAng02"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                Visit profile →
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-div">
              <label className="form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Insert your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-div">
              <label className="form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Insert your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-div form-area">
              <label className="form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="6"
                className="form-input"
                placeholder="Write your project details or message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

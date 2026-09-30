import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">My Introduction</span>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I’m Vincent, a passionate Full-Stack Developer dedicated to
              building functional, visually clean, and user-friendly web
              applications. I enjoy solving complex problems through clean code
              and modern design patterns.
            </p>

            <div className="about-info">
              <div className="info-box">
                <span className="info-title">01+</span>
                <span className="info-name">
                  Years
                  <br />
                  Experience
                </span>
              </div>
              <div className="info-box">
                <span className="info-title">05+</span>
                <span className="info-name">
                  Completed
                  <br />
                  Projects
                </span>
              </div>
              <div className="info-box">
                <span className="info-title">24/7</span>
                <span className="info-name">
                  Support &<br />
                  Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

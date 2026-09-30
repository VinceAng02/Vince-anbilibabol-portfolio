import React from "react";
import "./Home.css";
import profilePic from "../assets/image.png";

export default function Home({ setActiveSection }) {
  const scrollToContact = () => {
    setActiveSection("contact");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Hi,
            <br />
            I’m <span className="highlight">Vincent</span>
            <br />
            Full-Stack Developer
          </h1>
          <button className="btn-primary" onClick={scrollToContact}>
            Contact
          </button>

          <div className="social-links">
            <a
              href="https://github.com/VinceAng02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              git
            </a>
          </div>
        </div>

        <div className="home-visual">
          <div className="blob-container floating">
            <svg
              className="blob-bg"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#2563eb"
                d="M44.7,-76.4C58.8,-69.3,71.8,-59.1,81.1,-45.8C90.4,-32.5,96,-16.3,95.3,-0.4C94.5,15.6,87.4,31.2,77.5,44.1C67.5,57,54.7,67.2,40.1,75.2C25.5,83.3,9.1,89.2,-5.7,86.6C-20.5,84.1,-33.6,73.1,-46.8,63.1C-60,53,-73.3,43.9,-80.7,30.7C-88.1,17.4,-89.6,0.1,-86.2,-15.7C-82.7,-31.6,-74.3,-46.1,-62.4,-55.8C-50.5,-65.5,-35.1,-70.4,-20.2,-76.3C-5.3,-82.2,9.1,-89.1,23.9,-87.3C38.6,-85.4,30.6,-83.5,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>

            <div className="avatar-placeholder">
              <img src={profilePic} alt="Vincent" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

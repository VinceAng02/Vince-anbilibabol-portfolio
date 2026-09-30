import React from "react";
import "./Footer.css";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">Vincent</h1>
        <span className="footer-subtitle">Full-Stack Developer</span>

        <ul className="footer-links">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="footer-link"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="footer-link"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("works")}
              className="footer-link"
            >
              Works
            </button>
          </li>
        </ul>

        <div className="footer-socials">
          <a
            href="https://github.com/VinceAng02"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="GitHub"
          >
            git
          </a>
        </div>

        <span className="footer-copy">
          &#169; {new Date().getFullYear()} Vincent. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
  ];

  const handleScrollTo = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleScrollTo("home")}>
          Vincent
        </div>

        <nav className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${
                activeSection === link.id ? "active" : ""
              }`}
              onClick={() => handleScrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </header>
  );
}

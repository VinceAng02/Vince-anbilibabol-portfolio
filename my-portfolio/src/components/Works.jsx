import React, { useState } from "react";
import "./Works.css";

import taskManagerImg from "../assets/task-manager.png";
import productCatalogImg from "../assets/product-catalog.png";
import birthdayAppImg from "../assets/birthday-app.png";
import gameTrackerImg from "../assets/game-tracker.png";

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Task Manager App",
      category: "laravel-react",
      categoryLabel: "React & Laravel",
      tags: ["React", "Laravel", "REST API", "Tailwind/CSS"],
      image: taskManagerImg,
      github:
        "https://github.com/VinceAng02/React-and-Laravel-Utlizing-the-backend-of-the-system-with-laravel.git",
    },
    {
      id: 2,
      title: "E-Commerce Product Catalog",
      category: "web-apps",
      categoryLabel: "Web Application",
      tags: ["JavaScript", "HTML/CSS", "Product Catalog", "Interactive UI"],
      image: productCatalogImg,
      github:
        "https://github.com/VinceAng02/React-Fetch-API-Utilizing-the-get-and-post-method-using-API-via-mock-data.git",
    },
    {
      id: 3,
      title: "Birthday Celebration App",
      category: "web-apps",
      categoryLabel: "Interactive Celebration App",
      tags: ["React", "CSS Animations", "Audio API", "UI/UX"],
      image: birthdayAppImg,
      github: "https://github.com/VinceAng02/HappyBirthdayGreetins",
    },
    {
      id: 4,
      title: "Game Tracking Clock",
      category: "web-apps",
      categoryLabel: "Card Game Utility",
      tags: ["React", "JavaScript", "Game Mechanics", "Dark Theme"],
      image: gameTrackerImg,
      github: "https://github.com/VinceAng02/Chrono-Grimoires-Game-Clock",
    },
  ];

  const filterCategories = [
    { id: "all", label: "All Works" },
    { id: "laravel-react", label: "React & Laravel" },
    { id: "web-apps", label: "Web Applications" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="works" className="works-section">
      <div className="works-container">
        <h2 className="section-title">Works</h2>
        <span className="section-subtitle">My Portfolio Projects</span>

        {/* Category Filter Card Holder */}
        <div className="works-filters">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""
                }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="works-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="work-card">
              <div className="work-img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="work-img"
                />
                <span className="work-badge">{project.categoryLabel}</span>
              </div>

              <div className="work-details">
                <h3 className="work-title">{project.title}</h3>

                {/* Tech Tags */}
                <div className="work-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link Button */}
                <div className="work-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-work-secondary"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

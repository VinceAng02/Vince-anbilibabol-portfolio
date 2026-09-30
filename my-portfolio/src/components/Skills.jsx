import React from "react";
import "./Skills.css";

export default function Skills() {
  const frontendSkills = [
    { name: "React", level: "Intermediate" },
    { name: "HTML / CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Laravel", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "C#", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My Technical Level</span>

        <div className="skills-content">
          <div className="skills-box">
            <h3 className="skills-group-title">Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-badge">✓</div>
                  <div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-box">
            <h3 className="skills-group-title">Backend Development</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-badge">✓</div>
                  <div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

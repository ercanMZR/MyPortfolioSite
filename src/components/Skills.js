import React, { useState, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      "skills",
      JSON.stringify([
        { id: 1, name: "C#", level: 85 },
        { id: 2, name: "Nesne Yönelimli Programlama", level: 90 },
        { id: 3, name: "MS SQL", level: 85 },
        { id: 4, name: "Entity Framework", level: 80 },
        { id: 5, name: "Ado.Net", level: 80 },
        { id: 6, name: "Web Api", level: 85 },
        { id: 7, name: "MVC", level: 85 },
        { id: 8, name: "Katmanlı Mimari", level: 90 },
        { id: 9, name: "HTML", level: 95 },
        { id: 10, name: "CSS", level: 90 },
        { id: 11, name: "JavaScript", level: 85 },
        { id: 12, name: "Material UI", level: 80 },
        { id: 13, name: "React js", level: 85 },
        { id: 14, name: "Next js", level: 80 },
        { id: 15, name: "Bootstrap", level: 85 },
        { id: 16, name: "Tailwind Css", level: 80 },
      ])
    );

    const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
    setSkillsData(storedSkills);
  }, []);

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Teknolojiler
        </h2>
        {skillsData.length === 0 ? (
          <p className="text-center text-gray-500">
            Gösterilecek yetenek bulunmuyor.
          </p>
        ) : (
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div
                key={skill.id}
                className="skill-box"
                style={{ backgroundColor: "#3b82f6" }}
              >
                <div className="skill-icon">
                  <i
                    className={`${
                      skill.name.toLowerCase() === "c#"
                        ? "fab fa-microsoft"
                        : skill.name
                            .toLowerCase()
                            .includes("nesne yönelimli programlama")
                        ? "fas fa-object-group"
                        : skill.name.toLowerCase() === "ms sql"
                        ? "fas fa-database"
                        : skill.name.toLowerCase() === "entity framework"
                        ? "fas fa-database"
                        : skill.name.toLowerCase() === "ado.net"
                        ? "fas fa-database"
                        : skill.name.toLowerCase() === "web api"
                        ? "fas fa-server"
                        : skill.name.toLowerCase() === "mvc"
                        ? "fas fa-layer-group"
                        : skill.name.toLowerCase().includes("katmanlı mimari")
                        ? "fas fa-layer-group"
                        : skill.name.toLowerCase() === "html"
                        ? "fab fa-html5"
                        : skill.name.toLowerCase() === "css"
                        ? "fab fa-css3-alt"
                        : skill.name.toLowerCase() === "javascript"
                        ? "fab fa-js-square"
                        : skill.name.toLowerCase() === "material ui"
                        ? "fab fa-css3-alt"
                        : skill.name.toLowerCase() === "react js"
                        ? "fab fa-react"
                        : skill.name.toLowerCase() === "next js"
                        ? "fab fa-react"
                        : skill.name.toLowerCase() === "bootstrap"
                        ? "fab fa-bootstrap"
                        : skill.name.toLowerCase() === "tailwind css"
                        ? "fab fa-css3-alt"
                        : "fas fa-code"
                    }`}
                  ></i>
                </div>
                <h3 className="skill-title">{skill.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

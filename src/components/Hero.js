import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="position-relative">
      {/* Arkaplan resmi */}
      <div
        className="w-100"
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/david-gavi-Ijx8OxvKrgM-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* İçerik */}
      <div className="position-absolute top-50 start-50 translate-middle w-100 text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Merhaba, Ben Ercan MUZIR</h1>
          <p className="lead fs-3 mb-4">
            .Net Developer / Full Stack Developer
            <a
              href="https://github.com/ercanMZR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ms-2"
            >
              <i className="bi bi-github fs-4"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ercanmuzır"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ms-2"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </p>
          <a
            href="#projects"
            className="btn btn-light btn-lg px-4 py-3 mt-3 me-3"
            style={{
              borderRadius: "50px",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            Projelerimi Gör <i className="bi bi-arrow-down ms-2"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1tnkqi0eg-yLBefbllOYIzny-Y3_vt28u/view?usp=sharing"
            className="btn btn-light btn-lg px-4 py-3 mt-3"
            style={{
              borderRadius: "50px",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            download
          >
            CV İndir <i className="bi bi-download ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
            <img
              src="/DSC_5686 copy[83].jpg"
              alt="Profil"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Hakkımda</h2>
            <p className="lead mb-4">
              Merhaba ben Ercan, bir yazılım geliştiricisiyim.Makine
              mühendisliği eğitimimin ardından yazılım alanına yöneldim.İstanbul
              Eğitim Akademisi'nde aldığım Full Stack Yazılım Uzmanlığı
              eğitimiyle backend (C#,MS SQL, ADO.NET, EntityFramework, Web API,
              MVC) ve frontend (HTML, CSS, JavaScript,React.js, Material UI)
              teknolojilerinde deneyim kazandım.Full stack projeler geliştirerek
              kendimi sürekli geliştirmeyi veyenilikçi çözümler üretmeyi
              hedefliyorum.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-success p-2">Yazılım Geliştirici</span>
              <span className="badge bg-success p-2">Projeler</span>
              <span className="badge bg-primary p-2">Freelance</span>
              <span className="badge bg-primary p-2">Fullstack</span>
              <span className="badge bg-primary p-2">React</span>
              <span className="badge bg-primary p-2">.Net</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

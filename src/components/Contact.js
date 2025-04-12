import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-5 bg-white"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold text-primary">
          Benimle İletişime Geçin
        </h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="fas fa-envelope fa-2x text-primary"></i>
            <h5 className="mt-3">E-posta</h5>
            <p>ercanmuzir@gmail.com</p>
          </div>
          <div className="col-md-4">
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-phone fa-2x text-primary"></i>
            </a>
            <h5 className="mt-3">Telefon</h5>
            <p>+90 544 322 08 20</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
            <h5 className="mt-3">Adres</h5>
            <p>İstanbul, Türkiye</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="mailto:ercanmuzir@gmail.com" className="me-3">
              <i className="fas fa-envelope fa-2x text-primary"></i>
            </a>
            <a
              href="https://github.com/ercanMZR"
              className="me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x text-dark"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ercanmuzır"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x text-primary"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

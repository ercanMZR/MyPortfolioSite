import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {currentYear} Ercan. Tüm hakları saklıdır.
        </p>
        <div className="mt-3">
          <a href="#" className="text-white mx-2">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="bi bi-github"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

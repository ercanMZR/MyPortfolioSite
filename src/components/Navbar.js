import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiAlignJustify } from "react-icons/fi"; // FiAlignJustify ikonunu içe aktar
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Anasayfa", target: "hero" },
    { label: "Hakkımda", target: "about" },
    { label: "Teknolojiler", target: "skills" },
    { label: "Projeler", target: "projects" },
    { label: "İletişim", target: "contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar fixed-top responsive-navbar">
      <div className="container">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="navbar-brand"
        >
          Ercan Muzır
        </Link>
        {/* Hamburger menü butonu - Görünürlüğü CSS ile kontrol edilecek */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <FiAlignJustify />
        </button>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

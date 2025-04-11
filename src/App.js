import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router importları
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Ana sayfa içeriğini ayrı bir bileşen olarak tanımlayalım
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

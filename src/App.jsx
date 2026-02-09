import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Exercices from "./pages/Exercices";
import CaseStudy from "./pages/CaseStudy";
import ConcretCase from "./pages/ConcretCase";

export default function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`app ${theme}`}>
      {/* NAVIGATION */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Bouton jour/nuit */}
        <button onClick={toggleTheme}>
          {theme === "light" ? "Mode nuit" : "Mode jour"}
        </button>

        {/* Logo GitHub */}
        <a
          href="https://github.com/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub logo"
            className="github-logo"
          />
        </a>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />

        <Route path="/works" element={<Works theme={theme} />}>
          <Route index element={<Exercices />} />
          <Route path="exercices" element={<Exercices />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="concret-case" element={<ConcretCase />} />
        </Route>
      </Routes>
    </div>
  );
}

import "./App.css";
import { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Exercices from "./pages/Exercices";
import CaseStudy from "./pages/CaseStudy";
import ConcretCase from "./pages/ConcretCase";

import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations"; // <-- ton fichier de traductions

export default function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const t = translations[language]; // raccourci pour accéder aux textes

  return (
    <div className={`app ${theme}`}>
      {/* NAVIGATION */}
      <nav>
        <ul>
          <li><Link to="/">{t.home}</Link></li>
          <li><Link to="/about">{t.about}</Link></li>
          <li><Link to="/works">{t.works}</Link></li>
          <li><Link to="/contact">{t.contact}</Link></li>
        </ul>

        {/* Bouton jour/nuit */}
        <button onClick={toggleTheme}>
          {theme === "light" ? t.toggleThemeLight : t.toggleThemeDark}
        </button>

        {/* Bouton langue */}
        <button onClick={toggleLanguage}>
          {language === "fr" ? "EN" : "FR"}
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
        <Route path="/" element={<Home theme={theme} language={language} />} />
        <Route path="/about" element={<About theme={theme} language={language} />} />
        <Route path="/contact" element={<Contact theme={theme} language={language} />} />

        <Route path="/works" element={<Works theme={theme} language={language} />}>
          <Route index element={<Exercices language={language} />} />
          <Route path="exercices" element={<Exercices language={language} />} />
          <Route path="case-study" element={<CaseStudy language={language} />} />
          <Route path="concret-case" element={<ConcretCase language={language} />} />
        </Route>
      </Routes>
    </div>
  );
}

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
import useTranslation from "./hooks/useTranslation";

export default function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { t } = useTranslation(); // 👈 utiliser t() pour traductions
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`app ${theme}`}>
      {/* NAVIGATION */}
      <nav>
        <ul>
          <li><Link to="/">{t("nav.home")}</Link></li>
          <li><Link to="/about">{t("nav.about")}</Link></li>
          <li><Link to="/works">{t("nav.works")}</Link></li>
          <li><Link to="/contact">{t("nav.contact")}</Link></li>
        </ul>

        {/* Bouton jour/nuit */}
        <button onClick={toggleTheme}>
          {theme === "light" ? t("theme.light") : t("theme.dark")}
        </button>

        {/* Bouton langue dynamique */}
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

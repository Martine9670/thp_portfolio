import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Works() {
  const { language } = useContext(LanguageContext);

  const text = {
    fr: {
      title: "Bienvenue sur la page des catégories",
      exercices: "Exercices",
      caseStudy: "Études de cas",
      concretCase: "Cas concrets"
    },
    en: {
      title: "Welcome to the Works page. Please select a category",
      exercices: "Exercises",
      caseStudy: "Case Study",
      concretCase: "Concrete Case"
    }
  };

  return (
    <div>
      <h1>{text[language].title}</h1>

      <nav className="works-nav">
        <ul>
          <li><Link to="exercices">{text[language].exercices}</Link></li>
          <li><Link to="case-study">{text[language].caseStudy}</Link></li>
          <li><Link to="concret-case">{text[language].concretCase}</Link></li>
        </ul>
      </nav>

      <Outlet /> {/* Ici s’affichent les sous-pages */}
    </div>
  );
}

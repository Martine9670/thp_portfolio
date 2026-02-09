import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function CaseStudy() {
  const { language } = useContext(LanguageContext);

  const projects = [
    language === "fr" ? "Nike, le nouveau site web" : "Nike, the new website",
    language === "fr" ? "Paypal, comment leurs données sont stockées" : "Paypal, how their data are stored"
  ];

  return (
    <div>
      <h2>{language === "fr" ? "Études de cas" : "Case Study"}</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card case-study-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

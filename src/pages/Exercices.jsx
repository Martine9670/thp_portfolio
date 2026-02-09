import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Exercices() {
  const { language } = useContext(LanguageContext);

  const projects = [
    language === "fr" ? "Informations sur les jeux vidéo" : "Video Game informations",
    language === "fr" ? "Le bloc-notes" : "The notepad",
    language === "fr" ? "React Router" : "React Router"
  ];

  return (
    <div>
      <h2>{language === "fr" ? "Exercices" : "Exercises"}</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card exercices-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

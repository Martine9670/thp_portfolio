import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function ConcretCase() {
  const { language } = useContext(LanguageContext);

  const projects = [
    language === "fr" ? "Site web du club de bridge de mes grands-parents" : "My grandparent bridge club website",
    language === "fr" ? "Boulangerie d’un ami" : "My friend bakery"
  ];

  return (
    <div>
      <h2>{language === "fr" ? "Cas concrets" : "Concret Case"}</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card concret-case-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

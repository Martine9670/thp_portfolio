import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Home({ theme }) {
  const { language } = useContext(LanguageContext);

  const text = {
    fr: {
      header: "Portfolio de Martine",
      introTitle: "Bonjour, je m'appelle Martine. Bienvenue sur mon portfolio !",
      introText: "Depuis quelques mois, j'apprends le développement web, back-end et front-end, avec The Hacking Project. J'ai ainsi pu apprendre à utiliser Ruby on Rails, JavaScript et React.",
      projectsIntro: "Vous pourrez trouver la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.",
      project1: "Un site vitrine réalisé en React.",
      project2: "Une application de gestion de tâches.",
      project3: "Un projet personnel en cours."
    },
    en: {
      header: "Martine's Portfolio",
      introTitle: "Hello, my name is Martine. Welcome to my portfolio!",
      introText: "For a few months, I have been learning web development, both back-end and front-end, with The Hacking Project. I have learned to use Ruby on Rails, JavaScript, and React.",
      projectsIntro: "Below you will find the list of my projects. Some were done during my training at The Hacking Project, and others are personal projects.",
      project1: "A showcase website built with React.",
      project2: "A task management application.",
      project3: "A personal project in progress."
    }
  };

  return (
    <div className={`page ${theme}`}>
      {/* HEADER */}
      <header>
        <h1>{text[language].header}</h1>
        <div className="header-right"></div>
      </header>

      {/* INTRO */}
      <section>
        <h2>{text[language].introTitle}</h2>
        <p>{text[language].introText}</p>
      </section>

      {/* LISTE DES TRAVAUX */}
      <section className="projects">
        <p>{text[language].projectsIntro}</p>

        <div className="projects-list">
          {/* Projet 1 */}
          <div className="project">
            <img
              src="https://via.placeholder.com/200x120?text=Projet+1"
              alt="Projet 1"
            />
            <p>{text[language].project1}</p>
          </div>

          {/* Projet 2 */}
          <div className="project">
            <img
              src="https://via.placeholder.com/200x120?text=Projet+2"
              alt="Projet 2"
            />
            <p>{text[language].project2}</p>
          </div>

          {/* Projet 3 */}
          <div className="project">
            <p>{text[language].project3}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

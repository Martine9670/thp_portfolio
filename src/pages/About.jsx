import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function About({ theme }) {
  const { language } = useContext(LanguageContext);

  // Traductions
  const text = {
    fr: {
      title: "Bonjour et bienvenue sur mon portfolio !",
      intro: "Actuellement en plein apprentissage en développement web grâce à The Hacking Project. J'ai appris à utiliser Ruby on Rails, JavaScript et React.",
      projectsIntro: "Ici vous trouverez la liste de tous mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.",
      project1: "Un site vitrine réalisé en React.",
      project2: "Une application de gestion de tâches.",
      project3: "Un projet personnel en cours."
    },
    en: {
      title: "Hello and welcome to my portfolio!",
      intro: "I am currently learning web development thanks to The Hacking Project. I have learned to use Ruby on Rails, JavaScript, and React.",
      projectsIntro: "Here you will find a list of all my projects. I completed some during my training at The Hacking Project, and others are personal projects.",
      project1: "A showcase website built with React.",
      project2: "A task management application.",
      project3: "A personal project in progress."
    }
  };

  return (
    <div className={`page ${theme}`}>
      <h2>{text[language].title}</h2>
      <p>{text[language].intro}</p>

      <section className="projects">
        <p>{text[language].projectsIntro}</p>

        <div className="projects-list">
          <div className="project">
            <img src="https://via.placeholder.com/200x120?text=Projet+1" alt="Projet 1"/>
            <p>{text[language].project1}</p>
          </div>

          <div className="project">
            <img src="https://via.placeholder.com/200x120?text=Projet+2" alt="Projet 2"/>
            <p>{text[language].project2}</p>
          </div>

          <div className="project">
            <img src="https://via.placeholder.com/200x120?text=Projet+3" alt="Projet 3"/>
            <p>{text[language].project3}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function About({ theme }) {
  return (
    <div className={`page ${theme}`}>
      <h2>Bonjour et bienvenue sur mon portfolio !</h2>
      <p>
        Actuellement en plein apprentissage en développement web grâce à The Hacking Project. 
        J'ai appris à utiliser Ruby on Rails, JavaScript et React.
      </p>

      <section className="projects">
        <p>
          Ici vous trouverez la liste de tous mes projets. J'en ai réalisé certains 
          lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.
        </p>

        <div className="projects-list">
          <div className="project">
            <img src="https://via.placeholder.com/200x120?text=Projet+1" alt="Projet 1"/>
            <p>Un site vitrine réalisé en React.</p>
          </div>

          <div className="project">
            <img src="https://via.placeholder.com/200x120?text=Projet+2" alt="Projet 2"/>
            <p>Une application de gestion de tâches.</p>
          </div>

          <div className="project">
            <img src="https://via.placeholder.com/200x120?text=Projet+3" alt="Projet 3"/>
            <p>Un projet personnel en cours.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

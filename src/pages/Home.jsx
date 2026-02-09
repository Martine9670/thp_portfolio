export default function Home({ theme }) {
  return (
    <div className={`page ${theme}`}>
      {/* HEADER */}
      <header>
        <h1>Portfolio de John Doe</h1>
        <div className="header-right">
          <a
            href="https://github.com/tonprofil" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src="https://via.placeholder.com/30x30?text=GitHub"
              alt="GitHub logo"
              className="github-logo"
            />
          </a>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h2>
        <p>
          Depuis quelques mois, j'apprends le développement web grâce à The Hacking Project.
          J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.
        </p>
      </section>

      {/* LISTE DES TRAVAUX */}
      <section className="projects">
        <p>
          Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains
          lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.
        </p>

        <div className="projects-list">
          {/* Projet 1 */}
          <div className="project">
            <img
              src="https://via.placeholder.com/200x120?text=Projet+1"
              alt="Projet 1"
            />
            <p>Un site vitrine réalisé en React.</p>
          </div>

          {/* Projet 2 */}
          <div className="project">
            <img
              src="https://via.placeholder.com/200x120?text=Projet+2"
              alt="Projet 2"
            />
            <p>Une application de gestion de tâches.</p>
          </div>

          {/* Projet 3 */}
          <div className="project">
            <p>Un projet personnel en cours.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

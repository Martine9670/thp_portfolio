import useTranslation from "../hooks/useTranslation";

export default function Home({ theme }) {
  const { t } = useTranslation();

  return (
    <div className={`page ${theme}`}>
      {/* HEADER */}
      <header>
        <h1>{t("home.introTitle")}</h1>
      </header>

      {/* INTRO */}
      <section>
        <p>{t("home.introText")}</p>
      </section>

      {/* LISTE DES TRAVAUX */}
      <section className="projects">
        <p>{t("home.projectsText")}</p>

        <div className="projects-list">
          {t("exercices").map((project, index) => (
            <div className="project" key={index}>
              <p>{project}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

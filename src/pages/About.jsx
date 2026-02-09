import useTranslation from "../hooks/useTranslation";

export default function About({ theme }) {
  const { t } = useTranslation();

  return (
    <div className={`page ${theme}`}>
      <h1>{t("about.title")}</h1>
      <p>{t("about.text")}</p>

      <section className="projects">
        <p>{t("about.projectsText")}</p>

        <div className="projects-list">
          {t("concretCase").map((project, index) => (
            <div className="project concret-case-card" key={index}>
              <p>{project}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

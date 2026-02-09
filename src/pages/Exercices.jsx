import useTranslation from "../hooks/useTranslation";

export default function Exercices() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("works.exercices")}</h2>
      <div className="cards">
        {t("exercices").map((project, index) => (
          <div className="card exercices-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

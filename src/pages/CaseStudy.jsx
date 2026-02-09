import useTranslation from "../hooks/useTranslation";

export default function CaseStudy() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("works.caseStudy")}</h2>
      <div className="cards">
        {t("caseStudy").map((project, index) => (
          <div className="card case-study-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

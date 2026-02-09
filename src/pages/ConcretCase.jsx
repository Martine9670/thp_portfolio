import useTranslation from "../hooks/useTranslation";

export default function ConcretCase() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("works.concretCase")}</h2>
      <div className="cards">
        {t("concretCase").map((project, index) => (
          <div className="card concret-case-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

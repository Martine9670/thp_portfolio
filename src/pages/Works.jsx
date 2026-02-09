import { Link, Outlet } from "react-router-dom";
import useTranslation from "../hooks/useTranslation";

export default function Works() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("works.title")}</h1>

      <nav className="works-nav">
        <ul>
          <li><Link to="exercices">{t("works.exercices")}</Link></li>
          <li><Link to="case-study">{t("works.caseStudy")}</Link></li>
          <li><Link to="concret-case">{t("works.concretCase")}</Link></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

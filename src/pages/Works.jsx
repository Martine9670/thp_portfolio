import { Link, Outlet } from "react-router-dom";

export default function Works() {
  return (
    <div>
      <h1>Welcome on the works page. Please, select a category</h1>

      <nav className="works-nav">
        <ul>
          <li><Link to="exercices">Exercices</Link></li>
          <li><Link to="case-study">Case Study</Link></li>
          <li><Link to="concret-case">Concret Case</Link></li>
        </ul>
      </nav>

      <Outlet /> {/* Ici s’affichent les sous-pages */}
    </div>
  );
}

export default function Exercices() {
  const projects = [
    "Video Game informations",
    "The notepad",
    "React Router"
  ];

  return (
    <div>
      <h2>Exercices</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card exercices-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConcretCase() {
  const projects = [
    "My grandparent bridge club website",
    "My friend bakery"
  ];

  return (
    <div>
      <h2>Concret Case</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card concret-case-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

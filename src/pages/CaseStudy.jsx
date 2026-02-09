export default function CaseStudy() {
  const projects = [
    "Nike, the new website",
    "Paypal, how their data are stored"
  ];

  return (
    <div>
      <h2>Case Study</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card case-study-card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}

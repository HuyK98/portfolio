import projects from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h3>Projects</h3>

      {projects.length ? (
        <div className="cards">
          {projects.map(p => (
            <article key={p.id} className="card">
              <header className="card-head">
                <h4>{p.name}</h4>
                <small>{p.period}</small>
              </header>

              <p className="muted">{p.role}</p>
              <p className="stack">{p.stack.join(" · ")}</p>

              <ul className="highlights">
                {p.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>

              <div className="links">
                <a href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="muted">Chưa có project nào, sẽ cập nhật sớm!</p>
      )}
    </section>
  );
}

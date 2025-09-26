import { useEffect, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [state, setState] = useState("loading"); // loading | ok | error

  useEffect(() => {
    fetch("/api/v1/projects")
      .then((r) => r.json())
      .then((raw) => {
        setProjects((raw && raw.data) || []);
        setState("ok");
      })
      .catch(() => setState("error"));
  }, []);

  return (
    <section id="projects" className="section projects">
      <h3>Projects</h3>
      <p className="muted">Một vài dự án tiêu biểu gần đây.</p>

      {state === "loading" && <p>Đang tải dữ liệu.</p>}
      {state === "error" && <p>Không tải được dữ liệu.</p>}

      {state === "ok" && (
        <div className="cards">
          {projects.map((p) => (
            <article className="card" key={p._id}>
              <header className="card-hd">
                <h4 className="card-title">{p.name}</h4>
                <span className="period">{p.period}</span>
              </header>

              <div className="stack">
                {(p.stack || []).slice(0, 6).map((s) => (  //show cao nhất 6 tech stack
                  <span className="chip" key={`${p._id}-${s}`}>{s}</span>
                ))}
              </div>

              <ul className="highlights">
                {(p.highlights || []).slice(0, 3).map((h, i) => ( //show cao nhất 3 highlights
                  <li key={`${p._id}-h${i}`}>{h}</li>
                ))}
              </ul>

              <footer className="actions">
                {p.demo && (
                  <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {p.repo && (
                  <a className="btn ghost" href={p.repo} target="_blank" rel="noreferrer">
                    Repo
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

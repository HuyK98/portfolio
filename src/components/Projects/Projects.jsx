import projects from "../../data/projects";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h3>Projects</h3>

      {projects.length ? (
        <div className="cards">
          {projects.map(p => (
            <motion.article
              key={p.id}
              className="card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
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
            </motion.article>
          ))}
        </div>
      ) : (
        <p className="muted">Chưa có project nào, sẽ cập nhật sớm!</p>
      )}
    </section>
  );
}

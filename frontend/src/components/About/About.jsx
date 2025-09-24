import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

export default function About() {
    const [show, setShow] = useState(true);
    const [skills, setSkills] = useState([]);
    const [state, setState] = useState("loading");

    useEffect(() => {
        fetch("/api/v1/skills")
            .then(r => r.json())
            .then(raw => {
                setSkills(raw.data || []);
                setState("ok");
            })
            .catch(() => setState("error"))
    }, [])

    return (
        <section id="about" className="section about">
            <h3>About</h3>
            <p className="muted">
                Fresher Web Developer tập trung React & Node. Dưới đây là nhóm kỹ năng mình đang luyện:
            </p>

            <div className="about-intro">
                <article className="about-card">
                    <h4>Career Goal</h4>
                    <p className="muted">
                        Fresher Web Developer tập trung React & Node. Mục tiêu 1–3 năm:
                        trở thành full-stack engineer, nâng kỹ năng backend và DevOps cơ bản.
                    </p>
                </article>

                <article className="about-card">
                    <h4>Education</h4>
                    <ul className="edu">
                        <li>
                            <strong>Van Lang University</strong> - B.Sc. Information Technology
                            <div className="muted">GPA ~3.2/4.0 · 2021–2025</div>
                        </li>
                    </ul>
                </article>
            </div>

            <div className="about-actions">
                <button onClick={() => setShow(s => !s)}>
                    {show ? "Ẩn danh sách" : "Hiện danh sách"}
                </button>
            </div>

            <AnimatePresence>
                {state === "loading" && <p className="muted">Loading skills...</p>}
                {state === "error" && <p className="muted">Failed to load skills...</p>}

                {state === "ok" && show && (
                    <motion.div
                        className="skill-groups"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                    >
                        {skills.map(g => (
                            <article key={g._id || g.title} className="skill-card">
                                <h4>{g.title}</h4>
                                <ul>
                                    {g.items.map(item => (
                                        <li key={`${g._id || g.title}-${item}`}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

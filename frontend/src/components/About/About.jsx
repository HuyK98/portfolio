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
                            <article key={g.id} className="skill-card">
                                <h4>{g.title}</h4>
                                <ul>
                                    {g.items.map(item => (
                                        <li key={item}>{item}</li>
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

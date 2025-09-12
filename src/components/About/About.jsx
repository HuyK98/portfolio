import { useState } from "react";
import skills from "../../data/skills";
import "./About.css";

export default function About() {
    const [show, setShow] = useState(true);

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

            {show && (
                <div className="skill-groups">
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
                </div>
            )}
        </section>
    );
}

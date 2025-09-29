import { useEffect, useState } from "react";
import "./Experience.css";

export default function Experience() {
    const [exp, setExp] = useState([]);
    const [state, setState] = useState("loading");

    useEffect(() => {
        fetch("/api/v1/exp")
            .then(r => r.json())
            .then(raw => {
                setExp(raw.data || []);
                setState("ok");
            })
            .catch(() => setState("error"));
    }, [])

    return (
        <section id="experience" className="section experience">
            <h3>Experience</h3>
            <div className="exp-grid">
                {exp.map(e => (
                    <article className="ex-card" key={e._id}>
                        <div className="ex-header">
                            <h4 className="ex-title">{e.company} - {e.title}</h4>
                            <span className="ex-time">{e.time}</span>
                        </div>
                        <ul className="bullets">
                            {(e.points || []).map((pt, i) => <li key={i}>{pt}</li>)}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}

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
            <ul className="timeline">
                {state === "loading" && <p className="muted">Loading...</p>}
                {state === "error" && <p className="muted">Failed to load...</p>}

                {state === "ok" && exp.map(e => (
                    <li key={e.id} className="timeline-item">
                        <div className="dot" />
                        <div className="ex-content">
                            <h4>{e.company} - {e.title}</h4>
                            <small className="muted">{e.time}</small>
                            <ul>
                                {e.points.map(pt => <li key={pt}>{pt}</li>)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

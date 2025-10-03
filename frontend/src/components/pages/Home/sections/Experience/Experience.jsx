import { useEffect, useState } from "react";
import { api } from "../../../../../services/api";
import "./Experience.css";

export default function Experience() {
    const [exp, setExp] = useState([]);
    const [state, setState] = useState("loading");

    useEffect(() => {
        const fetchExp = async () => {
            try {
                setState("loading");
                const res = await api.get('/exp');
                setExp(res.data.data || []);
                setState("ok");
            } catch (err) {
                console.error("Failed to fetch experience data:", err);
                setState("error");
            }
        };

        fetchExp();
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

import exp from "../../data/experience";
import "./Experience.css";

export default function Experience() {
    return (
        <section id="experience" className="section experience">
            <h3>Experience</h3>
            <ul className="timeline">
                {exp.map(e => (
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

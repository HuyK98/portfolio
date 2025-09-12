import "./App.css";
import "./styles/base.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

export default function App() {
  return (
    <div className="layout">
      <Header />

      <main className="container content">
        <section id="hero" className="section">
          <p className="muted">Hi! I&apos;m</p>
          <h2>Truong Dinh Huy</h2>
          <p className="lead">
            Fresher web developer focusing on React &amp; Node. Portfolio này được build từng bước mỗi ngày.
          </p>
        </section>

        <About />
        <Projects />
        <Experience />

        <section id="contact" className="section">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:huytruongdinh61@gmail.com">huytruongdinh61@gmail.com</a></li>
            <li><a href="tel:+84942090803">(+84) 942 090 803</a></li>
            <li><a href="https://www.linkedin.com/in/truong-dinh-huy-5b3b251b0/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/HuyK98" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

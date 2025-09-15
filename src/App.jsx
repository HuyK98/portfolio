import "./App.css";
import "./styles/base.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact"

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
        <Contact />

      </main>

      <Footer />
    </div>
  );
}

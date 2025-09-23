import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import "./styles/base.css";
import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact"

export default function App() {
  return (
    <ThemeProvider>
      <div className="layout">
        <Header />

        <main className="container content">
          <section id="hero" className="section hero">
            <div className="hero-inner">
              <img src="/avatar.jpg" alt="Truong Dinh Huy" className="avatar" />

              <div className="hero-content">
                <motion.p
                  className="muted"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Hi! I&apos;m
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Truong Dinh Huy
                </motion.h2>

                <motion.p
                  className="lead"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Fresher web developer focusing on React &amp; Node. Portfolio này được build từng bước mỗi ngày.
                </motion.p>

                <div className="hero-actions">
                  <a className="btn primary" href="/resume.pdf" download>Download Resume</a>
                  <a className="btn" href="#projects">View Projects</a>
                </div>
              </div>
            </div>
          </section>

          <About />
          <Projects />
          <Experience />
          <Contact />

        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

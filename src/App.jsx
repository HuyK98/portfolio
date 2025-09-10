import "./App.css";
import "./styles/base.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="layout">
      <Header />

      <main className="container content">
        <section id="hero" className="section">
          <p className="muted">Hi! I&apos;m</p>
          <h2>Truong Dinh Huy</h2>
          <p className="lead">
            Fresher web developer focusing on React & Node.
            This portfolio is built step-by-step as I learn.
          </p>
        </section>

        <section id="about" className="section">
          <h3>About</h3>
          <p className="muted">
            (Day 2 sẽ render danh sách kỹ năng bằng .map; Day 3–4 thêm avatar, layout đẹp hơn.)
          </p>
        </section>

        <section id="projects" className="section">
          <h3>Projects</h3>
          <p className="muted">Coming soon… (sau sẽ fetch từ API backend).</p>
        </section>

        <section id="contact" className="section">
          <h3>Contact</h3>
          <p className="muted">Sẽ có form gửi Gmail qua Node/Nodemailer ở tuần 3.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

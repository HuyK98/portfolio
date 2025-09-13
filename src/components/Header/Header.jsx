import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [dark, setDark] = useState(false);

  //khi mount -> đọc  theme đã save
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, [])

  function toggleTheme() {
    setDark((d) => {
      const next = !d;
      if (next) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  }

  return (
    <header className="site-header">
      <nav className="container nav">
        <div className="brand"> Ken's Portfolio </div>

        <div className="right">
          <ul className="menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="toggle" onClick={toggleTheme}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}

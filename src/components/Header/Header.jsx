import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark((d) => {
      const next = !d;
      // thêm/bớt class 'dark' vào body để chuyển theme
      if (next) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
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

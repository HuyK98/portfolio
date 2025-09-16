import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

export default function Header() {
  const { dark, toggleTheme } = useTheme();

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

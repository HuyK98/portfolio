import { NavLink } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import "./Header.css";

export default function Header() {
  const { dark, toggleTheme } = useTheme();

  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <nav className="container nav">
        <NavLink to="/" className="brand">
          Huy's Portfolio
        </NavLink>

        <div className="right">
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("about");
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("projects");
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("contact");
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <button className="toggle" onClick={toggleTheme}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
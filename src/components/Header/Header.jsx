import "./Header.css"

export default function Header() {
  return (
    <header className="site-header">
      <nav className="container nav">
        <div className="brand">Ken's Portfolio</div>
        <ul className="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

import "./Footer.css"

export default function Footer() {
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} Truong Dinh Huy
      <button 
        className="backtotop-inline"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to top
        </button>
    </footer>
  )
}

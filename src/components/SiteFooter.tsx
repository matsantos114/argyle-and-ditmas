export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Argyle &amp; Ditmas — Built with TypeScript React + Node.</p>
      <div className="footer-links">
        <a href="#archive">Archive</a>
        <a href="#pitch">Pitch a story</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  )
}

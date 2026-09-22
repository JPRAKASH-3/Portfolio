import { Icon } from "./Icons.jsx";

const NAV_ITEMS = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Nav({ open, onToggle, scrolled }) {
  return (
    <>
      <header className={`nav${open ? " open" : ""}${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-in">
          <a className="logo" href="#home" aria-label="Jayaprakash V — home">
            JP<b>.</b>
          </a>
          <nav aria-label="Primary">
            <ul className="links">
              {NAV_ITEMS.map((n) => (
                <li key={n}>
                  <a href={`#${n.toLowerCase()}`}>{n}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn primary nav-cta" href="#contact">
            Let’s Talk <Icon name="arrow" />
          </a>
          <button
            className="burger"
            id="burger"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="menu"
            onClick={onToggle}
          >
            <Icon name="menu" className="m" />
            <Icon name="close" className="x" />
          </button>
        </div>
        <div className="progress" aria-hidden="true">
          <i id="prog"></i>
        </div>
      </header>
      <div className={`menu${open ? " open" : ""}`} id="menu">
        {NAV_ITEMS.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`}>
            {n}
          </a>
        ))}
        <a className="btn primary" href="#contact">
          Let’s Talk <Icon name="arrow" />
        </a>
      </div>
    </>
  );
}

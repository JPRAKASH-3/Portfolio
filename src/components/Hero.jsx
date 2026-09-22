import { Icon } from "./Icons.jsx";
import { GH, LINKEDIN } from "../data.js";

const TILES = [
  {
    d: "340ms",
    label: "React.js",
    svg: (
      <svg viewBox="-20 -20 40 40" aria-hidden="true">
        <g fill="none" stroke="#61DAFB" strokeWidth="1.6">
          <ellipse rx="16" ry="6.4" />
          <ellipse rx="16" ry="6.4" transform="rotate(60)" />
          <ellipse rx="16" ry="6.4" transform="rotate(120)" />
        </g>
        <circle r="3" fill="#61DAFB" />
      </svg>
    )
  },
  {
    d: "390ms",
    label: "Next.js",
    svg: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="#000" stroke="rgba(255,255,255,.35)" />
        <text x="20" y="27" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="Arial,sans-serif">
          N
        </text>
      </svg>
    )
  },
  {
    d: "440ms",
    label: "Node.js",
    svg: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <polygon points="20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5" fill="none" stroke="#7BC950" strokeWidth="2.2" strokeLinejoin="round" />
        <text x="20" y="25.5" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7BC950" fontFamily="Arial,sans-serif">
          JS
        </text>
      </svg>
    )
  },
  {
    d: "490ms",
    label: "Express.js",
    svg: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="#1B2331" stroke="rgba(255,255,255,.14)" />
        <text x="20" y="26" textAnchor="middle" fontSize="18" fontWeight="500" fill="#E8EDF5" fontFamily="Arial,sans-serif">
          ex
        </text>
      </svg>
    )
  },
  {
    d: "540ms",
    label: "Python",
    svg: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path fill="#4F8FD1" d="M15.8 3C11 3 11.3 5.1 11.3 5.1V7.3H16V8H9.4S6 7.6 6 12.6s3 4.8 3 4.8h1.8v-2.3s-.1-3 2.9-3h5s2.8 0 2.8-2.7V5.8S21.9 3 15.8 3zm-2.6 1.6a.9.9 0 110 1.8.9.9 0 010-1.8z" />
        <path fill="#FFD43B" d="M16.2 29c4.8 0 4.5-2.1 4.5-2.1v-2.2H16V24h6.6S26 24.4 26 19.4s-3-4.8-3-4.8h-1.8v2.3s.1 3-2.9 3h-5s-2.8 0-2.8 2.7v4.4S9.9 29 16.2 29zm2.6-1.6a.9.9 0 110-1.8.9.9 0 010 1.8z" />
      </svg>
    )
  },
  {
    d: "590ms",
    label: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <ellipse cx="20" cy="9" rx="12" ry="5" fill="none" stroke="#8DB4E2" strokeWidth="2" />
        <path
          d="M8 9v20c0 2.8 5.4 5 12 5s12-2.2 12-5V9M8 19c0 2.8 5.4 5 12 5s12-2.2 12-5"
          fill="none"
          stroke="#8DB4E2"
          strokeWidth="2"
        />
      </svg>
    )
  }
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <svg className="waves" viewBox="0 0 340 220" aria-hidden="true">
        <path d="M0 200C60 190 120 150 170 220" />
        <path d="M0 178C64 170 132 128 190 220" />
        <path d="M0 156C70 150 144 104 210 220" />
        <path d="M0 134C76 130 156 82 230 220" />
        <path d="M0 112C82 110 168 60 250 220" />
        <path d="M0 90C88 90 180 38 270 220" />
      </svg>
      <div className="hero-in">
        <div className="hero-copy">
          <p className="hero-label h" style={{ "--d": "40ms" }}>
            FULL STACK DEVELOPER <i></i>
          </p>
          <p className="hi h" style={{ "--d": "120ms" }}>
            Hi, I’m 
          </p>
          <h1 className="hi h" style={{ "--d": "120ms" }}>
            Jayaprakash <span className="v">V</span>
          </h1>
          <p className="lede h" style={{ "--d": "260ms" }}>
            Building modern web applications with clean code, great user experiences and scalable solutions.
          </p>

          <ul className="tiles" aria-label="Primary technologies">
            {TILES.map((t) => (
              <li className="tile h" style={{ "--d": t.d }} key={t.label}>
                <span className="box">{t.svg}</span>
                {t.label}
              </li>
            ))}
          </ul>

          <div className="cta h" style={{ "--d": "660ms" }}>
            <a className="btn primary" href="#projects">
              <Icon name="folder" />
              View My Projects <Icon name="arrow" />
            </a>
            <a className="btn ghost" href="#contact">
              <Icon name="mail" />
              Contact Me
            </a>
          </div>

          <ul className="facts h" style={{ "--d": "730ms" }}>
            <li className="fact">
              <Icon name="pin" />
              <span>
                Cuddalore,
                <br />
                Tamil Nadu, India
              </span>
            </li>
            <li className="fact">
              <Icon name="cap" />
              <span>
                B.Tech (IT)
                <br />
                Anna University
              </span>
            </li>
            <li className="fact">
              <Icon name="code" />
              <span>
                Full Stack
                <br />
                Developer
              </span>
            </li>
          </ul>
          <p className="turning h" style={{ "--d": "800ms" }}>
            Turning ideas into <b>functional and beautiful web apps.</b>
          </p>
        </div>

        <div className="hero-photo">
          <div className="quote" id="quote" aria-hidden="true">
            <div className="h" style={{ "--d": "900ms" }}>
              Better
              <br />
              Code
              <br />
              Better
              <br />
              Tomorrow
              <svg viewBox="0 0 120 12">
                <path d="M2 9C32 2 72 3 118 1" />
              </svg>
            </div>
          </div>
          <div className="par" id="par">
            <img src="/assets/photo.jpg" width="820" height="953" alt="Portrait of Jayaprakash V" loading="eager" fetchPriority="high" />
          </div>
          <div className="socials h" style={{ "--d": "1000ms" }}>
            <a href={GH} target="_blank" rel="noopener" aria-label="GitHub">
              <Icon name="github" fill />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn">
              <Icon name="linkedin" fill />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

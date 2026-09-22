import { GH, LINKEDIN } from "../data.js";

const LINKS = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in wrap" style={{ padding: 0 }}>
        <div>
          <a className="logo" href="#home">
            JP<b>.</b>
          </a>
          <p className="role">Full Stack Developer</p>
          <p className="about-l">Building modern web applications with clean code, great user experiences and scalable solutions.</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            {LINKS.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`}>{n}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Socials</h4>
          <ul>
            <li>
              <a href={GH} target="_blank" rel="noopener">
                GitHub
              </a>
            </li>
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <span>© 2026 Jayaprakash V. All rights reserved.</span>
        <span>Designed and built with React &amp; Vite.</span>
      </div>
    </footer>
  );
}

import { Icon } from "./Icons.jsx";

export default function About({ onResume }) {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="mask">
            <span>About Me</span>
          </h2>
          <p className="rv" style={{ "--d": "120ms" }}>
            Building modern software with modern technologies.
          </p>
        </header>
        <div className="about">
          <div className="prose rv">
            <p>I’m Jayaprakash V, a Full Stack Developer and B.Tech Information Technology graduated in P.T. Lee Chengalvaraya Naicker College of Engineering And Technology , focused on building modern web applications.</p>
            <p>
              I work across frontend development, backend development, REST APIs, databases and full-stack application architecture. My primary
              technologies include React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, Python, FastAPI, PostgreSQL and MySQL.
            </p>
            <p>I enjoy creating responsive user interfaces, developing reliable backend services, designing database-driven applications and solving real-world software problems.</p>
            <p>My development approach focuses on clean code, maintainable architecture, responsive design, usability, debugging, testing and continuous improvement.</p>
            <a className="btn ghost js-resume" href="#contact" onClick={onResume}>
              <Icon name="down" />
              Download Resume
            </a>
          </div>
          <div className="stats" data-stagger>
            <div className="card stat hl rv">
              <b>
                <span className="count" data-to="7.97" data-dec="2">
                  7.97
                </span>{" "}
                / 10
              </b>
              <span>B.Tech CGPA</span>
            </div>
            <div className="card stat rv">
              <b>B.Tech IT</b>
              <span>Information Technology</span>
            </div>
            <div className="card stat rv">
              <b>Full Stack</b>
              <span>Development</span>
            </div>
            <div className="card stat rv">
              <b>React + Next.js</b>
              <span>Frontend</span>
            </div>
            <div className="card stat rv">
              <b>Node + Python</b>
              <span>Backend</span>
            </div>
            <div className="card stat rv" style={{ gridColumn: "1/-1" }}>
              <b>PostgreSQL + MySQL</b>
              <span>Databases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

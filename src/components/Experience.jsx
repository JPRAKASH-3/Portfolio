import { Icon } from "./Icons.jsx";

const RESP = [
  "Worked on full-stack web applications.",
  "Developed frontend functionality using React.js and JavaScript.",
  "Worked with backend applications using Node.js and Express.js.",
  "Worked with SQL and database-driven functionality.",
  "Debugged and tested application functionality.",
  "Participated in Agile development workflows.",
  "Used Git and GitHub for version control and collaboration.",
  "Participated in code reviews.",
  "Participated in sprint planning.",
  "Worked on application performance improvements."
];

const BADGES = ["React.js", "JavaScript", "Node.js", "Express.js", "SQL", "Git", "GitHub", "Agile/Scrum"];

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="mask">
            <span>Experience</span>
          </h2>
          <p className="rv" style={{ "--d": "120ms" }}>
            Hands-on, team-based development.
          </p>
        </header>
        <article className="card exp rv">
          <div className="exp-top">
            <div>
              <h3>Full-Stack Development Intern</h3>
              <p className="co">Scode Software Solutions</p>
            </div>
            <span className="pill">July 2025 – July 2025</span>
          </div>
          <p className="desc">
            Working as a Full-Stack Development Intern, contributing to web application development across frontend, backend, database, testing and
            collaborative development workflows.
          </p>
          <ul className="resp">
            {RESP.map((r) => (
              <li key={r}>
                <Icon name="check" />
                {r}
              </li>
            ))}
          </ul>
          <ul className="badges">
            {BADGES.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

import { Icon } from "./Icons.jsx";
import { PROJECTS } from "../data.js";

export default function Projects({ onOpenCase }) {
  return (
    <section className="sec alt" id="projects">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="mask">
            <span>Projects</span>
          </h2>
          <p className="rv" style={{ "--d": "120ms" }}>
            Three projects that show how I build, from database to interface.
          </p>
        </header>
        <div className="stack" id="stack">
          {PROJECTS.map((p, i) => (
            <article className="card pcard" style={{ "--i": i }} key={p.title}>
              <div className="viz" dangerouslySetInnerHTML={{ __html: p.viz }} />
              <div className="pc-body">
                <div className="pc-meta">
                  <span className="tag">{p.cat}</span>
                  {p.when && <span>{p.when}</span>}
                </div>
                <h3>{p.title}</h3>
                <p className="pc-desc">{p.card}</p>
                <ul className="badges">
                  {p.badges.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul className="feat">
                  {p.features.slice(0, 6).map((f) => (
                    <li key={f}>
                      <Icon name="check" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pc-actions">
                  <button className="btn sm primary" type="button" onClick={() => onOpenCase(i)}>
                    View Case Study
                  </button>
                  {p.repo && (
                  <a className="btn sm ghost" href={p.repo} target="_blank" rel="noopener">
                     <Icon name="github" fill />
                      GitHub
                  </a>
)}
                  {p.demo && (
                    <a className="btn sm ghost" href={p.demo} target="_blank" rel="noopener">
                      <Icon name="arrow" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

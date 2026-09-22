import { useReveal } from "../hooks/useReveal.js";
import { Icon } from "./Icons.jsx";
import { GH, LINKEDIN } from "../data.js";

export default function Activity() {
  useReveal();
  return (
    <section className="sec alt" id="activity">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="mask">
            <span>Developer Activity</span>
          </h2>
          <p className="rv" style={{ "--d": "120ms" }}>
            Explore my code, projects and development work on GitHub.
          </p>
        </header>
        <div className="dev" data-stagger>
          <article className="card rv">
            <Icon name="github" fill className="big" />
            <h3>
              GitHub <span className="handle">@JPRAKASH-3</span>
            </h3>
            <p className="stackline">Full Stack Developer | React.js · Next.js · Node.js · Python · REST APIs · PostgreSQL</p>
            <a className="btn primary" href={GH} target="_blank" rel="noopener">
              View GitHub <Icon name="arrow" />
            </a>
          </article>
          <article className="card rv">
            <Icon name="linkedin" fill className="big" />
            <h3>LinkedIn</h3>
            <p>Connect with me on LinkedIn for professional opportunities and collaboration.</p>
            <a className="btn ghost" href={LINKEDIN} target="_blank" rel="noopener">
              Connect on LinkedIn <Icon name="arrow" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

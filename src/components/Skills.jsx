import { useReveal } from "../hooks/useReveal.js";
import { SKILLS } from "../data.js";

export default function Skills() {
  useReveal();
  return (
    <section className="sec alt" id="skills">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="mask">
            <span>Technical Skills</span>
          </h2>
          <p className="rv" style={{ "--d": "120ms" }}>
            The tools I use across the stack, from interface to database.
          </p>
        </header>
        <div className="skills" id="skillGrid">
          {SKILLS.map((s, si) => (
            <article className="card skill rv" style={{ "--d": `${(si % 3) * 70}ms` }} key={s.t}>
              <h3>{s.t}</h3>
              <div className="chips">
                {s.items.map((x, i) => {
                  const core = x.endsWith("*");
                  return (
                    <span className={`chip${core ? " core" : ""}`} style={{ "--i": i }} key={x}>
                      {core ? x.slice(0, -1) : x}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
        <p className="legend rv">
          <i></i>Highlighted skills are my core stack.
        </p>
      </div>
    </section>
  );
}

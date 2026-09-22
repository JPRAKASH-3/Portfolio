import { Icon } from "./Icons.jsx";

export default function Education() {
  return (
    <section className="sec" id="education">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="mask">
            <span>Education</span>
          </h2>
          <p className="rv" style={{ "--d": "120ms" }}>
            Degree, certifications and the foundations behind the work.
          </p>
        </header>
        <div className="edu-grid" data-stagger>
          <article className="card edu rv">
            <Icon name="cap" className="big" />
            <h3>Bachelor of Technology in Information Technology</h3>
            <p className="college">P.T. Lee Chengalvaraya Naicker College of Engineering and Technology</p>
            <p className="aff">Anna University Affiliated</p>
            <div className="edu-meta">
              <div>
                <b>7.97 / 10</b>
                <span>CGPA</span>
              </div>
              <div>
                <b>January 2026</b>
                <span>Completed</span>
              </div>
            </div>
          </article>
          <article className="card certs rv">
            <h3>Certifications</h3>
            <div className="cert">
              <b>Full Stack Web Development</b>
              <span>Novitech R&amp;D Pvt Ltd</span>
            </div>
            <div className="cert">
              <b>Data Analytics</b>
              <span>Novitech R&amp;D Pvt Ltd</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

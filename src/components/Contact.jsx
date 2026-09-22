import { Icon } from "./Icons.jsx";
import { EMAIL, GH, LINKEDIN, PHONE, PHONE_HREF } from "../data.js";

export default function Contact({ onResume, onSubmit }) {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="contact">
          <div>
            <header className="sec-head" style={{ marginBottom: 0 }}>
              <h2 className="mask">
                <span>Let’s Build Something Together</span>
              </h2>
              <p className="rv" style={{ "--d": "120ms" }}>
                Have a project, opportunity, or idea? Let’s talk.
              </p>
            </header>
            <div className="reach" data-stagger>
              <a className="rv" href={`mailto:${EMAIL}`}>
                <span className="ico">
                  <Icon name="mail" />
                </span>
                <div style={{ border: 0, padding: 0, background: "none" }}>
                  <small>Email</small>
                  <span>{EMAIL}</span>
                </div>
              </a>
              <a className="rv" href={`tel:${PHONE_HREF}`}>
                <span className="ico">
                  <Icon name="phone" />
                </span>
                <div style={{ border: 0, padding: 0, background: "none" }}>
                  <small>Phone</small>
                  <span>{PHONE}</span>
                </div>
              </a>
              <a className="rv" href={GH} target="_blank" rel="noopener">
                <span className="ico">
                  <Icon name="github" fill />
                </span>
                <div style={{ border: 0, padding: 0, background: "none" }}>
                  <small>GitHub</small>
                  <span>JPRAKASH-3</span>
                </div>
              </a>
              <a className="rv" href={LINKEDIN} target="_blank" rel="noopener">
                <span className="ico">
                  <Icon name="linkedin" fill />
                </span>
                <div style={{ border: 0, padding: 0, background: "none" }}>
                  <small>LinkedIn</small>
                  <span>Jayaprakash V</span>
                </div>
              </a>
            </div>
            <a className="btn ghost js-resume" style={{ marginTop: 22 }} href="#contact" onClick={onResume}>
              <Icon name="down" />
              Download Resume
            </a>
          </div>
          <form className="card form rv" id="form" noValidate onSubmit={onSubmit}>
            <div className="row">
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" autoComplete="name" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-subject">Subject</label>
              <input id="f-subject" name="subject" required placeholder="What is this about?" />
            </div>
            <div className="field">
              <label htmlFor="f-msg">Message</label>
              <textarea id="f-msg" name="message" required placeholder="Tell me about the role, project or idea."></textarea>
            </div>
            <button className="btn primary" type="submit">
              Send Message <Icon name="arrow" />
            </button>
            <p className="note">This opens your email app with the message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { Icon } from "./Icons.jsx";
import { PROJECTS } from "../data.js";

export default function CaseStudyDialog({ index, onClose }) {
  const dlgRef = useRef(null);
  const project = index != null ? PROJECTS[index] : null;

  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;
    if (project) {
      document.documentElement.classList.add("lock");
      if (!dlg.open) dlg.showModal();
    } else if (dlg.open) {
      dlg.close();
    }
  }, [project]);

  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;
    const onNativeClose = () => {
      document.documentElement.classList.remove("lock");
      onClose();
    };
    dlg.addEventListener("close", onNativeClose);
    return () => dlg.removeEventListener("close", onNativeClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === dlgRef.current || e.target.closest("[data-close]")) {
      dlgRef.current.close();
    }
  };

  return (
    <dialog id="case" ref={dlgRef} aria-labelledby="case-title" onClick={handleBackdropClick}>
      {project && (
        <div className="dlg">
          <div className="dlg-top">
            <div>
              <div className="pc-meta" style={{ margin: 0 }}>
                <span className="tag">{project.cat}</span>
                {project.when && <span>{project.when}</span>}
              </div>
              <h3 id="case-title">{project.title}</h3>
            </div>
            <button className="x-btn" type="button" data-close aria-label="Close case study">
              <Icon name="close" />
            </button>
          </div>
          <p className="lead">{project.long}</p>
          <h4>What it includes</h4>
          <ul className="feat">
            {project.features.map((f) => (
              <li key={f}>
                <Icon name="check" />
                {f}
              </li>
            ))}
          </ul>
          {project.flow && (
            <>
              <h4>Task workflow</h4>
              <div className="flow">
                {project.flow.map((f, k) => (
                  <span key={f}>
                    {k > 0 && <Icon name="arrow" />}
                    {f}
                  </span>
                ))}
              </div>
            </>
          )}
          <h4>Built with</h4>
          <ul className="badges">
            {project.stack.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="pc-actions">
            <a className="btn sm primary" href={project.repo} target="_blank" rel="noopener">
              <Icon name="github" fill />
              GitHub
            </a>
            {project.demo && (
              <a className="btn sm ghost" href={project.demo} target="_blank" rel="noopener">
                <Icon name="arrow" />
                Live Demo
              </a>
            )}
            <button className="btn sm ghost" type="button" data-close>
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}

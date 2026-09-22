import { lazy, Suspense, useCallback, useRef, useState } from "react";
import { IconSprite } from "./components/Icons.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Toast from "./components/Toast.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { useScrollFx, usePointerSpotlight, useHeroEntrance } from "./hooks/useScrollFx.js";
import { useSmoothScroll } from "./hooks/useSmoothScroll.js";
import { EMAIL } from "./data.js";

// Lazy-load everything below the fold — not needed for first paint
const Skills = lazy(() => import("./components/Skills.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
const Activity = lazy(() => import("./components/Activity.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const CaseStudyDialog = lazy(() => import("./components/CaseStudyDialog.jsx"));


const RESUME_PATH = "/assets/Jayaprakash_V_Resume.pdf";
const RESUME_NAME = "Jayaprakash_V_Resume.pdf";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [caseIndex, setCaseIndex] = useState(null);
  const [toastMsg, setToastMsg] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const toastTimer = useRef(0);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  const toast = useCallback((msg) => {
    setToastMsg(msg);
    setToastShow(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastShow(false), 4600);
  }, []);

  const handleResume = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await fetch(RESUME_PATH);
        if (!res.ok) throw new Error("fetch failed");
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = RESUME_NAME;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
      } catch (_) {
        toast("Download is unavailable here. Email " + EMAIL + " for a copy.");
      }
    },
    [toast]
  );

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const f = e.target;
      if (!f.checkValidity()) {
        f.reportValidity();
        return;
      }
      const d = Object.fromEntries(new FormData(f));
      const body = `${d.message}\n\n— ${d.name} (${d.email})`;
      const a = document.createElement("a");
      a.href = `mailto:${EMAIL}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast("Opening your email app. If nothing opens, write to " + EMAIL);
    },
    [toast]
  );

  const openCase = useCallback((i) => setCaseIndex(i), []);
  const closeCase = useCallback(() => setCaseIndex(null), []);

  // behavior hooks — run once the full page (including data-driven lists) has mounted
  useReveal();
  useScrollFx(setScrolled);
  usePointerSpotlight();
  useHeroEntrance();
  useSmoothScroll(closeMenu);

  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <IconSprite />
      <Nav open={menuOpen} onToggle={toggleMenu} scrolled={scrolled} />
      <main>
        <Hero />
        <About onResume={handleResume} />
        <Suspense fallback={null}>
          <Skills />
          <Experience />
          <Projects onOpenCase={openCase} />
          <Education />
          <Activity />
          <Contact onResume={handleResume} onSubmit={handleFormSubmit} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <CaseStudyDialog index={caseIndex} onClose={closeCase} />
      </Suspense>
      <Toast message={toastMsg} show={toastShow} />
    </>
  );
}

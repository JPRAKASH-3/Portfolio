import { useEffect } from "react";

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const reduceMotion = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

const offsetTop = () =>
  parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 80;

/**
 * Drives the scroll-progress bar, the "scrolled" nav background, the hero
 * parallax, scroll-spy active nav link, and the stacking-card effect on the
 * projects section. All are pure DOM/rAF work with no React state involved,
 * so this stays a single rAF-batched scroll listener exactly like the
 * original script.
 */
export function useScrollFx(setScrolled, deps = []) {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const prog = document.getElementById("prog");
    const par = document.getElementById("par");
    const quote = document.getElementById("quote");
    const cards = Array.from(document.querySelectorAll(".pcard"));
    const secs = Array.from(document.querySelectorAll("main section[id]"));
    const links = Array.from(document.querySelectorAll(".links a,.menu a:not(.btn)"));
    if (!nav || !prog || !secs.length) return;

    let ticking = false;
    let lastActive = "";
    let lastScrolled = null;

    function update() {
      ticking = false;
      const y = scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      prog.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);
      const isScrolled = y > 12;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled && setScrolled(isScrolled);
      }

      if (!reduceMotion() && par && quote && y < innerHeight * 1.3) {
        par.style.setProperty("--py", (y * 0.07).toFixed(1) + "px");
        quote.style.setProperty("--qy", (-y * 0.06).toFixed(1) + "px");
      }

      const probe = offsetTop() + innerHeight * 0.28;
      let cur = secs[0].id;
      for (const s of secs) {
        if (s.getBoundingClientRect().top <= probe) cur = s.id;
      }
      if (cur !== lastActive) {
        lastActive = cur;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
      }

      const stacked = innerWidth > 980 && innerHeight > 700;
      cards.forEach((c, i) => {
        if (!stacked || i === cards.length - 1) {
          c.style.removeProperty("transform");
          c.style.removeProperty("--dim");
          return;
        }
        const r = c.getBoundingClientRect();
        const n = cards[i + 1].getBoundingClientRect();
        const p = clamp((r.bottom - n.top) / r.height, 0, 1);
        c.style.transform = p > 0 ? `scale(${(1 - 0.045 * p).toFixed(4)})` : "";
        c.style.setProperty("--dim", (p * 0.5).toFixed(3));
      });
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    update();

    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Pointer spotlight highlight on `.card` elements. */
export function usePointerSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const c = e.target.closest && e.target.closest(".card");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", e.clientX - r.left + "px");
      c.style.setProperty("--my", e.clientY - r.top + "px");
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

/** Shows the hero on the very next paint — no font-wait delay. */
export function useHeroEntrance() {
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    // Use a double-rAF so the browser has one frame to apply initial styles
    // before we start animations, avoiding a flash of un-animated content.
    requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("ready")));
  }, []);
}

import { useEffect } from "react";

const reduceMotion = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

function countUp(el) {
  const to = parseFloat(el.dataset.to);
  const dec = +el.dataset.dec || 0;
  if (reduceMotion()) {
    el.textContent = to.toFixed(dec);
    return;
  }
  const t0 = performance.now();
  const dur = 1100;
  const step = (now) => {
    const t = Math.min(1, (now - t0) / dur);
    const v = to * (1 - Math.pow(1 - t, 3));
    el.textContent = v.toFixed(dec);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/**
 * Reveals .rv / .mask / .skill elements as they scroll into view, and
 * animates any .count elements inside a newly-revealed group. Runs once
 * the whole page (including data-driven lists) has mounted.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".rv,.mask,.skill"));
    if (!els.length) return;

    // stagger groups
    document.querySelectorAll("[data-stagger]").forEach((g) => {
      Array.from(g.querySelectorAll(".rv")).forEach((el, i) => {
        el.style.setProperty("--d", i * 70 + "ms");
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
          entry.target.querySelectorAll(".count").forEach(countUp);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

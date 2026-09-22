import { useEffect, useRef } from "react";

const reduceMotion = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

const offsetTop = () =>
  parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 80;

/**
 * Intercepts in-page anchor clicks and eases the scroll instead of jumping,
 * and closes the mobile menu (via closeMenu) before it does.
 */
export function useSmoothScroll(closeMenu) {
  const animRef = useRef(0);

  useEffect(() => {
    function smoothTo(y) {
      const start = scrollY;
      const dist = y - start;
      if (Math.abs(dist) < 2) return;
      if (reduceMotion()) {
        scrollTo(0, y);
        return;
      }
      const dur = Math.min(880, Math.max(420, Math.abs(dist) * 0.42));
      const t0 = performance.now();
      cancelAnimationFrame(animRef.current);
      const ease = (t) => 1 - Math.pow(1 - t, 4);
      const step = (now) => {
        const t = Math.min(1, (now - t0) / dur);
        scrollTo(0, start + dist * ease(t));
        if (t < 1) animRef.current = requestAnimationFrame(step);
      };
      animRef.current = requestAnimationFrame(step);
    }

    const cancel = () => cancelAnimationFrame(animRef.current);
    ["wheel", "touchstart", "keydown"].forEach((ev) => addEventListener(ev, cancel, { passive: true }));

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || a.classList.contains("js-resume")) return;
      const id = a.getAttribute("href").slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el && id) return;
      e.preventDefault();
      closeMenu && closeMenu();
      const y = !id || id === "home" ? 0 : el.getBoundingClientRect().top + scrollY - offsetTop() + 1;
      smoothTo(y);
      try {
        history.replaceState(null, "", "#" + id);
      } catch (_) {
        /* ignore */
      }
    };
    document.addEventListener("click", onClick);

    const onKeydown = (e) => {
      if (e.key === "Escape") closeMenu && closeMenu();
    };
    addEventListener("keydown", onKeydown);

    return () => {
      ["wheel", "touchstart", "keydown"].forEach((ev) => removeEventListener(ev, cancel));
      document.removeEventListener("click", onClick);
      removeEventListener("keydown", onKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeMenu]);
}

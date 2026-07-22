// ===== CSS-powered click feedback =====
// JS only sets the click position and toggles a class; the animation lives in CSS.
const animatedControls = document.querySelectorAll('[data-nav], .btn, .contact-btn, .nav-cta, .nav-burger');

animatedControls.forEach((el) => {
  el.addEventListener('click', (event) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--click-x', `${event.clientX - rect.left}px`);
    el.style.setProperty('--click-y', `${event.clientY - rect.top}px`);

    el.classList.remove('is-clicked');
    void el.offsetWidth;
    el.classList.add('is-clicked');

    window.setTimeout(() => {
      el.classList.remove('is-clicked');
    }, 620);
  });
});

// ===== Subtle mouse glow =====
const cursorGlow = document.querySelector('.cursor-glow');
const canUsePointerGlow = window.matchMedia('(pointer: fine)').matches
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (cursorGlow && canUsePointerGlow) {
  const updateGlow = (event) => {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  };

  window.addEventListener('pointermove', updateGlow, { passive: true });
  window.addEventListener('mousemove', updateGlow, { passive: true });
}

// ===== Mobile nav toggle =====
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

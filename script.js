const email = "jayaprakashv2410@email.com";

const projectDetails = {
  fraud: {
    kicker: "Backend + Analytics",
    title: "Real-Time Fraud Risk Scoring API",
    description:
      "A low-latency API for scoring payment transactions and explaining fraud risk patterns in a dashboard-friendly format.",
    points: [
      "Built REST endpoints with FastAPI and JWT authentication.",
      "Used PostgreSQL for transaction storage and Redis for low-latency caching.",
      "Created explainable scoring rules and dashboard metrics for fraud monitoring.",
      "Prepared the project for consistent deployment with Docker."
    ],
    subject: "Discussion%20about%20Fraud%20Risk%20Scoring%20API"
  },
  billing: {
    kicker: "Full Stack SaaS",
    title: "Multi-Tenant SaaS Billing Platform",
    description:
      "A subscription platform for managing tenants, plans, invoices, role-based access, and secure billing workflows.",
    points: [
      "Implemented tenant isolation for customer-specific data.",
      "Integrated Stripe payment workflows for subscriptions and billing.",
      "Built an admin dashboard for users, tenants, invoices, and plans.",
      "Added role-based access control for admin and user operations."
    ],
    subject: "Discussion%20about%20SaaS%20Billing%20Platform"
  },
  marketplace: {
    kicker: "Marketplace Application",
    title: "Amazon Clone Marketplace",
    description:
      "A multi-vendor marketplace with buyer, seller, and admin workflows for products, inventory, cart, checkout, and orders.",
    points: [
      "Developed product listing, search, cart, checkout, and order tracking flows.",
      "Implemented authentication and authorization for customers, sellers, and admins.",
      "Designed inventory management features for seller stock updates.",
      "Used PostgreSQL for structured data and Redis for faster marketplace responses."
    ],
    subject: "Discussion%20about%20Marketplace%20Project"
  }
};

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const navLinks = [...document.querySelectorAll(".nav-panel a[href^='#']")];
const themeToggle = document.querySelector("[data-theme-toggle]");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const projectCards = [...document.querySelectorAll("[data-category]")];
const modal = document.querySelector("[data-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalList = document.querySelector("[data-modal-list]");
const modalMail = document.querySelector("[data-modal-mail]");
const toast = document.querySelector("[data-toast]");
const backToTop = document.querySelector("[data-back-to-top]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

function closeMenu() {
  navPanel?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  showToast(`${nextTheme === "dark" ? "Dark" : "Light"} theme enabled`);
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", link.getAttribute("href"));
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
    });
    showToast(filter === "all" ? "Showing all projects" : `Showing ${filter} projects`);
  });
});

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = projectDetails[button.dataset.project];
    if (!data || !modal) return;
    modalKicker.textContent = data.kicker;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalList.innerHTML = data.points.map((point) => `<li>${point}</li>`).join("");
    modalMail.href = `mailto:${email}?subject=${data.subject}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector("[data-modal-close]")?.focus();
  });
});

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelector("[data-modal-close]")?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});

document.querySelector("[data-copy-email]")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email copied to clipboard");
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const sender = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const status = document.querySelector("[data-form-status]");

  if (!name || !sender || !message) {
    if (status) status.textContent = "Please fill all fields.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${sender}\n\n${message}`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  if (status) status.textContent = "Opening your email app with the message ready.";
  showToast("Email draft prepared");
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const sections = [...document.querySelectorAll("main section[id]")];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-42% 0px -50% 0px", threshold: 0.01 }
);

sections.forEach((section) => observer.observe(section));

function handleScroll() {
  const scrolled = window.scrollY > 16;
  header?.classList.toggle("scrolled", scrolled);
  backToTop?.classList.toggle("visible", window.scrollY > 640);
}

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

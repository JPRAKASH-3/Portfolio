export const EMAIL = "jayaprakashv2410@email.com";
export const GH = "https://github.com/JPRAKASH-3";
export const GH1 = "https://github.com/JPRAKASH-3/Amazon-Clone"
export const GH2 = "https://github.com/JPRAKASH-3/Project-Management-Dashboard"
export const LINKEDIN = "https://www.linkedin.com/in/jayaprakash-v-b809022a1";
export const PHONE = "+91 8148464476";
export const PHONE_HREF = "+918148464476";

export const SKILLS = [
  { t: "Frontend", items: ["React.js*", "Next.js*", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { t: "Backend", items: ["Node.js*", "Express.js*", "Python*", "FastAPI", "Flask", "REST APIs", "JWT", "MVC"] },
  { t: "Database", items: ["PostgreSQL*", "MySQL", "SQL", "Database Design", "SQL Queries"] },
  { t: "Programming & CS Fundamentals", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "SDLC"] },
  { t: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Docker"] },
  { t: "Engineering Practices", items: ["Agile/Scrum", "Unit Testing", "Debugging", "Performance Optimization", "Code Reviews"] }
];

const rows = (ys) =>
  ys
    .map(
      (y) =>
        `<rect class="l" x="138" y="${y}" width="70" height="7" rx="3.5"/><rect class="m" x="228" y="${y}" width="96" height="7" rx="3.5"/><rect class="at" x="404" y="${y - 4}" width="42" height="15" rx="7.5"/>`
    )
    .join("");

export const VIZ = {
  billing: `<svg viewBox="0 0 480 320" role="img" aria-label="Illustration of a multi-tenant billing dashboard"><rect class="p" x="18" y="18" width="90" height="284" rx="16"/><circle class="a" cx="63" cy="58" r="15"/><circle class="m" cx="63" cy="102" r="15"/><circle class="m" cx="63" cy="146" r="15"/><rect class="l" x="38" y="186" width="50" height="6" rx="3"/><rect class="l" x="38" y="202" width="34" height="6" rx="3"/><rect class="p" x="122" y="18" width="340" height="42" rx="12"/><rect class="l" x="138" y="35" width="96" height="8" rx="4"/><rect class="at" x="398" y="29" width="50" height="20" rx="10"/><rect class="p" x="122" y="74" width="106" height="78" rx="14"/><rect class="p" x="238" y="74" width="106" height="78" rx="14"/><rect class="p" x="354" y="74" width="108" height="78" rx="14"/><rect class="l" x="136" y="90" width="42" height="6" rx="3"/><rect class="a" x="136" y="110" width="64" height="16" rx="5"/><rect class="l" x="252" y="90" width="42" height="6" rx="3"/><rect class="m" x="252" y="110" width="64" height="16" rx="5"/><rect class="l" x="368" y="90" width="42" height="6" rx="3"/><rect class="m" x="368" y="110" width="64" height="16" rx="5"/><rect class="p" x="122" y="166" width="340" height="136" rx="14"/>${rows([190, 218, 246, 274])}</svg>`,
  market: `<svg viewBox="0 0 480 320" role="img" aria-label="Illustration of a product grid with a cart">${[0, 1]
    .map((r) =>
      [0, 1, 2]
        .map((c) => {
          const x = 22 + c * 150,
            y = 32 + r * 138,
            a = r === 0 && c === 0;
          return `<rect class="p" x="${x}" y="${y}" width="140" height="126" rx="14"/><rect class="m" x="${x + 10}" y="${y + 10}" width="120" height="62" rx="10"/><rect class="l" x="${x + 10}" y="${y + 84}" width="84" height="7" rx="3.5"/><rect class="${a ? "a" : "at"}" x="${x + 10}" y="${y + 100}" width="42" height="11" rx="5.5"/>`;
        })
        .join("")
    )
    .join("")}<circle class="a" cx="446" cy="26" r="18"/><path d="M437 20h3l3 10h9l3-7h-14" fill="none" stroke="#1B1103" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="444" cy="34" r="1.6" fill="#1B1103"/><circle cx="452" cy="34" r="1.6" fill="#1B1103"/></svg>`,
  vision: `<svg viewBox="0 0 480 320" role="img" aria-label="Illustration of face detection on a camera feed"><rect class="p" x="18" y="18" width="444" height="284" rx="18"/><g class="as"><path d="M40 62V44a8 8 0 018-8h18M414 36h18a8 8 0 018 8v18M440 258v18a8 8 0 01-8 8h-18M66 284H48a8 8 0 01-8-8v-18"/></g><circle class="m" cx="170" cy="150" r="38"/><path class="m" d="M96 262c4-44 34-64 74-64s70 20 74 64z"/><circle class="m" cx="334" cy="168" r="29"/><path class="m" d="M278 262c3-34 26-50 56-50s53 16 56 50z"/><g class="as"><path d="M118 132V108a8 8 0 018-8h24M190 100h24a8 8 0 018 8v24M222 176v24a8 8 0 01-8 8h-24M150 208h-24a8 8 0 01-8-8v-24"/><path d="M296 152v-16a6 6 0 016-6h16M350 130h16a6 6 0 016 6v16M372 184v16a6 6 0 01-6 6h-16M318 206h-16a6 6 0 01-6-6v-16"/></g><rect class="at" x="126" y="82" width="88" height="14" rx="7"/><rect class="at" x="302" y="112" width="64" height="12" rx="6"/><rect class="a scan" x="34" y="44" width="412" height="2.4" rx="1.2" opacity=".75"/></svg>`,
  kanban: `<svg viewBox="0 0 480 320" role="img" aria-label="Illustration of a kanban board">${[
    ["Backlog", 3],
    ["In Progress", 2],
    ["Review", 2],
    ["Done", 3]
  ]
    .map(([n, k], i) => {
      const x = 18 + i * 116;
      return (
        `<rect class="p" x="${x}" y="18" width="106" height="284" rx="14"/><text x="${x + 12}" y="42">${n}</text>` +
        Array.from({ length: k }, (_, j) => {
          const y = 58 + j * 74,
            hl = i === 1 && j === 0;
          return `<rect class="${hl ? "at" : "p"}" x="${x + 10}" y="${y}" width="86" height="64" rx="10"${hl ? ' style="stroke:var(--accent)"' : ""}/><rect class="l" x="${x + 20}" y="${y + 14}" width="56" height="6" rx="3"/><rect class="m" x="${x + 20}" y="${y + 28}" width="40" height="6" rx="3"/><circle class="${hl ? "a" : "m"}" cx="${x + 28}" cy="${y + 50}" r="6"/>`;
        }).join("")
      );
    })
    .join("")}</svg>`,
  fraud: `<svg viewBox="0 0 480 320" role="img" aria-label="Illustration of a risk chart, gauge and transaction list"><rect class="p" x="18" y="18" width="296" height="176" rx="16"/><path class="g" d="M34 84H298"/><path class="as" d="M34 158L72 146L108 152L146 124L184 134L222 98L256 44L290 104"/><circle class="a" cx="256" cy="44" r="6"/><rect class="p" x="328" y="18" width="134" height="176" rx="16"/><path d="M350 140A44 44 0 01438 140" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="10" stroke-linecap="round"/><path class="as" style="stroke-width:10" d="M350 140A44 44 0 01421 105"/><rect class="l" x="366" y="156" width="56" height="8" rx="4"/><rect class="m" x="376" y="172" width="36" height="6" rx="3"/><rect class="p" x="18" y="208" width="444" height="94" rx="16"/>${[226, 250, 274]
    .map(
      (y, i) =>
        `<circle class="${i === 1 ? "a" : "m"}" cx="42" cy="${y + 4}" r="6"/><rect class="l" x="60" y="${y}" width="96" height="7" rx="3.5"/><rect class="m" x="190" y="${y}" width="120" height="7" rx="3.5"/><rect class="${i === 1 ? "at" : "m"}" x="400" y="${y - 4}" width="44" height="15" rx="7.5"/>`
    )
    .join("")}</svg>`
};

export const PROJECTS = [
  
  {
    title: "Amazon Clone Marketplace",
    cat: "Full Stack E-Commerce",
    when: "June 2025 – October 2025",
    viz: VIZ.market,
    card: "Full-stack e-commerce marketplace with product discovery, search, cart, checkout and order management.",
    long: "A full-stack e-commerce marketplace inspired by modern online shopping platforms, featuring product discovery, search, filtering, shopping cart, checkout and order management.",
    badges: ["React.js", "REST APIs", "Relational Database", "Authentication"],
    stack: ["React.js", "REST APIs", "Relational Database", "Authentication"],
    features: ["Product Catalog", "Product Listings", "Search", "Filtering", "Shopping Cart", "Checkout", "Orders", "REST APIs", "Database Integration"],
    repo: GH1
  },
  {
    title: "Smart Student Attendance Monitoring System",
    cat: "Computer Vision / Full Stack / EdTech",
    when: "Final-year project · Nov 2025 – Apr 2026",
    viz: VIZ.vision,
    card: "A computer-vision-based attendance system combining face detection, recognition, tracking and centralized dashboards to automate student attendance workflows.",
    long: "A smart attendance monitoring system (SSAMS) designed to automate student attendance using computer vision, face recognition and centralized attendance management.",
    badges: ["Python", "RetinaFace", "ArcFace", "DeepSORT", "FAISS", "Raspberry Pi"],
    stack: ["Python", "Raspberry Pi", "CCTV / IP Cameras", "RetinaFace", "ArcFace", "FaceAnalysis", "DeepSORT", "Liveness Detection", "FAISS", "Backend APIs"],
    features: ["Student Registration", "Face Recognition", "Attendance Detection", "Face Tracking", "Liveness Detection", "Attendance Management", "Teacher Dashboard", "Admin Dashboard", "Student Dashboard"],
    
  },
  {
    title: "Project Management Dashboard",
    cat: "Full Stack / Productivity",
    when: "July 2026 – August 2026",
    viz: VIZ.kanban,
    card: "A modern project management dashboard with task workflows, milestones, users, role-based authentication and interactive project tracking.",
    long: "A full-stack project management platform for organizing projects, users, tasks, milestones and workflow progress through an interactive dashboard.",
    badges: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Docker"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Docker"],
    features: ["Project Management", "Task Management", "Kanban Board", "Users", "Milestones", "Role-Based Authentication", "Dashboard", "Task Status Tracking", "REST APIs"],
    flow: ["Backlog", "In Progress", "Review", "Done"],
    repo: GH2
  },
];

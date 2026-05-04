// ---------- DATA ----------
const quests = [
  {
    icon: "⚒",
    title: "Apprentice of the Iron Foundry",
    period: "Jul 2015 — Jan 2016",
    setting: "ON Semiconductor Philippines · The Forge of Silicon",
    meta: [
      ["Mission", "Master technical discipline in high-precision environments"],
      ["Challenges", "Zero-margin errors and fragile process chains"],
      ["Rewards", "Systems mindset, rigor, reliability foundations"],
    ],
  },
  {
    icon: "🛡",
    title: "Guardian of the Medical Citadel",
    period: "Feb 2016 — Dec 2018",
    setting: "Software Laboratories Inc. at St. Luke's Medical Center",
    meta: [
      ["Mission", "Build and maintain mission-critical healthcare applications"],
      ["Challenges", "Legacy slowdowns, functionality risk, operational continuity"],
      ["Rewards", "JavaScript, Thymeleaf, optimization, stakeholder communication"],
    ],
  },
  {
    icon: "📜",
    title: "Cartographer of Risk Gateways",
    period: "Dec 2018 — Aug 2019",
    setting: "Yondu, Inc. · Insurance kingdoms frontier",
    meta: [
      ["Mission", "Build underwriting applications, insurance APIs, batch engines"],
      ["Challenges", "Strict client specs, performance bottlenecks, evolving requirements"],
      ["Rewards", "Microservices, Spring Boot, API craftsmanship, batch processing"],
    ],
  },
  {
    icon: "🗺",
    title: "Squad Captain of Integrated Realms",
    period: "Aug 2019 — Oct 2021",
    setting: "Accenture · Philippines, Japan, Singapore campaigns",
    meta: [
      ["Mission", "Lead developers, build microservices, connect payment gateways"],
      ["Challenges", "Multi-region delivery and complex client integration paths"],
      ["Rewards", "Team leadership, sequence design, enterprise integration strategy"],
    ],
  },
  {
    icon: "☁",
    title: "Warden of the Cloud Kingdom",
    period: "Oct 2021 — Apr 2024",
    setting: "Manulife IT Delivery Center Asia · Makati",
    meta: [
      ["Mission", "Migrate PCF services to Azure Kubernetes; APIs to Azure API Management"],
      ["Challenges", "Platform migration risk, identity security, regional integration"],
      ["Rewards", "AKS, APIM, AAD auth, Salesforce/Dynamics integration, mentorship"],
    ],
  },
  {
    icon: "🔥",
    title: "The Reflection Chapter",
    period: "Apr 2024 — Oct 2024",
    setting: "Personal goal pursuit · The Silent Camp",
    meta: [
      ["Mission", "Recalibrate, recover, sharpen long-range focus"],
      ["Rewards", "Strategic clarity and renewed momentum"],
    ],
  },
  {
    icon: "🏦",
    title: "Marshal of Releases &amp; Standards",
    period: "Nov 2024 — Aug 2025",
    setting: "Metrobank · On-site core banking command",
    meta: [
      ["Mission", "Align leadership, mentor teams, govern architecture quality"],
      ["Challenges", "Legacy replacement, defect storms, workflow inconsistency"],
      ["Rewards", "GitFlow rollout, coding standards, release governance"],
    ],
  },
  {
    icon: "🏰",
    title: "Co-Founder of Nexus Elixir",
    period: "Dec 2024 — Apr 2026",
    setting: "Nexus Elixir Solutions Corp. · Startup frontier",
    meta: [
      ["Mission", "Lead technology direction; architect Azure cloud infrastructure"],
      ["Challenges", "Early-stage uncertainty, architecture tradeoffs, resource constraints"],
      ["Rewards", "IT strategy, solutions engineering, executive technical vision"],
    ],
  },
  {
    icon: "💠",
    title: "Architect of Digital Gold",
    period: "Aug 2025 — Present",
    setting: "GCash · High-scale financial realm",
    meta: [
      ["Mission", "Shape scalable solutions as Manager — Junior Solutions Architect"],
      ["Challenges", "Rapid growth complexity and evolving architecture demands"],
      ["Rewards", "Kubernetes at scale, RAG-powered design patterns, architecture progression"],
    ],
  },
];

const skills = [
  {
    title: "Cloud & Platform",
    shieldColor: "#2c5fa3",
    items: ["Azure", "AKS", "APIM", "PCF"],
  },
  {
    title: "Backend Forging",
    shieldColor: "#5e1d12",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs"],
  },
  {
    title: "Architecture",
    shieldColor: "#3d6b3d",
    items: ["Solutions Design", "System Integration", "RAG Patterns"],
  },
  {
    title: "Leadership",
    shieldColor: "#6b4a8c",
    items: ["Mentorship", "Governance", "GitFlow", "Standards"],
  },
  {
    title: "Languages",
    shieldColor: "#a06820",
    items: ["Java", "TypeScript", "Python"],
  },
  {
    title: "AI Mastery",
    shieldColor: "#1f4e7a",
    items: ["Prompt Engineering", "AI-Assisted Dev", "RAG", "LLM Workflows"],
  },
  {
    title: "Domains",
    shieldColor: "#2a1810",
    items: ["FinTech", "Banking", "Healthcare", "Insurance"],
  },
];

// ---------- RENDER ----------
function shieldSvg(color) {
  return `
    <svg class="skill-shield" viewBox="0 0 52 56" aria-hidden="true">
      <path d="M26 3 L48 10 V28 C48 40 38 50 26 53 C14 50 4 40 4 28 V10 Z"
        fill="${color}" stroke="#2a1810" stroke-width="2" stroke-linejoin="round" />
      <path d="M26 3 V53 M4 18 H48" stroke="#d4a93a" stroke-width="1.5" opacity="0.7" />
      <circle cx="26" cy="18" r="3" fill="#f0d878" />
    </svg>
  `;
}

function renderQuests() {
  const list = document.getElementById("quest-timeline");
  if (!list) return;
  list.innerHTML = quests
    .map(
      (q) => `
      <li class="quest">
        <span class="quest-badge" aria-hidden="true">${q.icon}</span>
        <h3 class="quest-title">${q.title}</h3>
        <p class="quest-period">${q.period}</p>
        <p class="quest-setting">${q.setting}</p>
        <ul class="quest-meta">
          ${q.meta
            .map(
              ([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`
            )
            .join("")}
        </ul>
      </li>
    `
    )
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skill-grid");
  if (!grid) return;
  grid.innerHTML = skills
    .map(
      (s) => `
      <div class="skill-card">
        ${shieldSvg(s.shieldColor)}
        <h3>${s.title}</h3>
        <ul class="skill-list">
          ${s.items.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");
}

// ---------- NAVIGATION ----------
const pages = Array.from(document.querySelectorAll(".page"));
const runes = Array.from(document.querySelectorAll(".rune"));

function showPage(target) {
  pages.forEach((p) => {
    if (p.id === target) {
      p.hidden = false;
    } else {
      p.hidden = true;
    }
  });
  runes.forEach((r) => {
    r.classList.toggle("active", r.dataset.target === target);
  });
  if (location.hash !== `#${target}`) {
    history.replaceState(null, "", `#${target}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-target]");
  if (!trigger) return;
  const target = trigger.dataset.target;
  if (!target) return;
  e.preventDefault();
  showPage(target);
});

// ---------- INIT ----------
renderQuests();
renderSkills();

const initial = (location.hash || "#home").replace("#", "");
const validInitial = pages.some((p) => p.id === initial) ? initial : "home";
showPage(validInitial);

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

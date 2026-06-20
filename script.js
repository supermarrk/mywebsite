// ==============================
// DATA
// ==============================

const experiences = [
  {
    company: "GCash",
    role: "Manager — Junior Solutions Architect",
    period: "Aug 2025 — Present",
    location: "Manila, PH",
    tech: ["Kubernetes", "Spring Boot", "Azure", "RAG", "Microservices", "Java"],
    highlights: [
      "Shaping architecture decisions for a platform serving tens of millions of Filipinos",
      "Driving RAG-powered and AI-enhanced system design patterns across product teams",
      "Leading architecture governance and enforcing technical standards at scale",
    ],
  },
  {
    company: "Nexus Elixir Solutions Corp.",
    role: "Co-Founder & CTO",
    period: "Dec 2024 — Apr 2026",
    location: "Manila, PH",
    tech: ["Azure", "Spring Boot", "TypeScript", "C#", "Solutions Architecture"],
    highlights: [
      "Co-founded and led full technology direction for an early-stage solutions company",
      "Architected Azure cloud infrastructure from the ground up under resource constraints",
      "Built and mentored the founding engineering team, establishing process and culture",
    ],
  },
  {
    company: "Metrobank",
    role: "Lead Software Engineer",
    period: "Nov 2024 — Aug 2025",
    location: "Manila, PH",
    tech: ["Java", "Spring Boot", "GitFlow", "Core Banking", "REST APIs"],
    highlights: [
      "Rolled out GitFlow across engineering teams, eliminating branch and merge conflicts",
      "Enforced coding standards and architecture quality review across multiple squads",
      "Deployed new core banking APIs supporting critical financial transaction workflows",
    ],
  },
  {
    company: "Manulife IT Delivery Center Asia",
    role: "Senior Software Engineer",
    period: "Oct 2021 — Apr 2024",
    location: "Makati, PH",
    tech: ["Azure Kubernetes (AKS)", "Azure APIM", "Azure AD", "Salesforce", "Dynamics 365", "Java"],
    highlights: [
      "Migrated PCF-hosted services to Azure Kubernetes Service — zero downtime across regions",
      "Moved legacy APIs to Azure API Management with Azure AD security and rate limiting",
      "Integrated Salesforce and Dynamics 365 across HK and SEA business units",
      "Mentored junior engineers and led bi-weekly architecture review sessions",
    ],
  },
  {
    company: "Accenture",
    role: "Technical Lead",
    period: "Aug 2019 — Oct 2021",
    location: "PH · JP · SG",
    tech: ["Java", "Spring Boot", "Microservices", "Payment Gateways", "MySQL", "REST APIs"],
    highlights: [
      "Led cross-functional engineering squads across Philippines, Japan, and Singapore",
      "Designed and delivered microservice integration for enterprise payment gateway systems",
      "Produced sequence diagrams and architecture flows for complex multi-region integrations",
    ],
  },
  {
    company: "Yondu, Inc.",
    role: "Software Developer",
    period: "Dec 2018 — Aug 2019",
    location: "Manila, PH",
    tech: ["Java", "Spring Boot", "REST APIs", "Batch Processing", "Insurance Domain"],
    highlights: [
      "Built underwriting applications and insurance APIs for enterprise insurance clients",
      "Engineered batch processing engines handling large-scale financial datasets",
      "Delivered against strict client specifications and compliance requirements",
    ],
  },
  {
    company: "Software Laboratories Inc. · St. Luke's Medical Center",
    role: "Software Developer",
    period: "Feb 2016 — Dec 2018",
    location: "Manila, PH",
    tech: ["JavaScript", "Java", "Thymeleaf", "Spring MVC", "MySQL"],
    highlights: [
      "Built and maintained mission-critical hospital information systems",
      "Optimized legacy application performance, significantly reducing system load times",
      "Collaborated directly with hospital departments to ensure 24/7 operational continuity",
    ],
  },
  {
    company: "ON Semiconductor Philippines",
    role: "Process / Technology Engineer",
    period: "Jul 2015 — Jan 2016",
    location: "Manila, PH",
    tech: ["Process Engineering", "Systems Analysis", "Data Analysis"],
    highlights: [
      "Applied zero-margin engineering discipline in high-precision semiconductor manufacturing",
      "Built the foundational systems thinking and rigor carried throughout an engineering career",
    ],
  },
];

const skills = [
  {
    icon: "◈",
    category: "Architecture",
    items: ["Solutions Architecture", "System Integration", "Microservices Design", "API Strategy", "Domain-Driven Design", "RAG Patterns"],
  },
  {
    icon: "⬡",
    category: "Cloud & Platform",
    items: ["Microsoft Azure", "Azure Kubernetes (AKS)", "Azure API Management", "Azure AD / Entra ID", "PCF", "Kubernetes"],
  },
  {
    icon: "{ }",
    category: "Backend Engineering",
    items: ["Java · Spring Boot", "TypeScript · Node.js", "C#", "REST API Design", "Batch Processing", "Microservices"],
  },
  {
    icon: "⟳",
    category: "DevOps & Delivery",
    items: ["GitFlow", "Release Governance", "CI/CD Pipelines", "Coding Standards", "Architecture Review Boards"],
  },
  {
    icon: "◎",
    category: "Leadership",
    items: ["Engineering Mentorship", "Team Leadership", "Architecture Governance", "Stakeholder Management", "Technical Strategy"],
  },
  {
    icon: "✦",
    category: "AI & Emerging Tech",
    items: ["Prompt Engineering", "AI-Assisted Development", "RAG Architectures", "LLM Workflow Design", "AI-Augmented Engineering"],
  },
];

const certifications = [
  {
    abbr: "CKAD",
    name: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    year: "2025",
    color: "#326ce5",
    verifyUrl: "https://training.linuxfoundation.org/certification/verify",
  },
  {
    abbr: "AZ-204",
    name: "Azure Developer Associate",
    issuer: "Microsoft",
    year: "",
    color: "#0078d4",
    verifyUrl: "https://learn.microsoft.com/en-us/users/markanthonypajunar-1518/credentials/b5bbeb3448455eb7",
  },
  {
    abbr: "AZ-900",
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    year: "",
    color: "#0078d4",
    verifyUrl: "https://learn.microsoft.com/en-us/users/markanthonypajunar-1518/credentials/597aa1da5cbcdd10",
  },
  {
    abbr: "AI-900",
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "",
    color: "#5c2d91",
    verifyUrl: "https://learn.microsoft.com/en-us/users/markanthonypajunar-1518/credentials/990f95e400d6dec0",
  },
];

const services = [
  {
    icon: "◈",
    title: "Solutions Architecture",
    desc: "Designing resilient, scalable systems for complex enterprise domains — from whiteboard to production-ready architecture.",
  },
  {
    icon: "→",
    title: "Digital Transformation",
    desc: "Guiding organizations through modernization: legacy migration, cloud adoption, platform re-engineering, and strategic roadmapping.",
  },
  {
    icon: "◎",
    title: "Technical Leadership",
    desc: "Fractional CTO and technical advisory for startups and scale-ups building their engineering foundations and culture.",
  },
  {
    icon: "⬡",
    title: "Cloud Architecture",
    desc: "Azure-native architecture design, Kubernetes platforms, API management strategies, and cloud governance frameworks.",
  },
  {
    icon: "{ }",
    title: "Java Mentoring",
    desc: "Hands-on mentoring for developers mastering Java, Spring Boot, microservices, and enterprise backend engineering.",
  },
  {
    icon: "✦",
    title: "System Design Reviews",
    desc: "Independent architecture reviews that surface hidden risks, improve scalability, and align systems with business goals.",
  },
];

// ==============================
// RENDER
// ==============================

function renderExperiences() {
  const el = document.getElementById("experience-list");
  if (!el) return;

  el.innerHTML = experiences.map((exp, i) => `
    <div class="exp-card" data-index="${i}">
      <div class="exp-header" role="button" tabindex="0" aria-expanded="false">
        <span class="exp-number">${String(i + 1).padStart(2, "0")}</span>
        <span class="exp-company">${exp.company}</span>
        <div class="exp-meta">
          <span class="exp-role">${exp.role}</span>
          <span class="exp-period">${exp.period} &nbsp;·&nbsp; ${exp.location}</span>
        </div>
        <span class="exp-arrow">↓</span>
      </div>
      <div class="exp-body">
        <div class="exp-body-inner">
          <div>
            <p class="exp-body-label">Key Impact</p>
            <div class="exp-highlights">
              ${exp.highlights.map(h => `<p class="exp-highlight">${h}</p>`).join("")}
            </div>
          </div>
          <div>
            <p class="exp-body-label">Technologies</p>
            <div class="exp-tech-list">
              ${exp.tech.map(t => `<span class="exp-tech-tag">${t}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".exp-header").forEach(header => {
    const toggle = () => {
      const card = header.closest(".exp-card");
      const body = card.querySelector(".exp-body");
      const isOpen = card.classList.contains("open");

      document.querySelectorAll(".exp-card.open").forEach(c => {
        c.classList.remove("open");
        c.querySelector(".exp-body").style.maxHeight = "0";
        c.querySelector(".exp-header").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        card.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
        header.setAttribute("aria-expanded", "true");
      }
    };

    header.addEventListener("click", toggle);
    header.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
}

function renderSkills() {
  const el = document.getElementById("skills-grid");
  if (!el) return;
  el.innerHTML = skills.map(s => `
    <div class="skill-card reveal-up">
      <span class="skill-icon">${s.icon}</span>
      <h3 class="skill-category">${s.category}</h3>
      <div class="skill-items">
        ${s.items.map(item => `<span class="skill-item">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderCertifications() {
  const el = document.getElementById("certs-grid");
  if (!el) return;
  el.innerHTML = certifications.map(c => `
    <a class="cert-card reveal-up" href="${c.verifyUrl}" target="_blank" rel="noreferrer">
      <div class="cert-badge" style="background:${c.color}1a; color:${c.color}; border:1px solid ${c.color}40;">
        ${c.abbr}
      </div>
      <h3 class="cert-name">${c.name}</h3>
      <p class="cert-issuer">${c.issuer}${c.year ? " · " + c.year : ""}</p>
      <span class="cert-verify">Verify Credential →</span>
    </a>
  `).join("");
}

function renderServices() {
  const el = document.getElementById("services-grid");
  if (!el) return;
  el.innerHTML = services.map(s => `
    <div class="service-card reveal-up">
      <span class="service-icon">${s.icon}</span>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
    </div>
  `).join("");
}

// ==============================
// HERO CANVAS — PARTICLE FIELD
// ==============================

function initCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, pts;

  const resize = () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    pts = Array.from({ length: 90 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.1 + 0.2,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      a: Math.random() * 0.45 + 0.08,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, W, H);

    // Subtle blue glow at top-left (like a distant light source)
    const g = ctx.createRadialGradient(W * 0.15, H * 0.2, 0, W * 0.15, H * 0.2, W * 0.65);
    g.addColorStop(0, "rgba(0,80,220,0.055)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    pts.forEach(p => {
      p.x = (p.x + p.vx + W) % W;
      p.y = (p.y + p.vy + H) % H;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.a})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });
  draw();
}

// ==============================
// NAV SCROLL + ACTIVE LINKS
// ==============================

function initNav() {
  const nav    = document.getElementById("nav");
  const burger = document.getElementById("nav-burger");
  const menu   = document.getElementById("mobile-menu");
  const links  = document.querySelectorAll(".mobile-link");

  const closeMenu = () => {
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      burger.classList.add("open");
      burger.setAttribute("aria-expanded", "true");
      menu.classList.add("open");
      menu.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  });

  links.forEach(l => l.addEventListener("click", closeMenu));

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
    updateActive();
  }, { passive: true });
}

function updateActive() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}

// ==============================
// SCROLL PROGRESS BAR
// ==============================

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    bar.style.width = `${Math.min(pct * 100, 100)}%`;
  }, { passive: true });
}

// ==============================
// SCROLL REVEAL
// ==============================

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });

  const observe = () =>
    document.querySelectorAll(".reveal-up, .reveal-left").forEach(el => io.observe(el));

  // Hero elements reveal immediately (they're in-viewport on load)
  document.querySelectorAll(".hero .reveal-up").forEach(el => {
    requestAnimationFrame(() => el.classList.add("revealed"));
  });

  observe();
  // Re-observe after dynamic content renders
  setTimeout(observe, 200);
}

// ==============================
// HERO PARALLAX
// ==============================

function initParallax() {
  const content = document.querySelector(".hero-content");
  if (!content) return;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      content.style.transform = `translateY(${y * 0.22}px)`;
      content.style.opacity   = `${1 - y / (window.innerHeight * 0.75)}`;
    }
  }, { passive: true });
}

// ==============================
// SMOOTH SCROLL
// ==============================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ==============================
// BOOT
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderExperiences();
  renderSkills();
  renderCertifications();
  renderServices();

  initCanvas();
  initNav();
  initScrollProgress();
  initReveal();
  initParallax();
  initSmoothScroll();
});

(() => {
  const P = PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6m-3 3 3 3 3-3"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>'
  };

  /* ---------- Fill content ---------- */
  $$("[data-name]").forEach((el) => (el.textContent = P.name));
  $("[data-initials]").textContent = P.initials;
  $("[data-tagline]").textContent = P.tagline;
  $("[data-year]").textContent = new Date().getFullYear();
  if (!P.available) $("[data-available]").remove();
  if (P.contact.resume) $("[data-resume]").href = P.contact.resume;
  else $("[data-resume]").remove();
  if (P.photo) $("[data-photo]").src = P.photo;
  else $("[data-photo]").remove();

  $("[data-about]").innerHTML = P.about.map((p) => `<p class="reveal">${esc(p)}</p>`).join("");
  $("[data-stats]").innerHTML = P.stats
    .map((s) => `<div class="stat reveal"><strong data-count="${s.value}" data-suffix="${esc(s.suffix)}">${s.value}${esc(s.suffix)}</strong><span>${esc(s.label)}</span></div>`)
    .join("");

  $("[data-skills]").innerHTML = P.skills
    .map((g) => `<div class="skill-card reveal"><h3>${esc(g.group)}</h3><div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`)
    .join("");

  $("[data-projects]").innerHTML = P.projects
    .map((p, i) => {
      const links = [
        p.github && `<a href="${esc(p.github)}" target="_blank" rel="noopener">${icons.github}Code</a>`,
        p.live && `<a href="${esc(p.live)}" target="_blank" rel="noopener">${icons.ext}Live demo</a>`
      ].filter(Boolean).join("");
      return `<article class="project reveal">
        <span class="project-num">${String(i + 1).padStart(2, "0")}${p.label ? " · " + esc(p.label) : ""}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="project-links">${links}</div>
      </article>`;
    })
    .join("");

  $("[data-timeline]").innerHTML = P.timeline
    .map((t) => `<li class="reveal"><span class="when">${esc(t.when)}</span><h3>${esc(t.title)}</h3><div class="place">${esc(t.place)}</div>${t.detail ? `<p class="detail">${esc(t.detail)}</p>` : ""}</li>`)
    .join("");

  $("[data-certs]").innerHTML = P.certifications
    .map((c) => {
      const inner = `<span class="cert-icon">${icons.award}</span><span class="cert-name">${esc(c.name)}</span>${
        c.status ? `<span class="cert-status">${esc(c.status)}</span>` : c.url ? `<span class="cert-go">${icons.ext}</span>` : ""}`;
      const cls = `cert reveal${c.featured ? " featured" : ""}`;
      return c.url
        ? `<a class="${cls}" href="${esc(c.url)}" target="_blank" rel="noopener" title="View certificate">${inner}</a>`
        : `<div class="${cls}">${inner}</div>`;
    })
    .join("");

  const c = P.contact;
  $("[data-contact]").innerHTML = [
    c.email && `<a class="contact-link main" href="mailto:${esc(c.email)}">${icons.mail}${esc(c.email)}</a>`,
    c.linkedin && `<a class="contact-link" href="${esc(c.linkedin)}" target="_blank" rel="noopener">${icons.linkedin}LinkedIn</a>`,
    c.github && `<a class="contact-link" href="${esc(c.github)}" target="_blank" rel="noopener">${icons.github}GitHub</a>`,
    c.resume && `<a class="contact-link" href="${esc(c.resume)}" download>${icons.doc}Download CV</a>`
  ].filter(Boolean).join("");

  /* ---------- Typing effect ---------- */
  const typed = $(".typed");
  if (reduced) typed.textContent = P.roles[0];
  else {
    let r = 0, ch = 0, del = false;
    const tick = () => {
      const word = P.roles[r];
      ch += del ? -1 : 1;
      typed.textContent = word.slice(0, ch);
      let wait = del ? 45 : 90;
      if (!del && ch === word.length) { del = true; wait = 1600; }
      else if (del && ch === 0) { del = false; r = (r + 1) % P.roles.length; wait = 350; }
      setTimeout(tick, wait);
    };
    setTimeout(tick, 900);
  }

  /* ---------- Reveal on scroll (staggered) ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const siblings = [...e.target.parentElement.children].filter((n) => n.classList.contains("reveal"));
      e.target.style.transitionDelay = `${Math.min(siblings.indexOf(e.target), 6) * 90}ms`;
      e.target.classList.add("visible");
      const counter = e.target.querySelector("[data-count]");
      if (counter) countUp(counter);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach((el) => io.observe(el));

  function countUp(el) {
    const end = +el.dataset.count, suffix = el.dataset.suffix, dur = 1400, t0 = performance.now();
    const step = (t) => {
      const k = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    reduced ? (el.textContent = end + suffix) : requestAnimationFrame(step);
  }

  /* ---------- Nav: scrolled state, progress, active link ---------- */
  const nav = $(".nav"), bar = $(".progress");
  const links = $$(".nav-links a");
  const sections = links.map((a) => $(a.getAttribute("href")));
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 30);
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    let current = -1;
    sections.forEach((s, i) => { if (s && s.offsetTop - 160 <= y) current = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === current && !a.classList.contains("nav-cta")));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const btn = $(".menu-btn"), menu = $(".nav-links");
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  links.forEach((a) => a.addEventListener("click", () => {
    menu.classList.remove("open"); btn.setAttribute("aria-expanded", false); document.body.style.overflow = "";
  }));

  if (reduced) return;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Cursor glow, card tilt, magnetic buttons ---------- */
  if (fine) {
    const glow = $(".cursor-glow");
    addEventListener("pointermove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });

    $$(".project").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", x * 100 + "%");
        card.style.setProperty("--my", y * 100 + "%");
        card.style.transform = `rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-4px)`;
      });
      card.addEventListener("pointerleave", () => (card.style.transform = ""));
    });

    $$(".magnetic").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      b.addEventListener("pointerleave", () => (b.style.transform = ""));
    });
  }

  /* ---------- Particle network in hero ---------- */
  const cv = $("#particles"), ctx = cv.getContext("2d");
  let W, H, pts = [], mouse = { x: -999, y: -999 }, running = true;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.offsetWidth; H = cv.offsetHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.floor((W * H) / 14000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }));
  };
  resize();
  addEventListener("resize", resize);
  cv.parentElement.addEventListener("pointermove", (e) => { const r = cv.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; });
  cv.parentElement.addEventListener("pointerleave", () => (mouse = { x: -999, y: -999 }));
  new IntersectionObserver(([e]) => { running = e.isIntersecting; if (running) requestAnimationFrame(draw); }).observe(cv);

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 120) { p.x += dx / d; p.y += dy / d; }
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(140,130,255,${(1 - d / 130) * 0.35})`;
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      ctx.fillStyle = "rgba(200,210,255,.75)";
      ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.6, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
}
)();

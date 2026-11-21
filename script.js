(() => {
  const P = PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const animated = document.documentElement.classList.contains("anim");
  const fullName = `${P.firstName} ${P.lastName}`;
  const ext = (url) => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";

  const icon = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.5V9h3.6v11.5Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6m-3 3 3 3 3-3"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  /* ================= Render content ================= */
  $$("[data-logo]").forEach((el) => (el.textContent = P.logo));
  $$("[data-logo-plain]").forEach((el) => (el.textContent = `${P.logo.toLowerCase()} portfolio`));
  $("[data-fullname]").textContent = fullName;
  $("[data-year]").textContent = new Date().getFullYear();

  // Hero
  $(".hero-label").innerHTML = P.heroLabel.map(esc).join("<br>");
  $(".portrait").src = P.portrait;
  $(".greet").textContent = P.greeting;
  $(".hero-name").innerHTML = `${esc(P.firstName)}<br>${esc(P.lastName)}<i>.</i>`;
  $(".hero-role").textContent = P.role;
  $(".hero-text").textContent = P.tagline;
  $("[data-location]").textContent = `${P.location} · ${P.availability}`;
  $("[data-stats]").innerHTML = P.stats
    .map((s) => `<li data-build><strong>${esc(s.value)}<i>.</i></strong><span>${esc(s.label)}</span></li>`)
    .join("");
  $$("[data-resume]").forEach((a) => (P.contact.resume ? (a.href = P.contact.resume) : a.remove()));

  // Projects
  const previews = {
    memo: () => `<div class="pv pv-memo">
        <div class="pv-bar"><i></i><i></i><i></i><span>memo-system / approvals</span></div>
        <div class="pv-body">
          <aside><b></b><span></span><span></span><span></span><span></span></aside>
          <div class="pv-main">
            <div class="pv-row"><strong>MEMO #0142</strong><em class="pill amber">Awaiting approval</em></div>
            <div class="pv-steps"><span class="ok">Drafted</span><span class="ok">Dept. head</span><span class="now">Director</span><span>Archived</span></div>
            <ul class="pv-list"><li><span></span><em class="pill green">Approved</em></li><li><span></span><em class="pill amber">In review</em></li><li><span></span><em class="pill grey">Draft</em></li></ul>
          </div>
        </div>
        <span class="pv-stamp">PDF · AUDIT LOG</span>
      </div>`,
    data: () => {
      const h = [38, 52, 44, 70, 58, 64, 49, 76, 61, 83, 72, 66, 88, 74, 92, 80, 95, 86];
      return `<div class="pv pv-data">
        <div class="pv-kpis"><div><small>Error rate · before</small><strong class="bad">7%</strong></div><span class="arrow">→</span><div><small>After validation</small><strong class="good">&lt;1%</strong></div></div>
        <div class="pv-meter"><span style="width:93%"></span><span class="cut" style="width:7%"></span></div>
        <div class="pv-legend"><span>1,200 records checked</span><span>85 removed</span></div>
        <div class="pv-spark">${h.map((v, i) => `<i class="${[9, 14, 16].includes(i) ? "hi" : ""}" style="height:${v}%"></i>`).join("")}</div>
      </div>`;
    },
    database: () => {
      const T = [["CUSTOMERS", 22, 22], ["PRODUCTS", 226, 22], ["ORDERS", 124, 78], ["PAYMENTS", 22, 134], ["SUPPLIERS", 226, 134]];
      const table = ([n, x, y]) => `<g transform="translate(${x} ${y})"><rect width="76" height="50" rx="3" fill="#0f0f11" stroke="#2c2c32"/><rect width="76" height="14" rx="3" fill="${n === "ORDERS" ? "#ff2d2d" : "#26262b"}"/><text x="6" y="10" font-family="JetBrains Mono, monospace" font-size="7" fill="#fff">${n}</text><rect x="6" y="21" width="46" height="4" rx="1" fill="#3a3a40"/><rect x="6" y="30" width="58" height="4" rx="1" fill="#2c2c32"/><rect x="6" y="39" width="36" height="4" rx="1" fill="#2c2c32"/></g>`;
      const line = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}" fill="none" stroke="#ff5a1f" stroke-width="1" stroke-dasharray="3 3" opacity=".8"/><circle cx="${x2}" cy="${y2}" r="2" fill="#ff5a1f"/>`;
      return `<div class="pv pv-db"><svg viewBox="0 0 324 206" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Database schema diagram">
        ${line(98, 47, 124, 100)}${line(226, 47, 200, 100)}${line(124, 112, 98, 158)}${line(264, 134, 264, 72)}
        ${T.map(table).join("")}</svg><span class="pv-chip">5 tables · 8 KPI queries · 0 integrity errors</span></div>`;
    },
    research: () => {
      const rows = [["Trend 1 · customer behavior", 78], ["Trend 2 · customer behavior", 64], ["Trend 3 · customer behavior", 52], ["Operational challenges found", 40]];
      return `<div class="pv pv-research"><p class="pv-q">Survey + 8 secondary sources</p>
        ${rows.map(([l, v]) => `<div class="pv-r"><p>${l}</p><div><span style="width:${v}%"></span></div><b></b></div>`).join("")}
        <span class="pv-stamp">5 RECOMMENDATIONS</span></div>`;
    }
  };
  $("[data-filters]").innerHTML = P.filters
    .map((f, i) => `<button role="tab" data-filter="${esc(f.id)}" aria-selected="${i === 0}">${esc(f.label)}</button>`)
    .join("");
  $("[data-projects]").innerHTML = P.projects
    .map((p, i) => {
      const links = [
        p.live && `<a href="${esc(p.live)}"${ext(p.live)}>Live demo ↗</a>`,
        p.github && `<a href="${esc(p.github)}"${ext(p.github)}>Code ↗</a>`
      ].filter(Boolean).join("");
      const search = [p.title, p.meta, p.category, ...p.tech].join(" ").toLowerCase();
      return `<article class="pcard" data-build data-cat="${esc(p.category)}" data-search="${esc(search)}">
        <div class="shot">${(previews[p.preview] || (() => ""))()}</div>
        <div class="pinfo">
          <span class="pnum">${String(i + 1).padStart(2, "0")}</span>
          <h3 class="ptitle">${esc(p.title)}</h3>
          <p class="pmeta">${esc(p.meta)}</p>
          <p class="pdesc">${esc(p.description)}</p>
          <div class="ptags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          ${links ? `<div class="plinks">${links}</div>` : ""}
        </div>
      </article>`;
    })
    .join("");
  const logos = typeof TOOL_LOGOS === "object" ? TOOL_LOGOS : {};
  $("[data-tools]").innerHTML = P.tools
    .map((t) => `<li data-build><span class="logo-tile">${logos[t] || `<b>${esc(t.replace(/[^A-Za-z]/g, "").slice(0, 2))}</b>`}</span>${esc(t)}</li>`)
    .join("");

  // Filter + search
  let filter = "all";
  const applyFilter = () => {
    const q = $("[data-search]").value.trim().toLowerCase();
    let shown = 0;
    $$(".pcard").forEach((card) => {
      const ok = (filter === "all" || card.dataset.cat === filter) && (!q || card.dataset.search.includes(q));
      const was = !card.hidden;
      card.hidden = !ok;
      if (ok) shown++;
      if (ok && !was && animated) card.animate([{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "none" }], { duration: 380, easing: "cubic-bezier(.2,.8,.2,1)" });
    });
    $("[data-empty]").hidden = shown > 0;
  };
  $("[data-filters]").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    filter = b.dataset.filter;
    $$("[data-filters] button").forEach((x) => x.setAttribute("aria-selected", x === b));
    applyFilter();
  });
  $("[data-search]").addEventListener("input", applyFilter);

  // About
  $("[data-about-intro]").textContent = P.about.intro;
  $("[data-skills]").innerHTML = P.about.skills
    .map((g) => `<div class="skill-group"><p>${esc(g.group)}</p><ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`)
    .join("");
  $("[data-process]").innerHTML = P.about.process
    .map((s, i) => `<li data-n="${String(i + 1).padStart(2, "0")}"><b>${esc(s.title)}</b><span>${esc(s.text)}</span></li>`)
    .join("");
  $("[data-quote]").textContent = P.about.quote;
  $("[data-sig]").textContent = P.about.signature;

  // Journey
  $("[data-education]").innerHTML = P.education
    .map((e, i) => {
      const has = !!e.detail;
      return `<div class="acc${e.current ? " current" : ""}${has && i === 0 ? " open" : ""}${has ? "" : " static"}" data-build>
        <button ${has ? `aria-expanded="${i === 0}"` : 'tabindex="-1"'}>
          <span class="when">${esc(e.when)}</span>
          <span class="what"><b>${esc(e.title)}</b><span>${esc(e.place)}</span></span>
          ${has ? '<span class="plus" aria-hidden="true"></span>' : "<span></span>"}
        </button>
        ${has ? `<div class="acc-body"><div><p>${esc(e.detail)}</p></div></div>` : ""}
      </div>`;
    })
    .join("");
  $("[data-education]").addEventListener("click", (e) => {
    const b = e.target.closest("button[aria-expanded]");
    if (!b) return;
    const open = b.parentElement.classList.toggle("open");
    b.setAttribute("aria-expanded", open);
  });
  $("[data-live]").innerHTML = P.live
    .map((l) => {
      const inner = `<span class="ld"></span><span><b>${esc(l.name)}</b><small>${esc(l.meta)}</small></span><span class="go">${l.url ? "↗" : ""}</span>`;
      return `<li>${l.url ? `<a href="${esc(l.url)}"${ext(l.url)}>${inner}</a>` : `<div>${inner}</div>`}</li>`;
    })
    .join("");

  // Certifications
  $("[data-certs]").innerHTML = P.certifications
    .map((c, i) => {
      const prog = /progress/i.test(c.tag);
      const inner = `<span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${esc(c.name)}<small class="${prog ? "prog" : ""}">${esc(c.tag)}</small></span><span class="go">${c.url ? "↗" : ""}</span>`;
      return `<li data-build>${c.url ? `<a href="${esc(c.url)}"${ext(c.url)} title="View certificate">${inner}</a>` : `<div class="c">${inner}</div>`}</li>`;
    })
    .join("");

  // Contact
  const C = P.contact;
  const mailto = `mailto:${C.email}`;
  $("[data-mail]").href = mailto;
  const channels = [
    C.email && { ic: "mail", label: "Email", value: C.email, url: mailto },
    C.linkedin && { ic: "linkedin", label: "LinkedIn", value: "Connect with me", url: C.linkedin },
    C.phone && { ic: "phone", label: "Phone", value: C.phone, url: `tel:${C.phone.replace(/[^\d+]/g, "")}` },
    C.resume && { ic: "doc", label: "CV", value: "Download PDF", url: C.resume, dl: true },
    C.github && { ic: "github", label: "GitHub", value: C.github.replace(/^https?:\/\/(www\.)?/, ""), url: C.github },
    { ic: "pin", label: "Based in", value: P.location }
  ].filter(Boolean);
  $("[data-channels]").innerHTML = channels
    .map((c) => {
      const inner = `<span class="ic">${icon[c.ic]}</span><span><small>${esc(c.label)}</small><b>${esc(c.value)}</b></span><span class="go">${c.url ? "↗" : ""}</span>`;
      return `<li data-build>${c.url ? `<a href="${esc(c.url)}"${c.dl ? " download" : ext(c.url)}>${inner}</a>` : `<div>${inner}</div>`}</li>`;
    })
    .join("");
  $("[data-brief]").addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = $("#brief-input").value.trim();
    location.href = `${mailto}?subject=${encodeURIComponent("Role opportunity for " + fullName)}&body=${encodeURIComponent(msg)}`;
  });

  /* ================= Nav ================= */
  const nav = $(".nav");
  const links = $$(".nav-links a");
  const targets = links.map((a) => $(a.getAttribute("href")));
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("scrolled", y > 20);
    let cur = -1;
    targets.forEach((s, i) => { if (s && s.offsetTop - 200 <= y) cur = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === cur));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const menuBtn = $(".menu-btn"), menu = $(".nav-links");
  const setMenu = (open) => {
    menu.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  links.forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ================= Live assembly ================= */
  const sections = $$("[data-section]");
  const replayBtn = $("[data-replay]");
  if (!animated) { replayBtn.closest(".replay-card").remove(); return; }

  const layer = $(".builder");
  const status = $(".status"), statusText = $(".s-text");
  const ARROW = '<svg viewBox="0 0 15 20"><path d="M1 1v16l4.2-4 2.9 6.2 2.6-1.2-2.8-6H14L1 1z" fill="#fff" stroke="#111" stroke-width="1.2" stroke-linejoin="round"/></svg>';
  const cursors = Array.from({ length: innerWidth < 640 ? 6 : 10 }, () => {
    const c = document.createElement("div");
    c.className = "cur";
    c.innerHTML = ARROW;
    layer.appendChild(c);
    return c;
  });
  const pos = new Map();
  const move = (c, x, y, instant) => {
    if (instant) c.style.transition = "none";
    c.style.transform = `translate(${x}px, ${y}px)`;
    pos.set(c, [x, y]);
    if (instant) { c.offsetWidth; c.style.transition = ""; }
  };
  let building = 0, hideTimer, run = 0;
  const builtCount = () => sections.filter((s) => s.dataset.state === "built").length;

  const showStatus = (txt) => {
    clearTimeout(hideTimer);
    statusText.textContent = txt;
    status.classList.add("show");
  };
  const wake = () => {
    cursors.forEach((c) => {
      if (c.classList.contains("on")) return;
      move(c, scrollX + innerWidth * (0.35 + Math.random() * 0.3), scrollY + innerHeight * (0.35 + Math.random() * 0.3), true);
      c.classList.add("on");
    });
  };
  const sleep = () => {
    cursors.forEach((c) => {
      const [x, y] = pos.get(c) || [0, 0];
      move(c, x + (Math.random() - 0.5) * 240, y + (Math.random() - 0.5) * 160);
      c.classList.remove("on");
    });
  };

  function build(sec) {
    if (sec.dataset.state) return;
    sec.dataset.state = "building";
    building++;
    const myRun = run;
    const items = $$("[data-build]", sec).filter((el) => el.getClientRects().length);
    const sx = scrollX, sy = scrollY;
    const boxes = items.map((el) => {
      const r = el.getBoundingClientRect();
      const b = document.createElement("div");
      b.className = "bp";
      b.style.cssText = `left:${r.left + sx}px;top:${r.top + sy}px;width:${r.width}px;height:${r.height}px`;
      b.innerHTML = `<b>${Math.round(r.width)} × ${Math.round(r.height)}</b>`;
      layer.appendChild(b);
      return { el, b, r };
    });
    showStatus(`${cursors.length} agents · building ${sec.dataset.section.toLowerCase()} · ${builtCount()}/${sections.length}`);
    wake();
    const step = Math.max(45, Math.min(110, 1100 / Math.max(boxes.length, 1)));
    boxes.forEach((o, i) => setTimeout(() => myRun === run && o.b.classList.add("on"), 40 + i * 30));
    const start = 260;
    boxes.forEach((o, i) => {
      const c = cursors[i % cursors.length];
      const t = start + i * step;
      setTimeout(() => {
        if (myRun !== run) return;
        move(c, o.r.left + sx + o.r.width * (0.15 + Math.random() * 0.7), o.r.top + sy + Math.min(o.r.height * (0.3 + Math.random() * 0.4), 60));
      }, t);
      setTimeout(() => {
        if (myRun !== run) return;
        o.el.classList.add("built");
        o.b.classList.add("done");
      }, t + 430);
    });
    setTimeout(() => {
      if (myRun !== run) return;
      boxes.forEach((o) => o.b.remove());
      sec.classList.remove("pending");
      sec.dataset.state = "built";
      building--;
      if (!building) {
        sleep();
        const n = builtCount();
        statusText.textContent = n === sections.length ? `${sections.length}/${sections.length} sections live ✓` : `${sec.dataset.section.toLowerCase()} live ✓ · ${n}/${sections.length}`;
        hideTimer = setTimeout(() => status.classList.remove("show"), 1400);
      }
    }, start + boxes.length * step + 650);
  }

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target !== sections[0] && build(e.target)),
    { rootMargin: "0px 0px -22% 0px" }
  );

  function intro() {
    // cursors gather around the logo mark, then assemble the hero
    wake();
    const cx = scrollX + innerWidth / 2, cy = scrollY + innerHeight * 0.45;
    cursors.forEach((c, i) => {
      const a = (i / cursors.length) * Math.PI * 2;
      move(c, cx + Math.cos(a) * 70, cy + Math.sin(a) * 70);
    });
    const myRun = run;
    setTimeout(() => myRun === run && build(sections[0]), 450);
  }

  function reset() {
    run++;
    building = 0;
    $$(".bp", layer).forEach((b) => b.remove());
    sections.forEach((s) => {
      delete s.dataset.state;
      s.classList.add("pending");
      $$("[data-build]", s).forEach((el) => el.classList.remove("built"));
    });
  }

  reset();
  sections.forEach((s) => io.observe(s));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => requestAnimationFrame(intro));
  else addEventListener("load", intro);
  // never leave a section invisible if something goes wrong
  setTimeout(() => { if (!sections[0].dataset.state) build(sections[0]); }, 2500);

  replayBtn.addEventListener("click", () => {
    reset();
    window.scrollTo({ top: 0, behavior: "instant" });
    requestAnimationFrame(() => requestAnimationFrame(intro));
  });
})();

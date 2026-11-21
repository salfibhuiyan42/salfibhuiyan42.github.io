/* =========================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   Everything on the site comes from here.
   After editing, bump the ?v= numbers in index.html.
   ========================================================= */

const PORTFOLIO = {
  firstName: "Salfi",
  lastName: "Bhuiyan",
  logo: "SALFI",
  greeting: "Hello, I'm",
  heroLabel: ["MIS · Data &", "Business Analyst"],
  role: "Management Trainee & Analyst",
  tagline:
    "BBA (MIS) student at North South University with all coursework completed. I turn messy data into accurate records, clear reports and better decisions.",
  portrait: "portrait.png",
  location: "Dhaka, Bangladesh",
  availability: "Available to join immediately",

  stats: [
    { value: "4", label: "Academic projects delivered" },
    { value: "11", label: "Certifications completed" },
    { value: "83", label: "Automated checks in my web app" }
  ],

  // each project's category must match one of these ids
  filters: [
    { id: "all", label: "All" },
    { id: "data", label: "Data" },
    { id: "database", label: "Database" },
    { id: "web", label: "Web" },
    { id: "research", label: "Research" }
  ],

  projects: [
    {
      title: "Memo Management System",
      category: "web",
      preview: "memo",
      meta: "Web application · CSE226",
      description:
        "Multi-tenant web app where organizations manage internal memos through ordered approval workflows, with role-based access, audit log, notifications, reports and PDF export. Verified with 83 automated end-to-end checks.",
      tech: ["Node.js", "Express", "SQLite", "RBAC"],
      live: "https://memo-system-6hhj.onrender.com/",
      github: ""
    },
    {
      title: "Data Cleaning & Analysis",
      category: "data",
      preview: "data",
      meta: "Python · MIS 210",
      description:
        "Cleaned 1,200 records and removed 85 duplicate or missing entries with a pandas validation workflow, cutting the error rate from 7% to under 1%. Exploratory analysis surfaced 3 patterns behind the final recommendation.",
      tech: ["Python", "pandas", "EDA"],
      live: "",
      github: ""
    },
    {
      title: "Relational Database",
      category: "database",
      preview: "database",
      meta: "MySQL · MIS 310",
      description:
        "Designed a 5-table, 500-record database with zero integrity errors in testing by enforcing keys and constraints. Replaced manual lookups with 8 reusable SQL queries that produce KPI-style reports in seconds.",
      tech: ["MySQL", "Schema design", "Joins"],
      live: "",
      github: ""
    },
    {
      title: "Online Shopping in Bangladesh",
      category: "research",
      preview: "research",
      meta: "Research · North South University",
      description:
        "Identified 3 customer-behavior trends and 2 operational challenges from a primary survey and 8 secondary sources, then delivered 5 prioritized recommendations in a structured report.",
      tech: ["Survey", "Market analysis", "Reporting"],
      live: "",
      github: ""
    }
  ],

  tools: ["Excel", "Power BI", "MySQL", "Python", "pandas", "Google Sheets", "PowerPoint", "Node.js", "Express", "SQLite"],

  about: {
    intro:
      "I'm Salfi, an MIS student at North South University with all academic coursework completed. I sit where business meets technology: I understand how operations and teams work, and I have the technical skills to measure, organize and improve them.",
    skills: [
      { group: "Analysis & reporting", items: ["Accuracy checking", "Discrepancy identification", "Report preparation", "Record keeping", "Coordination", "Meeting deadlines"] },
      { group: "Software", items: ["Advanced Excel", "Word", "PowerPoint", "Google Sheets", "Power BI", "MySQL", "Python (pandas)"] },
      { group: "Core", items: ["Analytical thinking", "Attention to detail", "Multitasking", "Time management", "Problem-solving"] },
      { group: "Languages", items: ["English (professional)", "Bangla (native)"] }
    ],
    process: [
      { title: "Collect", text: "Gather the records, surveys and sources that matter." },
      { title: "Validate", text: "Check accuracy, remove duplicates, flag discrepancies." },
      { title: "Analyze", text: "Find the patterns with SQL, Python and Excel." },
      { title: "Report", text: "Turn findings into clear reports and dashboards." },
      { title: "Improve", text: "Recommend the next step and track the result." }
    ],
    quote: "Accurate data is the quiet engine behind every good decision.",
    signature: "Salfi"
  },

  education: [
    {
      when: "2023 – Present",
      current: true,
      title: "Bachelor of Business Administration (MIS)",
      place: "North South University",
      detail:
        "All academic coursework completed. Coursework: Operations Management, Python for Data Analysis, Database Management (MySQL), Project Management, ERP, Digital Enterprise Management, Business Communication."
    },
    { when: "2021 – 2023", title: "Higher Secondary Certificate (HSC)", place: "Govt. Tolaram College", detail: "" },
    { when: "2019 – 2021", title: "Secondary School Certificate (SSC)", place: "B.M Union School and College", detail: "" }
  ],

  // "Live. In use." list next to the education timeline
  live: [
    { name: "Memo Management System", meta: "Web app · live demo", url: "https://memo-system-6hhj.onrender.com/" },
    { name: "Power BI certification", meta: "Data · certified", url: "https://drive.google.com/file/d/1v7ObXDoduvUW18gz3tn65uDEjPrUUBZ-/view?usp=sharing" },
    { name: "AWS Cloud Computing", meta: "Cloud · in progress", url: "" }
  ],

  certifications: [
    { name: "Power BI Essentials and Sustainability Reporting", tag: "Data", url: "https://drive.google.com/file/d/1v7ObXDoduvUW18gz3tn65uDEjPrUUBZ-/view?usp=sharing" },
    { name: "AWS Cloud Computing", tag: "In progress", url: "" },
    { name: "Expert AI Generalist", tag: "AI", url: "https://www.grameenphone.academy/cert/c45b5d50668c" },
    { name: "AI Workflows and Agents", tag: "AI", url: "https://www.grameenphone.academy/cert/a7a902ce9d15" },
    { name: "AI-Powered Communication", tag: "AI", url: "https://www.grameenphone.academy/cert/a39347e63ea7" },
    { name: "From Insights to Influence", tag: "AI", url: "https://www.grameenphone.academy/cert/31a4ec104ddb" },
    { name: "AI Career Edge", tag: "AI", url: "https://www.grameenphone.academy/cert/f02455957030" },
    { name: "AI-Pro Aptitude Hacks", tag: "AI", url: "https://www.grameenphone.academy/cert/6f81ce73a740" },
    { name: "AI+Superpresentations", tag: "AI", url: "https://www.grameenphone.academy/cert/e730f0c4c68a" },
    { name: "Network Smarter with AI", tag: "AI", url: "https://www.grameenphone.academy/cert/f7c7f7e50c35" },
    { name: "Personal Branding in AI Era", tag: "AI", url: "https://www.grameenphone.academy/cert/c1c00633fc21" },
    { name: "Zero-Code App @ Vibe Coding", tag: "AI", url: "https://www.grameenphone.academy/cert/ebc011133781" }
  ],

  contact: {
    email: "salfibhuiyan42@gmail.com",
    phone: "01719425813",
    linkedin: "https://www.linkedin.com/in/salfi-bhuiyan-806951189/",
    github: "https://github.com/salfibhuiyan42",
    resume: "Salfi_Bhuiyan_CV.pdf"
  }
};

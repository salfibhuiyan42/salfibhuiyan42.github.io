/* =========================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   Everything on the site comes from here.
   ========================================================= */

const PORTFOLIO = {
  name: "Salfi Bhuiyan",
  initials: "SB",
  photo: "photo.jpg", // set to "" to hide the photo
  // Rotating titles in the hero (typing animation)
  roles: ["Management Trainee", "Data & Business Analyst", "MIS Professional", "Power BI · SQL · Python"],
  tagline:
    "BBA (MIS) student at North South University with all coursework completed. I turn messy data into accurate records, clear reports and better decisions. Available to join immediately.",
  available: true, // shows the "Open to work" badge

  about: [
    "I'm a Management Information Systems student at North South University, where I've completed all my academic coursework. I sit where business meets technology: I understand how operations and teams work, and I have the technical skills to measure, organize and improve them.",
    "I'm strongest at the details that keep a business running: checking data for accuracy, spotting discrepancies, keeping clean records, coordinating with people and delivering reports on deadline. My toolkit includes Excel, SQL, Python and Power BI.",
    "I learn quickly, I'm eager to grow into a leadership role, and I'm ready to start right away."
  ],

  stats: [
    { value: 4, suffix: "", label: "Academic projects delivered" },
    { value: 11, suffix: "", label: "Certifications completed" },
    { value: 83, suffix: "", label: "Automated checks in my web app" }
  ],

  skills: [
    { group: "Data & Analytics", items: ["Advanced Excel", "Power BI", "MySQL", "Python (pandas)", "Google Sheets"] },
    { group: "Analysis & Reporting", items: ["Accuracy checking", "Discrepancy identification", "Report preparation", "Record keeping", "Coordination"] },
    { group: "Business & Systems", items: ["Operations Management", "Project Management", "ERP", "Digital Enterprise", "Node.js / Express"] },
    { group: "Core Strengths", items: ["Attention to detail", "Analytical thinking", "Problem-solving", "Time management", "Multitasking"] },
    { group: "Languages", items: ["English (professional)", "Bangla (native)"] }
  ],

  projects: [
    {
      title: "Memo Management System",
      label: "Web application · CSE226",
      description:
        "A multi-tenant web app where organizations manage internal memos through ordered approval workflows, with role-based access, an audit log, notifications, reports and PDF export. Verified with 83 automated end-to-end checks covering security and tenant isolation, built with AI-assisted development.",
      tech: ["Node.js", "Express", "SQLite", "RBAC", "E2E testing"],
      github: "",
      live: "https://memo-system-6hhj.onrender.com/"
    },
    {
      title: "Data Analysis Project",
      label: "Python · MIS 210",
      description:
        "Cleaned 1,200 records and removed 85 duplicate or missing entries with a pandas validation workflow, cutting the error rate from 7% to under 1%. Exploratory analysis surfaced 3 patterns that supported the final recommendation.",
      tech: ["Python", "pandas", "Data cleaning", "EDA"],
      github: "",
      live: ""
    },
    {
      title: "Relational Database Project",
      label: "MySQL · MIS 310",
      description:
        "Designed a 5-table, 500-record relational database with zero integrity errors in testing by enforcing keys and constraints. Replaced manual lookups with 8 reusable SQL queries that produce KPI-style reports in seconds.",
      tech: ["MySQL", "Schema design", "Joins", "Aggregates"],
      github: "",
      live: ""
    },
    {
      title: "Online Shopping in Bangladesh",
      label: "Research · North South University",
      description:
        "Identified 3 customer-behavior trends and 2 operational challenges using a primary survey and 8 secondary sources, then delivered 5 prioritized recommendations in a structured report.",
      tech: ["Survey research", "Market analysis", "Reporting"],
      github: "",
      live: ""
    }
  ],

  // Education timeline (newest first)
  timeline: [
    {
      when: "2023 – Present",
      title: "Bachelor of Business Administration (MIS)",
      place: "North South University",
      detail:
        "All academic coursework completed · CGPA 3.14. Coursework: Operations Management, Python for Data Analysis, Database Management (MySQL), Project Management, ERP, Digital Enterprise Management, Business Communication."
    },
    {
      when: "2021 – 2023",
      title: "Higher Secondary Certificate (HSC)",
      place: "Govt. Tolaram College",
      detail: "GPA 4.58"
    },
    {
      when: "2019 – 2021",
      title: "Secondary School Certificate (SSC)",
      place: "B.M Union School and College",
      detail: "GPA 4.40"
    }
  ],

  certifications: [
    { name: "Power BI Essentials and Sustainability Reporting", featured: true, url: "https://drive.google.com/file/d/1v7ObXDoduvUW18gz3tn65uDEjPrUUBZ-/view?usp=sharing" },
    { name: "AWS Cloud Computing", featured: true, status: "In progress", url: "" },
    { name: "Expert AI Generalist", url: "https://www.grameenphone.academy/cert/c45b5d50668c" },
    { name: "AI Workflows and Agents", url: "https://www.grameenphone.academy/cert/a7a902ce9d15" },
    { name: "AI-Powered Communication", url: "https://www.grameenphone.academy/cert/a39347e63ea7" },
    { name: "From Insights to Influence", url: "https://www.grameenphone.academy/cert/31a4ec104ddb" },
    { name: "AI Career Edge", url: "https://www.grameenphone.academy/cert/f02455957030" },
    { name: "AI-Pro Aptitude Hacks", url: "https://www.grameenphone.academy/cert/6f81ce73a740" },
    { name: "AI+Superpresentations", url: "https://www.grameenphone.academy/cert/e730f0c4c68a" },
    { name: "Network Smarter with AI", url: "https://www.grameenphone.academy/cert/f7c7f7e50c35" },
    { name: "Personal Branding in AI Era", url: "https://www.grameenphone.academy/cert/c1c00633fc21" },
    { name: "Zero-Code App @ Vibe Coding", url: "https://www.grameenphone.academy/cert/ebc011133781" }
  ],

  contact: {
    email: "salfibhuiyan42@gmail.com",
    github: "https://github.com/salfibhuiyan42",
    linkedin: "https://www.linkedin.com/in/salfi-bhuiyan-806951189/",
    resume: "" // e.g. "resume.pdf" after adding a general version of your CV to this folder
  }
};

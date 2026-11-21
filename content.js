/* =========================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   Everything on the site comes from here. Text marked
   [PLACEHOLDER] is sample content; replace it with yours.
   ========================================================= */

const PORTFOLIO = {
  name: "Salfi Bhuiyan",
  initials: "SB",
  // Rotating titles in the hero (typing animation)
  roles: ["Software Engineer", "Web Developer", "Problem Solver"], // [PLACEHOLDER]
  tagline:
    "Computer Science student at North South University building fast, thoughtful web experiences. Open to internships and full-time roles.", // [PLACEHOLDER]
  location: "Dhaka, Bangladesh", // [PLACEHOLDER]
  available: true, // shows the "Open to work" badge

  about: [
    "I'm a Computer Science student at North South University who loves turning ideas into working software. I enjoy the whole journey: understanding a problem, designing a clean solution, and polishing the details users actually feel.", // [PLACEHOLDER]
    "Outside the classroom I build side projects, take part in programming contests, and keep learning new tools. I'm looking for a team where I can contribute from day one and keep growing." // [PLACEHOLDER]
  ],

  stats: [
    { value: 10, suffix: "+", label: "Projects built" }, // [PLACEHOLDER]
    { value: 3, suffix: "+", label: "Years coding" }, // [PLACEHOLDER]
    { value: 8, suffix: "", label: "Technologies" } // [PLACEHOLDER]
  ],

  skills: [
    { group: "Languages", items: ["Python", "Java", "C++", "JavaScript", "SQL"] }, // [PLACEHOLDER]
    { group: "Web", items: ["HTML", "CSS", "React", "Node.js", "Tailwind"] }, // [PLACEHOLDER]
    { group: "Tools", items: ["Git", "GitHub", "Linux", "VS Code", "Figma"] } // [PLACEHOLDER]
  ],

  projects: [
    {
      title: "Project One", // [PLACEHOLDER]
      description:
        "A short description of what this project does, the problem it solves, and what you are proud of.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/salfibhuiyan42",
      live: ""
    },
    {
      title: "Project Two", // [PLACEHOLDER]
      description:
        "Explain the key feature in one or two sentences. Numbers help: users, speed, accuracy.",
      tech: ["Python", "Flask", "SQLite"],
      github: "https://github.com/salfibhuiyan42",
      live: ""
    },
    {
      title: "Project Three", // [PLACEHOLDER]
      description:
        "A course project, hackathon entry, or anything else that shows how you think and build.",
      tech: ["Java", "OOP"],
      github: "https://github.com/salfibhuiyan42",
      live: ""
    }
  ],

  // Education + experience timeline (newest first)
  timeline: [
    {
      when: "2022 – Present", // [PLACEHOLDER]
      title: "B.Sc. in Computer Science & Engineering",
      place: "North South University",
      detail: "Relevant coursework: Data Structures, Algorithms, Databases, Software Engineering." // [PLACEHOLDER]
    },
    {
      when: "2024", // [PLACEHOLDER]
      title: "Experience / Club / Competition",
      place: "Organization name",
      detail: "One line on what you did and the impact it had." // [PLACEHOLDER]
    }
  ],

  contact: {
    email: "", // [PLACEHOLDER] the email you want shown publicly
    github: "https://github.com/salfibhuiyan42",
    linkedin: "", // [PLACEHOLDER] e.g. https://www.linkedin.com/in/your-name
    resume: "" // [PLACEHOLDER] e.g. "resume.pdf" after adding the file to this folder
  }
};

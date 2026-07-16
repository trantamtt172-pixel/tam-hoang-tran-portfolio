import type { Link, Profile } from "./types";

export const profile: Profile = {
  name: "Tam Hoang Tran",
  headline: "I turn complex ideas into structured, working solutions.",
  subline: "International Project Engineering, Project Management, Operations and M.Sc. Interdisciplinary Product Development.",
  positioning:
    "International Project Engineering graduate, M.Sc. Interdisciplinary Product Development student, project coordinator and operations-focused problem solver.",
  languages: ["German (native)", "English (fluent)", "Vietnamese (native)", "Spanish (CEFR A2)"],
  focusAreas: [
    "Project Management",
    "Project Coordination",
    "Operations",
    "Business Development",
    "Consulting",
    "Digital Transformation",
    "Digital workflows",
    "International engineering environments",
  ],
  differentiators: [
    "Connects technical, organizational and business perspectives",
    "Works comfortably across cultures and disciplines",
    "Uses digital tools to structure, prototype and execute",
    "Balances credible professional communication with hands-on delivery",
  ],
};

export const contactLinks: Link[] = [
  {
    label: "Email",
    href: "mailto:trantam.tt172@gmail.com?subject=Portfolio%20inquiry",
    available: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tam-hoang-tran-02a298195/",
    external: true,
    available: true,
  },
  {
    label: "Resume",
    href: "/resume/cv_HoangTam_Tran.pdf",
    external: true,
    available: true,
  },
];

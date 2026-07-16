import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "reutlingen",
    label: "Academic foundation",
    organization: "Reutlingen University",
    context:
      "International Project Engineering studies combining engineering fundamentals, structured project work and business-oriented thinking.",
    skills: ["Project engineering", "Technical analysis", "Documentation", "Structured planning"],
    verification: "brief",
  },
  {
    id: "sweden",
    label: "International project work",
    organization: "Sweden",
    context:
      "International academic and project experience with emphasis on English communication, cross-cultural teamwork and adaptability.",
    skills: ["Cross-cultural collaboration", "Team coordination", "International communication"],
    verification: "brief",
  },
  {
    id: "bosch",
    label: "Industrial quality and logistics",
    organization: "Bosch",
    context:
      "Holiday role in Reutlingen from July to September 2023, including visual inspection of wafers, careful packaging and storage of components, and article-number and quantity checks using SAP.",
    skills: ["Quality inspection", "SAP", "Warehouse process awareness"],
    verification: "resume-required",
  },
  {
    id: "mercedes",
    label: "Premium production environment",
    organization: "Mercedes-Benz",
    context:
      "Holiday role in seat production at the Mercedes-Benz Böblingen plant from July to September 2025, including visual inspection of seat cushions, assembly of cushions onto seat frames and work under takt-time requirements on a continuous production line.",
    skills: ["Production quality", "Assembly process", "Takt-time discipline"],
    verification: "resume-required",
  },
  {
    id: "ssi-schaefer",
    label: "Project management internship",
    organization: "SSI Schäfer, Eskilstuna, Sweden",
    context:
      "Project management internship from August 2024 to February 2025, leading an agile project to optimize an intralogistics system with Jira, using WAMAS and TIBCO Jaspersoft, coordinating cross-functional teams and analyzing KPIs with Excel and Power BI.",
    skills: ["Jira", "WAMAS", "Power BI", "KPI analysis", "Cross-functional coordination"],
    verification: "resume-required",
  },
  {
    id: "restaurant",
    label: "Operational responsibility",
    organization: "Family-operated restaurant business",
    context:
      "Practical responsibility in a real service operation, connecting customer needs, ordering flows and day-to-day operational execution.",
    skills: ["Operations", "Customer orientation", "Process improvement"],
    verification: "brief",
  },
  {
    id: "ai-digital",
    label: "Digital product prototyping",
    organization: "Digital product prototypes",
    context:
      "Prototype development used to translate ideas into structured, usable digital concepts.",
    skills: ["Digital workflows", "Rapid prototyping", "Workflow design"],
    verification: "brief",
  },
];

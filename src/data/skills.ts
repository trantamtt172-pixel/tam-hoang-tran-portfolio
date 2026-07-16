import type { CapabilityGroup } from "./types";

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Project and Operations",
    description: "Turning moving parts into visible priorities, owners and follow-through.",
    items: [
      "Project coordination",
      "Process organization",
      "Stakeholder communication",
      "Research and analysis",
      "Documentation",
      "Follow-up and execution",
      "International collaboration",
      "Task prioritization",
      "Structured planning",
    ],
  },
  {
    title: "Business and Consulting",
    description: "Framing problems clearly so teams can compare options and make decisions.",
    items: [
      "Structured problem solving",
      "Business process thinking",
      "Presentation development",
      "Market and competitor research",
      "Operational improvement",
      "Customer-oriented thinking",
      "Business model development",
      "Decision preparation",
    ],
  },
  {
    title: "Digital and AI",
    description: "Using AI-assisted workflows to prototype, research and communicate faster.",
    items: [
      "AI-assisted development",
      "Prompt engineering",
      "Rapid prototyping",
      "Workflow automation",
      "Digital product concepts",
      "Modern web applications",
      "AI-supported research",
      "AI-supported analysis",
      "Visual concept development",
    ],
  },
  {
    title: "Technical and Analytical",
    description: "Applying engineering structure to evaluate systems and document outcomes.",
    items: [
      "Microsoft Excel",
      "Jira",
      "Power BI",
      "SAP",
      "WAMAS",
      "TIBCO Jaspersoft",
      "Data analysis",
      "Engineering fundamentals",
      "Simulation workflows",
      "Technical documentation",
      "Structured evaluation",
      "Project engineering methods",
      "MATLAB Simulink",
      "Python",
      "Java",
      "CAD Creo",
      "MS Project",
    ],
  },
];

export const workStages = [
  ["01", "Understand", "Clarify the objective, users, constraints, stakeholders and business context."],
  ["02", "Structure", "Translate complexity into priorities, milestones, responsibilities and clear next steps."],
  ["03", "Build", "Use the right combination of research, collaboration, technology and AI tools."],
  ["04", "Validate", "Test assumptions, gather feedback, identify weaknesses and improve the result."],
  ["05", "Deliver", "Turn the concept into a usable, professional and clearly communicated outcome."],
] as const;

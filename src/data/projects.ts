import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "ai-ad-studio",
    slug: "ai-ad-studio",
    title: "AI Ad Studio",
    subtitle: "A simulated AI-supported campaign concept builder for restaurants, companies and brands.",
    status: "Prototype",
    yearLabel: "Prototype",
    role: "Concept, structure and prototype direction",
    description:
      "An interactive web application concept that helps users move from a campaign objective to brand-style choices and visual advertisement directions.",
    challenge:
      "Small teams need campaign ideas quickly, but the creative process often starts unstructured and without clear brand language.",
    approach: [
      "Define target users and campaign goals before visual output.",
      "Use selectable brand styles such as professional, premium, modern, luxury, minimal and energetic.",
      "Simulate AI-assisted content generation without requiring a paid API.",
    ],
    contribution: [
      "Structured the user journey from objective to brand expression.",
      "Designed the prototype logic and interactive preview flow.",
      "Separated implemented prototype behavior from future AI integration potential.",
    ],
    outcome:
      "A credible product concept showing how AI can support ideation, brand alignment and faster campaign exploration.",
    tools: ["Next.js", "React", "AI-assisted workflow design", "Prototype interface"],
    skills: ["Digital product thinking", "Business potential analysis", "Rapid prototyping"],
    featured: true,
    verified: "brief",
  },
  {
    id: "restaurant-order-app",
    slug: "restaurant-order-application",
    title: "Restaurant Order Application",
    subtitle: "A digital ordering concept grounded in real restaurant operations.",
    status: "Prototype",
    yearLabel: "Prototype",
    role: "Operational concept and product flow",
    description:
      "A restaurant ordering solution focused on menu browsing, category clarity, order review and practical service requirements.",
    challenge:
      "Restaurant operations need ordering flows that are clear for customers and useful for the team behind the counter.",
    approach: [
      "Map the customer journey from menu discovery to order overview.",
      "Use restaurant-specific categories and practical decision points.",
      "Keep operational clarity ahead of unnecessary visual complexity.",
    ],
    contribution: [
      "Connected real service experience with a digital ordering workflow.",
      "Defined the ordering structure and prototype screens.",
      "Considered usability for customers and operational follow-up for staff.",
    ],
    outcome:
      "A practical prototype direction for improving ordering clarity without claiming unverified revenue or efficiency metrics.",
    tools: ["React", "Digital menu architecture", "UX prototyping"],
    skills: ["Operations", "Customer-oriented thinking", "Process organization"],
    image: {
      src: "/images/restaurant-order-app.png",
      alt: "OrderPulse restaurant service dashboard showing table orders, menu item search and current order overview.",
      caption: "Restaurant order application service interface with table and item workflow.",
      fit: "cover",
    },
    featured: true,
    verified: "brief",
  },
  {
    id: "ip-plane",
    slug: "ip-plane-project",
    title: "IP Plane Project",
    subtitle: "Student project work connected to International Project Engineering studies.",
    status: "Academic project",
    yearLabel: "B.Eng. International Project Engineering",
    role: "Student project contributor",
    description:
      "The CV verifies participation in the student project IP-Plane during the B.Eng. International Project Engineering program.",
    challenge: "Detailed project challenge and technical scope require additional project materials before publication.",
    approach: [
      "Use agile project management methods referenced in the CV, including SCRUM and Kanban.",
      "Keep technical claims conservative until project material is supplied.",
    ],
    contribution: ["Participated in the student project IP-Plane as part of the International Project Engineering degree."],
    outcome: "Verified as academic project participation; detailed outcome requires project documentation.",
    tools: ["SCRUM", "Kanban", "Project planning"],
    skills: ["Project structure", "Collaboration", "Agile methods"],
    image: {
      src: "/images/ip-plane-engine.png",
      alt: "Aircraft engine component used as visual material for the IP Plane project.",
      caption: "Technical IP Plane project visual showing an aircraft engine component.",
      fit: "cover",
    },
    links: [
      {
        label: "IP Plane Instagram",
        href: "https://www.instagram.com/ip.plane?igsh=MTdibnRsOHozYWhzcw",
        external: true,
        available: true,
      },
    ],
    featured: false,
    verified: "resume-required",
    internalNote: "TODO_CONTENT: Add verified IP Plane technical scope, contribution and outcome from project material.",
  },
  {
    id: "hybrid-energy",
    slug: "mobile-hybrid-energy-system",
    title: "Mobile Hybrid Energy System",
    subtitle: "Academic engineering concept for resilient energy supply in critical or humanitarian contexts.",
    status: "Academic project",
    yearLabel: "Academic project",
    role: "Systems analysis and project structuring",
    description:
      "A mobile hybrid energy system concept connecting solar input, battery storage, backup generation and critical infrastructure loads.",
    challenge:
      "Critical infrastructure and humanitarian scenarios need resilient, mobile and manageable energy supply options.",
    approach: [
      "Represent energy sources, storage and loads as a connected system.",
      "Compare deployment scenarios such as field hospitals, emergency infrastructure and WASH support.",
      "Keep technical detail accessible while allowing deeper exploration for technical readers.",
    ],
    contribution: [
      "Structured the system logic and project narrative.",
      "Connected engineering evaluation with international deployment context.",
      "Built an interactive energy-flow explanation for portfolio visitors.",
    ],
    outcome:
      "A project presentation demonstrating systems thinking, technical analysis, research capability and decision preparation.",
    tools: ["Polysun", "Systems modeling", "Technical documentation", "Simulation workflow"],
    skills: ["Systems thinking", "Evaluation", "Engineering decision-making"],
    image: {
      src: "/images/mobile-hybrid-energy-system.png",
      alt: "Photovoltaic island system with generator, battery storage, programmable control and electrical loads for the mobile hybrid energy system project.",
      caption: "Academic system visualization for a photovoltaic island system with generator and battery storage.",
      fit: "contain",
    },
    featured: true,
    verified: "brief",
  },
  {
    id: "international-sweden",
    slug: "international-project-experience-sweden",
    title: "International Project Experience",
    subtitle: "A case study in cross-cultural teamwork and project organization in Sweden.",
    status: "Experience case",
    yearLabel: "International experience",
    role: "Project Management",
    description:
      "A professional story grounded in the project management internship at SSI Schäfer in Eskilstuna, Sweden.",
    challenge:
      "International work requires clear communication, shared expectations and reliable coordination across cultural contexts.",
    approach: [
      "Lead an agile project to optimize an intralogistics system using Jira.",
      "Use WAMAS and TIBCO Jaspersoft in a project management context.",
      "Coordinate cross-functional teams and evaluate KPIs with Excel and Power BI.",
    ],
    contribution: [
      "Coordinated across functions to address logistical challenges.",
      "Conducted data analysis with Excel Power Query, pivot tables, VLOOKUP and Power BI.",
      "Developed and evaluated relevant KPIs.",
    ],
    outcome:
      "A verified positioning case for international readiness, project coordination and data-supported operational improvement.",
    tools: ["Jira", "WAMAS", "TIBCO Jaspersoft", "Excel", "Power BI"],
    skills: ["Cross-cultural collaboration", "KPI analysis", "International communication"],
    image: {
      src: "/images/tam-ssi-schaefer-sweden.png",
      alt: "Tam Hoang Tran with the SSI Schäfer project team in Eskilstuna, Sweden.",
      caption: "Project management internship context at SSI Schäfer in Eskilstuna, Sweden.",
      fit: "cover",
    },
    links: [
      {
        label: "SSI Schaefer distribution center project context",
        href: "https://www.ssi-schaefer.com/en-us/newsroom/news/ssi-schaefer-supports-coop-in-opening-one-of-europe-s-largest-automated-distribution-centers-1942368",
        external: true,
        available: true,
      },
    ],
    featured: true,
    verified: "brief",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

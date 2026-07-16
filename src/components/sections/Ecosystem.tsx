import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CSSProperties } from "react";

const modules = [
  {
    label: "Project Goals",
    copy: "Clarify what needs to be achieved, why it matters and which constraints shape the work.",
  },
  {
    label: "Process Flow",
    copy: "Turn loose tasks into milestones, responsibilities, order of work and follow-up rhythm.",
  },
  {
    label: "Digital Tools",
    copy: "Use Jira, Excel, Power BI, AI tools or simulations where they make coordination and decisions clearer.",
  },
  {
    label: "Stakeholders",
    copy: "Coordinate the people involved: team members, departments, users, customers and decision-makers.",
  },
  {
    label: "Delivery",
    copy: "Bring the work to a usable result through documentation, testing, communication and execution.",
  },
];

export function Ecosystem() {
  return (
    <section className="section ecosystem-section">
      <SectionHeader eyebrow="Professional ecosystem" title="How Tam turns complexity into a working project structure.">
        The visual system represents how project work moves from unclear requirements to coordinated execution.
      </SectionHeader>
      <div className="ecosystem-map" aria-label="Connected professional ecosystem">
        {modules.map((module, index) => (
          <div className="ecosystem-node" style={{ "--i": index } as CSSProperties} key={module.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{module.label}</strong>
            <p>{module.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

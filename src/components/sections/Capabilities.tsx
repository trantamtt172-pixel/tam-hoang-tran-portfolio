import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilityGroups } from "@/data/skills";

export function Capabilities() {
  return (
    <section id="skills" className="section">
      <SectionHeader eyebrow="Capabilities" title="Four capability groups, connected by execution.">
        No arbitrary percentages. The value is in how the capabilities combine under project pressure.
      </SectionHeader>
      <div className="capability-system">
        {capabilityGroups.map((group, index) => (
          <article className="capability-panel" key={group.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="tag-row">
              {group.items.map((item) => (
                <small key={item}>{item}</small>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/data/experience";

export function Journey() {
  return (
    <section id="experience" className="section">
      <SectionHeader eyebrow="Journey" title="A connected development path, not a list of disconnected roles.">
        Each step contributes to the same profile: structured project work, industrial context, international communication and practical execution.
      </SectionHeader>
      <div className="timeline">
        {experiences.map((item, index) => (
          <article className="timeline-item" key={item.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{item.label}</p>
              <h3>{item.organization}</h3>
              <p>{item.context}</p>
              <div className="tag-row">
                {item.skills.map((skill) => (
                  <small key={skill}>{skill}</small>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

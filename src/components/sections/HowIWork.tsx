import { SectionHeader } from "@/components/ui/SectionHeader";
import { workStages } from "@/data/skills";

export function HowIWork() {
  return (
    <section className="section work-section">
      <SectionHeader eyebrow="How I work" title="A clear process that can iterate when reality changes.">
        Understand the problem, structure the work, build with the right tools, validate assumptions and deliver something usable.
      </SectionHeader>
      <div className="workflow">
        {workStages.map(([number, title, copy]) => (
          <article key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

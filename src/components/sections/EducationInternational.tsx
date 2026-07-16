import { GraduationCap, Map, MessageSquareText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const items = [
  [
    "M.Sc. Interdisciplinary Product Development",
    "Reutlingen University, March 2026 to July 2027, focused on optimizing product development and manufacturing processes for efficiency and quality.",
    GraduationCap,
  ],
  [
    "B.Eng. International Project Engineering",
    "Reutlingen University, August 2020 to February 2026, with IP-Plane participation, agile methods, CAD, project planning, budgeting and controlling.",
    Map,
  ],
  [
    "Languages",
    "German and Vietnamese as native languages, fluent English and Spanish at CEFR A2.",
    MessageSquareText,
  ],
] as const;

export function EducationInternational() {
  return (
    <section id="education" className="section education-section">
      <SectionHeader eyebrow="Education and international readiness" title="Academic development with international working range.">
        Education and language details are taken from the supplied CV.
      </SectionHeader>
      <div className="geo-panel">
        <div className="map-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {items.map(([title, copy, Icon]) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

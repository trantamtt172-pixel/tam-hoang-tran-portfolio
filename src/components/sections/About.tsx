import { Languages, MapPinned, Network, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

const cards = [
  ["Structured execution", "Translates ambiguous objectives into clear next steps, responsibilities and deliverables.", ShieldCheck],
  ["International readiness", "German, English and Vietnamese communication with international academic and project exposure.", MapPinned],
  ["Technology plus business", "Connects engineering context, operations, consulting logic and AI-supported workflow design.", Network],
  ["Multilingual profile", profile.languages.join(" / "), Languages],
] as const;

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeader eyebrow="Positioning" title="A project-focused profile built across engineering, operations and international work.">
        Tam is positioned for roles where structured thinking, reliable coordination and practical digital execution matter more than narrow specialization.
      </SectionHeader>
      <div className="about-grid">
        <div className="glass-panel large">
          <div className="profile-panel-content">
            <div>
              <p>{profile.positioning}</p>
              <div className="statement-grid">
                {profile.differentiators.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <figure className="profile-portrait">
              <Image
                src="/images/tam-hoang-tran-portrait.png"
                alt="Portrait of Tam Hoang Tran"
                width={400}
                height={400}
                unoptimized
              />
            </figure>
          </div>
        </div>
        {cards.map(([title, copy, Icon]) => (
          <article className="glass-panel" key={title}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

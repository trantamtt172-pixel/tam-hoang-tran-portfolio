import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <SectionHeader eyebrow="Selected work" title="Interactive cases that show structure, execution and judgement.">
        Cases are intentionally conservative: unverified outcomes and metrics are not displayed.
      </SectionHeader>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-visual" data-fit={project.image?.fit ?? "cover"} aria-hidden="true">
              {project.image ? (
                <Image src={project.image.src} alt="" fill sizes="(max-width: 980px) 100vw, 33vw" unoptimized />
              ) : null}
              <span>{project.status}</span>
              {!project.image ? <div /> : null}
            </div>
            <div>
              <p>{project.yearLabel}</p>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
            <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`}>
              Open case <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

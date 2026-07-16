import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/types";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main id="main" className="project-detail">
      <Link className="back-link" href="/#projects">
        <ArrowLeft size={18} /> Back to projects
      </Link>
      <section className="project-hero">
        <p className="eyebrow">{project.status}</p>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
        {project.links?.length ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        ) : null}
      </section>
      {project.image ? (
        <figure className="project-media">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1400}
            height={project.image.fit === "contain" ? 1400 : 950}
            sizes="(max-width: 900px) 100vw, 1100px"
            unoptimized
            priority
          />
          {project.image.caption ? <figcaption>{project.image.caption}</figcaption> : null}
        </figure>
      ) : null}
      <section className="project-detail-grid">
        <article>
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
        </article>
        <article>
          <h2>Role</h2>
          <p>{project.role}</p>
        </article>
        <article className="wide">
          <h2>Approach</h2>
          <ul>
            {project.approach.map((item) => (
              <li key={item}>
                <CheckCircle2 size={16} /> {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="wide">
          <h2>Contribution</h2>
          <ul>
            {project.contribution.map((item) => (
              <li key={item}>
                <CheckCircle2 size={16} /> {item}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Outcome</h2>
          <p>{project.outcome}</p>
        </article>
        <article>
          <h2>Tools and skills</h2>
          <div className="tag-row">
            {[...project.tools, ...project.skills].map((item) => (
              <small key={item}>{item}</small>
            ))}
          </div>
        </article>
      </section>
      {project.slug === "ai-ad-studio" ? <AdStudioPreview /> : null}
      {project.slug === "restaurant-order-application" ? <RestaurantPreview /> : null}
      {project.slug === "mobile-hybrid-energy-system" ? <EnergyPreview /> : null}
    </main>
  );
}

function AdStudioPreview() {
  return (
    <section className="interactive-preview">
      <p className="eyebrow">Prototype preview</p>
      <h2>Simulated campaign flow</h2>
      <div className="preview-flow">
        {["Objective", "Brand style", "AI draft", "Visual direction", "Review"].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </section>
  );
}

function RestaurantPreview() {
  return (
    <section className="interactive-preview">
      <p className="eyebrow">Prototype preview</p>
      <h2>Ordering flow</h2>
      <div className="menu-preview">
        {["Starters", "Mains", "Drinks", "Order overview"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function EnergyPreview() {
  return (
    <section className="interactive-preview energy-preview">
      <p className="eyebrow">Energy-flow visualization</p>
      <h2>Mobile hybrid system logic</h2>
      <div>
        {["Solar", "Battery", "Backup generation", "Mobile platform", "Critical loads"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

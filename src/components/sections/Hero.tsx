import { ArrowDownRight, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import { contactLinks, profile } from "@/data/profile";
import { CommandCenterLoader } from "@/components/three/CommandCenterLoader";

export function Hero() {
  const resume = contactLinks.find((link) => link.label === "Resume");

  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">International Project Engineering</p>
        <h1>
          <span>{profile.name}</span>
          {profile.headline}
        </h1>
        <p>{profile.subline}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore My Work <ArrowDownRight size={18} />
          </a>
          <a
            className="button button-secondary"
            href={resume?.href ?? "#resume"}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Tam Hoang Tran resume in a new tab"
          >
            View Resume <ExternalLink size={18} />
          </a>
          <a className="button button-ghost" href="#contact">
            Contact <Mail size={18} />
          </a>
        </div>
        <ul className="focus-strip" aria-label="Professional focus areas">
          {profile.focusAreas.slice(0, 6).map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
      <div className="hero-visual">
        <CommandCenterLoader />
      </div>
      <Link className="scroll-cue" href="#about" aria-label="Scroll to about section">
        Explore
      </Link>
    </section>
  );
}

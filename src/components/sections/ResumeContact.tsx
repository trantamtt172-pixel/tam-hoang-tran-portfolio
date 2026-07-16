import { ExternalLink, Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactLinks } from "@/data/profile";

export function ResumeContact() {
  const resume = contactLinks.find((link) => link.label === "Resume");
  const email = contactLinks.find((link) => link.label === "Email");
  const linkedIn = contactLinks.find((link) => link.label === "LinkedIn");

  return (
    <>
      <section id="resume" className="section resume-section">
        <SectionHeader eyebrow="Resume" title="The verified CV is connected as the source resume document.">
          The supplied DOCX is included in the public resume folder and opens through the resume actions.
        </SectionHeader>
        <div className="resume-panel">
          <div>
            <h3>cv_HoangTam_Tran.pdf</h3>
            <p>
              The public resume action opens the current PDF CV directly in a new browser tab.
            </p>
          </div>
          <a className="button button-secondary" href={resume?.href ?? "#contact"} target="_blank" rel="noreferrer">
            Open resume <ExternalLink size={18} />
          </a>
        </div>
      </section>
      <section id="contact" className="section contact-section">
        <SectionHeader eyebrow="Contact" title="Let’s turn the next complex challenge into a clear, working solution.">
          Email, LinkedIn and resume actions are active.
        </SectionHeader>
        <div className="contact-grid">
          <a className="contact-card" href={email?.href ?? "#"} aria-disabled={!email?.available}>
            <Mail aria-hidden="true" />
            <span>Email</span>
            <strong>{email?.available ? "Start a conversation" : "Public email required"}</strong>
          </a>
          <a className="contact-card" href={linkedIn?.href ?? "#"} aria-disabled={!linkedIn?.available}>
            <ExternalLink aria-hidden="true" />
            <span>LinkedIn</span>
            <strong>{linkedIn?.available ? "Open profile" : "Verified URL required"}</strong>
          </a>
          <a className="contact-card" href={resume?.href ?? "#"} target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden="true" />
            <span>Resume</span>
            <strong>{resume?.available ? "Open PDF" : "Placeholder route"}</strong>
          </a>
        </div>
      </section>
    </>
  );
}

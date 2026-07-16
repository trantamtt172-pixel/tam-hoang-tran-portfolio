export type Verification = "brief" | "resume-required" | "project-material-required";

export type Link = {
  label: string;
  href: string;
  external?: boolean;
  available: boolean;
  note?: string;
};

export type Profile = {
  name: string;
  headline: string;
  subline: string;
  positioning: string;
  languages: string[];
  focusAreas: string[];
  differentiators: string[];
};

export type Experience = {
  id: string;
  label: string;
  organization: string;
  context: string;
  skills: string[];
  verification: Verification;
  internalNote?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: "Prototype" | "Academic project" | "Experience case" | "Needs verification";
  yearLabel: string;
  role: string;
  description: string;
  challenge: string;
  approach: string[];
  contribution: string[];
  outcome: string;
  tools: string[];
  skills: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
    fit?: "cover" | "contain";
  };
  links?: Link[];
  featured: boolean;
  verified: Verification;
  internalNote?: string;
};

export type CapabilityGroup = {
  title: string;
  description: string;
  items: string[];
};

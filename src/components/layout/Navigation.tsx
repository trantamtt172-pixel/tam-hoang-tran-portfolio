"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contactLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Resume", href: contactLinks.find((link) => link.label === "Resume")?.href ?? "/#resume", external: true },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("site-nav", scrolled && "site-nav--scrolled")}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav aria-label="Primary navigation">
        <Link className="brand" href="/#home" onClick={() => setOpen(false)}>
          <span>{profile.name}</span>
          <small>Project Engineering</small>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={cn("nav-links", open && "nav-links--open")}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

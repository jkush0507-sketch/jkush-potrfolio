"use client";
import { useState } from "react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/#top" className="mono" style={{ fontWeight: 700, letterSpacing: ".16em" }}>{profile.wordmark}</a>
        <nav aria-label="Primary" className="nav-links">
          {navLinks.map((l) => <a key={l.href} className="nav-link" href={`/${l.href}`}>{l.label}</a>)}
        </nav>
        {profile.hasResume ? <a className="btn btn-primary" href="/resume.pdf" download>Resume</a>
          : <span className="btn btn-ghost" aria-disabled="true">Resume</span>}
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(v => !v)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="container mobile-menu">
          {navLinks.map((l) => <a key={l.href} href={`/${l.href}`} onClick={() => setOpen(false)}>{l.label}</a>)}
        </nav>
      )}
    </header>
  );
}

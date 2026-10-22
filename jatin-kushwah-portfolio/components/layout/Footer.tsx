import { profile } from "@/data/profile";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p className="muted">© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <div className="grid" style={{ gridAutoFlow: "column", gap: "1rem" }}>
          <a className="nav-link" href={`mailto:${profile.email}`}>Email</a>
          <a className="nav-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="nav-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

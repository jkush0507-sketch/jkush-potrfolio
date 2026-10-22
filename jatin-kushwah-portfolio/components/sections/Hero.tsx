import { profile } from "@/data/profile";
import SignalLine from "@/components/visuals/SignalLine";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section id="top" className="section" aria-label="Introduction">
      <div className="container grid grid-2" style={{ alignItems: "center", gap: "2.5rem" }}>
        <Reveal>
          <div className="grid" style={{ gap: "1.4rem" }}>
            <p className="mono label">{profile.roles.join(" · ")}</p>
            <h1 className="h1">{profile.headline}</h1>
            <p className="lead">{profile.supporting}</p>
            <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "start", gap: ".7rem", flexWrap: "wrap" }}>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Contact me</a>
              <a className="btn" href="/#projects">Explore projects</a>
            </div>
            <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "start", gap: "1rem" }}>
              <a className="nav-link" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="nav-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card grid-bg" style={{ minHeight: "340px", display: "grid", placeItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div aria-hidden="true" style={{ width: "104px", height: "104px", margin: "0 auto 1.2rem", borderRadius: "50%", border: "1px solid var(--border)", display: "grid", placeItems: "center", background: "var(--elevated)", fontSize: "2rem", fontWeight: 700, fontFamily: "var(--font-space), sans-serif" }}>{profile.initials}</div>
              <p className="mono label">Profile photo placeholder</p>
              <p className="muted" style={{ maxWidth: "30ch", margin: ".4rem auto 0" }}>A real profile image can replace this initials-based placeholder later.</p>
            </div>
            <SignalLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

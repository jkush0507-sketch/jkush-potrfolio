import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading label="Contact" title="Let’s build something useful" description="Open to analytics and software development opportunities, collaboration, and thoughtful project discussions." />
        <Reveal>
          <div className="card grid-bg center" style={{ padding: "clamp(2rem, 6vw, 4rem)" }}>
            <h3 className="h2">{profile.headline}</h3>
            <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "center", gap: ".8rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email Jatin</a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

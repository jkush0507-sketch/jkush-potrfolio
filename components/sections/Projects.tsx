import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading label="Selected projects" title="Building in public" description="Current project work and evolving product concepts. Both projects are actively in development." />
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <article className="card" style={{ height: "100%" }}>
                <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 className="h3">{project.name}</h3>
                  <span className="tag tag-accent">{project.status}</span>
                </div>
                <p className="mono muted" style={{ margin: ".4rem 0 1rem" }}>{project.tagline}</p>
                <p className="muted">{project.description}</p>
                {project.role && <p className="mono" style={{ marginTop: "1rem", color: "var(--accent)" }}>Role: {project.role}</p>}
                <div className="grid" style={{ marginTop: "1.2rem", gap: ".8rem" }}>
                  <div><p className="mono label">Current / known</p><ul style={{ paddingLeft: "1.1rem" }}>{project.verified.map((v) => <li key={v} className="muted">{v}</li>)}</ul></div>
                  <div><p className="mono label">Planned / intended</p><ul style={{ paddingLeft: "1.1rem" }}>{project.planned.map((v) => <li key={v} className="muted">{v}</li>)}</ul></div>
                </div>
                <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "start", gap: ".45rem", marginTop: "1.2rem", flexWrap: "wrap" }}>
                  {project.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading label="Work experience" title="Practical analytics experience" description="Full-time analytics work and internship experience across reporting, dashboards, and business data." />
        <div className="grid">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 90}>
              <article className="card">
                <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 className="h3">{item.role}</h3>
                  <span className={item.type === "Full-time" ? "tag tag-accent" : "tag"}>{item.type}</span>
                </div>
                <p className="mono muted" style={{ margin: ".4rem 0 1rem" }}>{item.company} · {item.duration}</p>
                <p className="muted">{item.summary}</p>
                <ul className="grid" style={{ gap: ".45rem", marginTop: "1rem", paddingLeft: "1.1rem" }}>
                  {item.highlights.map((h) => <li key={h} className="muted">{h}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

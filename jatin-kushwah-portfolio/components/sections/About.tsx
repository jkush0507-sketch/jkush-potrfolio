import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading label="About" title="Analytics with an engineering mindset" description="I work across data analysis, reporting, visualization, and software development." />
        <div className="grid grid-2">
          <Reveal>
            <div className="grid" style={{ gap: "1rem" }}>
              {profile.about.map((p, i) => <p key={i} className={i === 0 ? "lead" : "muted"}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card">
              <p className="mono label">Current focus</p>
              <h3 className="h3" style={{ margin: ".6rem 0" }}>From reports to reliable systems</h3>
              <p className="muted">My work begins with understanding the question behind the data: what needs to be measured, validated, communicated, and acted upon. I am also building software skills to turn those workflows into practical applications.</p>
              <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "start", gap: ".5rem", marginTop: "1rem", flexWrap: "wrap" }}>
                <span className="tag tag-accent">Analytics</span><span className="tag tag-accent">Visualization</span>
                <span className="tag">Backend development</span><span className="tag">Systems thinking</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

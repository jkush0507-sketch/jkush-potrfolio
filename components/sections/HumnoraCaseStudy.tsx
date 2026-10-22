import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
const flow = ["Help seeker", "Client interface", "API / backend", "Services & data", "Response"];

export default function HumnoraCaseStudy() {
  return (
    <section id="humnora" className="section" aria-labelledby="humnora-title">
      <div className="container">
        <SectionHeading label="Case study" title="Humnora: conceptual architecture" description="A systems-thinking view of an emergency response and human-assistance platform concept. This describes intended architecture, not verified production functionality." />
        <div className="grid grid-2">
          <Reveal>
            <div className="card" style={{ height: "100%" }}>
              <p className="mono label">Problem</p>
              <h3 className="h3" style={{ margin: ".5rem 0" }}>Assistance can be fragmented</h3>
              <p className="muted">People may need different kinds of help in urgent or difficult situations—such as emergency response, blood assistance, food, medicine, shelter, safety support, or humanitarian assistance. Finding the relevant source of help can be unclear.</p>
              <p className="mono label" style={{ marginTop: "1.4rem" }}>Intended solution</p>
              <p className="muted">Humnora is intended to connect help seekers with relevant helpers, volunteers, hospitals, NGOs, and service providers through a structured assistance platform.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card" style={{ height: "100%" }}>
              <p className="mono label">Conceptual flow</p>
              <svg viewBox="0 0 700 190" role="img" aria-label="Conceptual Humnora flow from help seeker to response">
                <path className="draw" d="M30 95 H670" stroke="var(--border)" strokeWidth="2" />
                {flow.map((label, i) => {
                  const x = 45 + i * 150;
                  return (<g key={label}><circle className="node" cx={x} cy="95" r="9" fill="var(--accent)" /><text x={x - 42} y="135" textAnchor="middle" fill="var(--text)" fontSize="12" fontFamily="monospace">{label}</text></g>);
                })}
              </svg>
              <p className="mono label" style={{ marginTop: "1rem" }}>Intended ecosystem</p>
              <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "start", gap: ".45rem", flexWrap: "wrap" }}>
                {["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Gemini", "Expo / React Native"].map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="card" style={{ marginTop: "1rem" }}>
            <p className="mono label">Development status</p>
            <p className="muted">Humnora is <strong style={{ color: "var(--accent)" }}>In Development</strong>. The architecture, assistance categories, and technology choices above are conceptual or planned. This portfolio does not claim live emergency dispatch, hospital integrations, production availability, live location tracking, or operational AI decision-making.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

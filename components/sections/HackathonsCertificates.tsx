import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { credentials } from "@/data/hackathons";

export default function HackathonsCertificates() {
  return (
    <section id="credentials" className="section" aria-labelledby="credentials-title">
      <div className="container">
        <SectionHeading label="Hackathons & certificates" title="Hackathon participation" description="Team-based project experience and verifiable participation credentials." />
        <div className="grid">
          {credentials.map((item, index) => (
            <Reveal key={item.event} delay={index * 90}>
              <article className="card grid grid-2" style={{ alignItems: "center" }}>
                <div>
                  <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "start", gap: ".5rem", flexWrap: "wrap" }}>
                    <span className="tag tag-accent">{item.year}</span>
                    <span className="tag">{item.certificate}</span>
                  </div>
                  <h3 className="h3" style={{ margin: ".8rem 0 .3rem" }}>{item.event}</h3>
                  <p className="mono muted">{item.organizer} · {item.project}</p>
                  <p style={{ color: "var(--accent)", fontWeight: 600 }}>{item.role}</p>
                  <p className="muted">{item.result}</p>
                  <ul style={{ paddingLeft: "1.1rem", marginTop: "1rem" }}>
                    {item.contributions.map((c) => <li key={c} className="muted">{c}</li>)}
                  </ul>
                </div>
                <div className="card" style={{ background: "rgba(17,20,19,.6)", textAlign: "center" }}>
                  {item.asset ? <a href={item.asset} target="_blank" rel="noreferrer" className="btn">View certificate</a> : (
                    <>
                      <svg viewBox="0 0 240 140" style={{ margin: "0 auto 1rem" }} aria-hidden="true">
                        <rect x="20" y="20" width="200" height="100" rx="10" fill="none" stroke="var(--border)" />
                        <path className="draw" d="M45 55 H195 M45 75 H160 M45 95 H130" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
                        <circle className="node" cx="185" cy="95" r="10" fill="none" stroke="var(--accent)" strokeWidth="2" />
                      </svg>
                      <p className="mono label">Participation Certificate</p>
                      <p className="muted" style={{ fontSize: ".9rem" }}>Certificate asset will be added later. No verification link is shown until the real certificate is available.</p>
                    </>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

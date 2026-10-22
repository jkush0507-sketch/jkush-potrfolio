import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skillGroups, type SkillGroup } from "@/data/skills";

function Visual({ kind }: { kind: SkillGroup["visual"] }) {
  const style = { width: "100%", height: "90px" };
  if (kind === "python") return (
    <svg viewBox="0 0 300 90" style={style} aria-hidden="true">
      {[20, 60, 100, 140, 180, 220, 260].map((x, i) => <circle key={x} className="node" cx={x} cy={[65, 45, 70, 35, 55, 30, 45][i]} r={4 + (i % 3)} fill="var(--accent)" />)}
      <path className="draw" d="M20 65 C80 20, 150 85, 260 45" stroke="var(--accent)" strokeWidth="2" fill="none" />
    </svg>
  );
  if (kind === "sql") return (
    <svg viewBox="0 0 300 90" style={style} aria-hidden="true">
      <ellipse cx="60" cy="25" rx="38" ry="12" fill="none" stroke="var(--accent)" />
      <path d="M22 25v35c0 7 17 12 38 12s38-5 38-12V25" fill="none" stroke="var(--accent)" />
      <rect className="draw" x="130" y="25" width="150" height="40" rx="6" fill="none" stroke="var(--muted)" />
      {[38, 50, 62].map((y) => <line key={y} x1="130" y1={y} x2="280" y2={y} stroke="var(--border)" />)}
    </svg>
  );
  if (kind === "bi") return (
    <svg viewBox="0 0 300 90" style={style} aria-hidden="true">
      {[35, 60, 25, 70, 45].map((h, i) => <rect key={i} className="draw" x={20 + i * 38} y={80 - h} width="24" height={h} fill="var(--accent)" opacity=".8" />)}
      <circle className="node" cx="250" cy="35" r="20" fill="none" stroke="var(--accent)" strokeWidth="4" />
    </svg>
  );
  if (kind === "frontend") return (
    <svg viewBox="0 0 300 90" style={style} aria-hidden="true">
      <rect className="draw" x="20" y="15" width="120" height="60" rx="8" fill="none" stroke="var(--accent)" />
      <rect className="draw" x="160" y="15" width="120" height="26" rx="6" fill="none" stroke="var(--muted)" />
      <rect className="draw" x="160" y="49" width="120" height="26" rx="6" fill="none" stroke="var(--muted)" />
    </svg>
  );
  if (kind === "backend") return (
    <svg viewBox="0 0 300 90" style={style} aria-hidden="true">
      <path className="draw" d="M20 45 H90 M120 45 H180 M210 45 H280" stroke="var(--accent)" strokeWidth="2" />
      <rect x="90" y="30" width="30" height="30" rx="6" fill="var(--accent-soft)" stroke="var(--accent)" />
      <rect x="180" y="30" width="30" height="30" rx="6" fill="var(--accent-soft)" stroke="var(--accent)" />
      <circle className="node" cx="35" cy="45" r="6" fill="var(--accent)" />
      <circle className="node" cx="265" cy="45" r="6" fill="var(--accent)" />
    </svg>
  );
  return (
    <svg viewBox="0 0 300 90" style={style} aria-hidden="true">
      <circle className="node" cx="50" cy="45" r="9" fill="var(--accent)" />
      <circle className="node" cx="150" cy="45" r="9" fill="var(--accent)" />
      <circle className="node" cx="250" cy="45" r="9" fill="var(--accent)" />
      <path className="draw" d="M50 45 H250" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading label="Skills in motion" title="Tools I use and explore" description="Skills are grouped by the kind of work they support. Experience varies by tool: some are used professionally, others through projects and continued learning." />
        <div className="grid grid-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 70}>
              <details className="card" style={{ height: "100%" }}>
                <summary style={{ cursor: "pointer", listStyle: "none" }}>
                  <span className="mono label">{group.context}</span>
                  <h3 className="h3" style={{ margin: ".5rem 0" }}>{group.title}</h3>
                  <Visual kind={group.visual} />
                  <p className="muted" style={{ marginTop: ".8rem" }}>{group.blurb}</p>
                </summary>
                <div className="grid" style={{ gridAutoFlow: "column", justifyContent: "start", gap: ".45rem", flexWrap: "wrap", marginTop: "1rem" }}>
                  {group.skills.map((s) => <span key={s} className="tag">{s}</span>)}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

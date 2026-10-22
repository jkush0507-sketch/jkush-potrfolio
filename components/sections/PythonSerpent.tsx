import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function PythonSerpent() {
  return (
    <section id="serpent" className="section" aria-labelledby="serpent-title">
      <div className="container">
        <SectionHeading label="Signature visual" title="Code, in motion" description="A Python-inspired signal path: code fragments, data points, and connections coming alive." />
        <Reveal>
          <div className="card grid-bg">
            <svg viewBox="0 0 900 300" role="img" aria-label="Animated Python serpent path with illuminated data nodes">
              <path className="serpent-path" d="M30 230 C130 90, 220 270, 330 160 S520 40, 620 170 S780 260, 870 110" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
              <path d="M30 230 C130 90, 220 270, 330 160 S520 40, 620 170 S780 260, 870 110" fill="none" stroke="var(--accent)" strokeWidth="16" opacity=".08" />
              {[110, 250, 420, 580, 720, 830].map((x, i) => (
                <g key={x}>
                  <circle className="node" cx={x} cy={[165, 205, 95, 145, 205, 145][i]} r="6" fill="var(--accent)" />
                  <text x={x - 14} y={[140, 180, 70, 120, 180, 120][i]} fill="var(--muted)" fontSize="12" fontFamily="monospace">{["import", "clean()", "df", "plot", "insight", "ship"][i]}</text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

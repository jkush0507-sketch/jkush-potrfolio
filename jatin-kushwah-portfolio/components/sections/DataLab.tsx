import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
const stages = ["Raw data", "Cleaning", "Analysis", "Visualization", "Insight"];

export default function DataLab() {
  return (
    <section id="datalab" className="section" aria-labelledby="datalab-title">
      <div className="container">
        <SectionHeading label="DataLab" title="Raw data to insight" description="An illustrative view of how I approach analytics: validate the data, understand patterns, communicate clearly, and surface a practical insight." />
        <Reveal>
          <div className="card">
            <p className="mono label">Demo data · illustrative only</p>
            <div className="grid grid-3" style={{ marginTop: "1.2rem" }}>
              {stages.map((stage, i) => (
                <div key={stage} className="card" style={{ background: "rgba(17,20,19,.6)" }}>
                  <p className="mono label">0{i + 1}</p>
                  <h3 className="h3" style={{ margin: ".5rem 0" }}>{stage}</h3>
                  <svg viewBox="0 0 220 90" aria-hidden="true">
                    {i === 0 && [12, 38, 24, 52, 31, 46].map((h, x) => <rect key={x} x={12 + x * 32} y={80 - h} width="20" height={h} fill="var(--muted)" opacity=".55" />)}
                    {i === 1 && [18, 34, 26, 42, 30].map((h, x) => <rect key={x} x={18 + x * 38} y={80 - h} width="24" height={h} fill="var(--accent)" opacity=".8" />)}
                    {i === 2 && <path className="draw" d="M12 72 C60 20, 110 88, 208 24" stroke="var(--accent)" strokeWidth="3" fill="none" />}
                    {i === 3 && [30, 52, 24, 66, 40].map((h, x) => <rect key={x} x={16 + x * 38} y={80 - h} width="24" height={h} fill="var(--accent)" opacity=".75" />)}
                    {i === 4 && (<><circle className="node" cx="40" cy="45" r="7" fill="var(--accent)" /><circle className="node" cx="110" cy="28" r="7" fill="var(--accent)" /><circle className="node" cx="180" cy="58" r="7" fill="var(--accent)" /><path d="M40 45 L110 28 L180 58" stroke="var(--accent)" strokeWidth="2" fill="none" opacity=".7" /></>)}
                  </svg>
                </div>
              ))}
            </div>
            <p className="muted" style={{ marginTop: "1.2rem" }}><strong style={{ color: "var(--text)" }}>Illustrative insight:</strong> cleaned and structured data makes trends easier to see, supporting clearer operational decisions.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

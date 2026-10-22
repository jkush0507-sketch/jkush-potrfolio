export default function SignalLine() {
  return (
    <svg viewBox="0 0 600 120" className="draw" style={{ width: "100%", marginTop: "1.5rem" }} aria-hidden="true">
      <path d="M10 70 C100 20, 180 120, 280 70 S460 20, 590 70" fill="none" stroke="var(--accent)" strokeWidth="2" opacity=".7" />
      <circle className="node" cx="80" cy="52" r="4" fill="var(--accent)" />
      <circle className="node" cx="280" cy="70" r="4" fill="var(--accent)" />
      <circle className="node" cx="450" cy="48" r="4" fill="var(--accent)" />
      <circle className="node" cx="560" cy="68" r="4" fill="var(--accent)" />
    </svg>
  );
}

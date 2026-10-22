import Reveal from "@/components/ui/Reveal";
type Props = { label: string; title: string; description?: string };
export default function SectionHeading({ label, title, description }: Props) {
  return (
    <Reveal>
      <div className="section-head">
        <p className="mono label">{label}</p>
        <h2 className="h2">{title}</h2>
        {description && <p className="lead">{description}</p>}
      </div>
    </Reveal>
  );
}

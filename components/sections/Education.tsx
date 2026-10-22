import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/ui/Reveal";
export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading label="Education" title="Academic background" />
        <Reveal>
          <article className="card">
            <span className="tag tag-accent">Currently pursuing</span>
            <h3 className="h3" style={{ margin: ".8rem 0 .3rem" }}>Bachelor of Computer Applications (BCA)</h3>
            <p className="muted">Dr. Bhimrao Ambedkar University, Agra, Uttar Pradesh, India</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import DataLab from "@/components/sections/DataLab";
import PythonSerpent from "@/components/sections/PythonSerpent";
import Projects from "@/components/sections/Projects";
import HumnoraCaseStudy from "@/components/sections/HumnoraCaseStudy";
import Skills from "@/components/sections/Skills";
import HackathonsCertificates from "@/components/sections/HackathonsCertificates";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero /><About /><Experience /><DataLab /><PythonSerpent />
      <Projects /><HumnoraCaseStudy /><Skills /><HackathonsCertificates />
      <Education /><Contact />
    </main>
  );
}

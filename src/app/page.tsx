import About from "@/component/about/About";
import Contact from "@/component/contact/Contact";
import Education from "@/component/education/Education";
import Experience from "@/component/experience/Expirence";
import Header from "@/component/header/header";
import Hero from "@/component/hero/Hero";
import Projects from "@/component/projects/Projects";
import Skills from "@/component/skills/skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      {/* <Contact /> */}
      <footer />
    </main>
  );
}

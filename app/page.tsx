import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { PPPProject } from "@/components/sections/PPPProject";
import { CareerGoals } from "@/components/sections/CareerGoals";
import { Reflection } from "@/components/sections/Reflection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <PPPProject />
        <CareerGoals />
        <Reflection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

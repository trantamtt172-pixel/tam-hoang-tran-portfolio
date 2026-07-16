import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { EducationInternational } from "@/components/sections/EducationInternational";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { ResumeContact } from "@/components/sections/ResumeContact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Ecosystem />
      <Journey />
      <Projects />
      <Capabilities />
      <HowIWork />
      <EducationInternational />
      <ResumeContact />
    </main>
  );
}

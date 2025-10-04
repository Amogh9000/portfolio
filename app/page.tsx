import { FluidBackground } from "@/components/ui/fluid-bg";
import { LightStream } from "@/components/ui/light-stream";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative">
      <FluidBackground />
      <LightStream className="fixed inset-0 z-10" />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}

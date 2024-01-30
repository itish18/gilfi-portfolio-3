import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex items-center h-full overflow-y-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

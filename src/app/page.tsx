import Hero from "@/components/Hero";
import ExpertiseStrip from "@/components/ExpertiseStrip";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ExpertiseStrip />
      <Contact />
    </main>
  );
}

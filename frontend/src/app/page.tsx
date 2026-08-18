import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import TechnologySection from "@/components/home/TechnologySection";
import AboutSection from "@/components/home/AboutSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ProblemSection />
        <SolutionSection />
        <TechnologySection />
        <AboutSection />
        <RoadmapSection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
}

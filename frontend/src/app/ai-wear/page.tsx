import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIWearHero from "@/components/ai-wear/AIWearHero";
import ChallengeSection from "@/components/ai-wear/ChallengeSection";
import HowItWorksSection from "@/components/ai-wear/HowItWorksSection";
import TechnologySection from "@/components/ai-wear/TechnologySection";
import ProductSeriesSection from "@/components/ai-wear/ProductSeriesSection";
import UseCasesSection from "@/components/ai-wear/UseCasesSection";
import FAQSection from "@/components/ai-wear/FAQSection";
import PreBookCTASection from "@/components/ai-wear/PreBookCTASection";
import TimelineSection from "@/components/ai-wear/TimelineSection";

export const metadata = {
  title: "AI-Wear | Trinetrum Ventures",
  description: "The world's first truly offline AI-powered smart eyewear platform.",
};

export default function AIWearPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow">
        <AIWearHero />
        <ChallengeSection />
        <HowItWorksSection />
        <TechnologySection />
        <ProductSeriesSection />
        <UseCasesSection />
        <TimelineSection />
        <FAQSection />
        <PreBookCTASection />
      </div>

      <Footer />
    </main>
  );
}

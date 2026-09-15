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
    <main className="min-h-screen bg-[#020817] flex flex-col font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Subtle Theme Gradients for Dark Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none fixed z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#0ea5e9]/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[50%] h-[50%] bg-[#0284c7]/15 rounded-full blur-[120px]"></div>
      </div>

      {/* Dark Theme Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none fixed" />

      <div className="relative z-10 w-full flex flex-col flex-grow">
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
      </div>

      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </main>
  );
}

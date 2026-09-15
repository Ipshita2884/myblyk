import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/legal/LegalHero";
import DisclaimerContent from "@/components/legal/DisclaimerContent";
import LegalContactCard from "@/components/legal/LegalContactCard";

export const metadata = {
  title: "Disclaimer | MyBlyk",
  description: "Important disclaimers regarding Trinetrum Ventures' website content and AI-Wear product.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <LegalHero 
            title="Disclaimer"
            subtitle="Important disclaimers regarding Trinetrum Ventures' website content and AI-Wear product."
          />
          
          <div className="mt-8">
            <DisclaimerContent />
          </div>

          <LegalContactCard />
        </div>
      </div>

      <Footer />
    </main>
  );
}

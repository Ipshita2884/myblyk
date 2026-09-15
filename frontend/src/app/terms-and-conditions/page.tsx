import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/legal/LegalHero";
import TermsContent from "@/components/legal/TermsContent";
import LegalContactCard from "@/components/legal/LegalContactCard";

export const metadata = {
  title: "Terms & Conditions | MyBlyk",
  description: "The terms governing your use of Trinetrum Ventures' website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <LegalHero 
            title="Terms & Conditions"
            subtitle="The terms governing your use of Trinetrum Ventures' website and services."
          />
          
          <div className="mt-8">
            <TermsContent />
          </div>

          <LegalContactCard />
        </div>
      </div>

      <Footer />
    </main>
  );
}

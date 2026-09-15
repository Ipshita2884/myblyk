import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/legal/LegalHero";
import PrivacyContent from "@/components/legal/PrivacyContent";
import LegalContactCard from "@/components/legal/LegalContactCard";

export const metadata = {
  title: "Privacy Policy | MyBlyk",
  description: "How Trinetrum Ventures collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <LegalHero 
            title="Privacy Policy"
            subtitle="How Trinetrum Ventures collects, uses, and protects your information."
          />
          
          <div className="mt-8">
            <PrivacyContent />
          </div>

          <LegalContactCard />
        </div>
      </div>

      <Footer />
    </main>
  );
}

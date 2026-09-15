import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/legal/LegalHero";
import CookieContent from "@/components/legal/CookieContent";
import LegalContactCard from "@/components/legal/LegalContactCard";

export const metadata = {
  title: "Cookie Policy | MyBlyk",
  description: "How we use cookies and similar tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <LegalHero 
            title="Cookie Policy"
            subtitle="How we use cookies and similar tracking technologies."
          />
          
          <div className="mt-8">
            <CookieContent />
          </div>

          <LegalContactCard />
        </div>
      </div>

      <Footer />
    </main>
  );
}

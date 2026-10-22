import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqHero from "@/components/faqs/FaqHero";
import FaqCTA from "@/components/faqs/FaqCTA";
import FaqsClient from "./FaqsClient";

export const metadata = {
  title: "MyBlyk FAQs | AI Glasses, Pricing & Technology",
  description: "Find answers about MyBlyk AI Glasses, Edge AI, internet connectivity, accessibility features, privacy, ₹999 pre-booking, expected pricing and launch plans.",
};

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <FaqHero />
          
          <FaqsClient />
          
          <FaqCTA />
        </div>
      </div>

      <Footer />
    </main>
  );
}

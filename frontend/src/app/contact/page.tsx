import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import BusinessInfo from "@/components/contact/BusinessInfo";
import FAQAccordion from "@/components/contact/FAQAccordion";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us | MyBlyk",
  description: "Get in touch with Trinetrum Ventures. Whether you're an investor, partner, or user, let's build the future together.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Subtle Theme Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none fixed z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#0ea5e9]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[50%] bg-indigo-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-sky-300/15 rounded-full blur-[100px]"></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none fixed" />
      
      <div className="relative z-10 w-full flex flex-col flex-grow">
        <Navbar />
        
        <div className="flex-grow pt-16 pb-24">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
          <ContactHero />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-start">
            {/* Left Sidebar (Info & Business) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <ContactCards />
              <BusinessInfo />
            </div>

            {/* Right Main Area (Form) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <ContactForm />
            </div>
          </div>

          <div className="mt-12">
            <FAQAccordion />
          </div>

          <ContactCTA />
        </div>
      </div>
      </div>

      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareersHero from "@/components/careers/CareersHero";
import CareersTabs from "@/components/careers/CareersTabs";

export const metadata = {
  title: "Careers | Trinetrum Ventures",
  description: "Join our deep-tech team to build assistive technology that restores independence.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
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
        
        <div className="flex-grow flex flex-col items-center">
          <CareersHero />
          
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
            <CareersTabs />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

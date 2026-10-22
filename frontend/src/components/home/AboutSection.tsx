import { Users, Cpu, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex px-3 py-1.5 rounded-full bg-blue-50 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100 self-start">
              ABOUT MYBLYK
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-8">
              Built by Trinetrum Ventures. <br />
              <span className="text-brand-blue">Shaped by a Real-World Need.</span>
            </h2>

            <div className="text-lg text-gray-600 space-y-6 mb-10 leading-relaxed">
              <p>
                MyBlyk is an AI-powered assistive technology brand being developed by Trinetrum Ventures Private Limited.
              </p>
              <p>
                The idea began with a simple question:
              </p>
              <p className="italic text-gray-700 pl-4 border-l-4 border-brand-blue">
                What if technology could help people access more of the information around them, without making them more dependent on technology itself?
              </p>
              <p>
                Today, the team is working across AI, computer vision, embedded intelligence, software and product development to turn that idea into a practical wearable.
              </p>
              <p>
                We are building step by step, from research and proof-of-concept systems toward real product prototypes and user testing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                <Users className="w-4 h-4 text-brand-blue" />
                Human-Centred
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                <Cpu className="w-4 h-4 text-brand-blue" />
                Deep-Tech Driven
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                <Globe className="w-4 h-4 text-brand-blue" />
                India First Approach
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors">
              Meet the Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Image Collage */}
          <div className="relative h-[700px]">

            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-[65%] h-[40%] rounded-3xl overflow-hidden shadow-xl z-10 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-10 right-0 w-[55%] h-[65%] rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Hardware engineering lab"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card 1: 2026 */}
            <div className="absolute top-[45%] left-0 z-30 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-64">
              <h4 className="text-2xl font-bold text-brand-navy mb-2">2026</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Founded with a mission to democratize AI-powered assistive technology.
              </p>
            </div>

            {/* Floating Card 2: India-First */}
            <div className="absolute -bottom-6 left-10 z-30 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-72">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-4">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-brand-navy mb-1">India-First</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Building for India&apos;s 7.5 crore+ visually impaired population first, then expanding globally.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

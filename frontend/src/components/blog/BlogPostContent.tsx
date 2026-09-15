'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Share2, BookOpen } from 'lucide-react';

export default function BlogPostContent() {
  return (
    <article className="bg-white">
      {/* Header Section */}
      <section className="bg-[#0f172a] text-white pt-20 pb-48 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium mb-10">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight"
          >
            Why Edge AI is the Future of<br className="hidden md:block" /> Assistive Technology
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6 text-sm text-slate-300 font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center">
                <span className="text-[10px] text-white">PN</span>
              </div>
              Priya Nair, CTO
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              7 min read
            </div>
            <div>June 12, 2025</div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-6 relative z-20 -mt-32 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 aspect-video relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Circuit Board" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>
      </section>

      {/* Article Body */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg prose-slate max-w-none text-slate-700"
        >
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-800 mb-12">
            Cloud-based AI has powered the first generation of assistive devices. But the next generation — the one that actually works when it matters most — must run entirely on-device.
          </p>

          <p className="mb-12">
            For the past decade, the dominant model for AI-powered assistive technology has followed a simple architecture: sensors collect data, the data travels to a cloud server, a model runs inference, and a result comes back. This works well in lab settings and controlled demos. It works poorly in the real world.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Connectivity Problem</h2>
          <p className="mb-10">
            The real world is not a wifi-connected conference room. It's a rural bus route, a hospital basement, a crowded market, an underground metro. For a visually impaired person, these are not edge cases — they're Tuesday morning. The moment a cloud-dependent device loses connectivity is the moment it becomes useless.
          </p>
          <p className="mb-12">
            Edge AI eliminates this fragility. By moving the inference workload to the device itself, an assistive wearable becomes a reliable tool rather than a device whose usefulness is contingent on a cellular signal.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Latency Problem</h2>
          <p className="mb-10">
            Even with perfect connectivity, cloud round-trips introduce latency. For voice assistants reading a webpage, 300ms is acceptable. For real-time navigation guidance — telling a user there's a step down, a door ahead, a car approaching — 300ms is a safety issue.
          </p>
          <p className="mb-12">
            On-device inference at modern edge NPUs can achieve sub-50ms latency consistently. That's the difference between guidance that feels anticipatory and guidance that feels like an apology after the fact.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Privacy Problem</h2>
          <p className="mb-10">
            A camera-equipped wearable that streams video to a cloud server raises profound privacy questions. Whose faces are being processed? Who controls the data? What are the retention policies? For a device that literally sees through your eyes, these questions are not theoretical — they are existential.
          </p>
          <p className="mb-12">
            Edge AI enables a privacy-by-architecture approach. When all processing happens on-device and no visual data leaves the glasses, the privacy question is structurally resolved. Not by policy or contractual promise, but by technical design.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Engineering Challenge</h2>
          <p className="mb-10">
            Running capable neural networks on embedded hardware is genuinely difficult. It requires careful model compression, hardware-software co-design, efficient inference runtimes, and power management that doesn't drain a battery in two hours. These are hard problems — which is exactly why very few companies are solving them well.
          </p>
          <p className="mb-16">
            At Trinetrum, these engineering challenges are our core competency. AI-Wear is built from the embedded layer up — designed first for the constraints of the hardware, then for the richness of the AI pipeline. The result is a device that works when it needs to, for as long as it needs to, wherever the user takes it.
          </p>

          {/* About Product Box */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#f0f7ff] border border-blue-100 rounded-2xl p-8 mb-16 transition-all"
          >
            <div className="flex items-center gap-3 text-[#0ea5e9] font-bold text-lg mb-4">
              <BookOpen className="w-5 h-5" />
              About AI-Wear
            </div>
            <p className="text-slate-700 text-sm md:text-base mb-6">
              AI-Wear is Trinetrum's flagship platform implementing this edge-first approach. Learn more about the technology and pre-book your unit.
            </p>
            <Link href="/ai-wear" className="inline-flex items-center gap-2 text-[#0ea5e9] font-semibold hover:text-[#0284c7] transition-colors">
              Explore AI-Wear <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>

          {/* Author footer */}
          <div className="border-t border-gray-200 pt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Priya Nair" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Priya Nair</div>
                <div className="text-sm text-slate-500">Co-Founder & CTO, Trinetrum Ventures</div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-slate-600 hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </motion.div>
      </section>
    </article>
  );
}

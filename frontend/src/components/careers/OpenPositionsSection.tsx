"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Clock, Briefcase, Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";

// Mock Data
const JOB_CATEGORIES = ["All", "Engineering", "AI Research", "Design", "Product", "Business"];

const JOBS = [
  {
    id: "1",
    title: "Senior Edge AI Engineer",
    category: "Engineering",
    location: "Bengaluru, India",
    type: "Full-time",
    posted: "Posted July 2025",
    description: "Lead the development of on-device neural inference pipelines for AI-Wear. Optimize models for low-latency, low-power wearable hardware.",
    responsibilities: [
      "Design and optimize neural network architectures for edge deployment",
      "Implement model quantization and compression pipelines",
      "Collaborate with hardware team on SoC integration and power optimization",
      "Benchmark and profile inference performance on target hardware",
      "Lead code reviews and mentor junior engineers",
    ],
    requirements: [
      "4+ years of experience in ML inference and model optimization",
      "Strong proficiency in PyTorch, TFLite, or ONNX Runtime",
      "Experience with ARM NN, SNPE, or similar edge ML frameworks",
      "Background in embedded systems or low-power hardware a plus",
      "Published research in edge AI or computer vision preferred",
    ],
    benefits: [
      "Competitive salary + ESOPs",
      "Remote-flexible policy",
      "Health Insurance",
      "Research publication support",
      "Annual learning budget ₹50,000",
    ],
  },
  {
    id: "2",
    title: "Edge AI / Embedded Systems Engineer",
    category: "Engineering",
    location: "Bengaluru, India",
    type: "Full-time",
    posted: "Posted July 2025",
    description: "Build robust embedded systems and bring state of the art AI to the physical world on constrained devices.",
    responsibilities: [
      "Develop low-level drivers",
      "Integrate sensors",
      "Optimize power states",
    ],
    requirements: [
      "Experience with RTOS",
      "C/C++ mastery",
      "Hardware bringup experience",
    ],
    benefits: [
      "Competitive salary + ESOPs",
      "Health Insurance",
      "Relocation Assistance",
    ],
  },
  {
    id: "3",
    title: "ML Engineer — Assistive AI",
    category: "AI Research",
    location: "Remote / Bengaluru",
    type: "Full-time",
    posted: "Posted June 2025",
    description: "Develop ML algorithms specifically tailored for assistive technologies.",
    responsibilities: [
      "Build and train models",
      "Evaluate model fairness and accessibility",
      "Deploy models to edge devices",
    ],
    requirements: [
      "Strong background in ML",
      "Experience with assistive tech",
    ],
    benefits: [
      "Competitive salary",
      "Remote-flexible",
    ],
  },
  {
    id: "4",
    title: "UX Designer — Accessibility",
    category: "Design",
    location: "Bengaluru, India",
    type: "Full-time",
    posted: "Posted June 2025",
    description: "Design inclusive and accessible user experiences for our AI-Wear platform, ensuring it empowers all users seamlessly.",
    responsibilities: [
      "Conduct user research focused on accessibility",
      "Design voice and tactile interfaces",
      "Prototype and test with diverse user groups",
    ],
    requirements: [
      "3+ years in UX/UI design",
      "Strong portfolio highlighting accessible design",
      "Knowledge of WCAG guidelines",
    ],
    benefits: [
      "Competitive salary + ESOPs",
      "Remote-flexible policy",
      "Health Insurance",
    ],
  },
  {
    id: "5",
    title: "Product Manager — AI-Wear",
    category: "Product",
    location: "Bengaluru, India",
    type: "Full-time",
    posted: "Posted August 2025",
    description: "Drive the product vision and roadmap for our flagship AI-Wear device from concept to launch.",
    responsibilities: [
      "Define product requirements and specifications",
      "Cross-functional collaboration with engineering and design",
      "Market research and competitive analysis",
    ],
    requirements: [
      "5+ years in product management, preferably in hardware/AI",
      "Strong technical background",
      "Excellent communication skills",
    ],
    benefits: [
      "Competitive salary + ESOPs",
      "Health Insurance",
      "Travel Allowance",
    ],
  },
  {
    id: "6",
    title: "Business Development Manager",
    category: "Business",
    location: "Bengaluru / Delhi",
    type: "Full-time",
    posted: "Posted August 2025",
    description: "Forge strategic partnerships and drive B2B sales for our assistive technology solutions.",
    responsibilities: [
      "Identify and engage potential partners and clients",
      "Negotiate contracts and close deals",
      "Represent the company at industry events",
    ],
    requirements: [
      "4+ years in B2B sales or business development",
      "Experience in the health-tech or assistive tech sector",
      "Proven track record of meeting targets",
    ],
    benefits: [
      "Competitive salary + ESOPs + Commission",
      "Health Insurance",
      "Travel Allowance",
    ],
  }
];

const ITEMS_PER_PAGE = 4;

export default function OpenPositionsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Filter Jobs
  const filteredJobs = useMemo(() => {
    let jobs = JOBS;

    if (activeCategory !== "All") {
      jobs = jobs.filter((job) => job.category === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(lowerQuery) ||
          job.description.toLowerCase().includes(lowerQuery)
      );
    }

    return jobs;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
    setExpandedJobId(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
    setExpandedJobId(null);
  };

  const toggleJob = (id: string) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 text-gray-900 relative overflow-hidden" id="open-positions">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-gradient-to-br from-[#0ea5e9]/10 to-purple-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-gradient-to-tl from-indigo-500/10 to-[#0ea5e9]/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 mb-4 text-[10px] font-bold tracking-widest text-[#0ea5e9] uppercase bg-gradient-to-r from-[#f0f7ff] to-[#e0e7ff] border border-blue-100/50 rounded-full shadow-lg shadow-[#0ea5e9]/10"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mr-2"
            />
            OPEN POSITIONS
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Find your role
          </h2>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {JOB_CATEGORIES.map((cat, index) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-white" : "text-gray-600 bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-full shadow-lg shadow-[#0ea5e9]/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto group mb-12">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Search className="w-5 h-5 text-gray-400 group-focus-within:text-[#0ea5e9] transition-colors" />
              </motion.div>
            </div>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-200 rounded-2xl bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] outline-none"
              placeholder="Search by role, keyword..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </motion.div>

        {/* Job List */}
        <div className="space-y-4 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:border-[#0ea5e9]/30 transition-all group"
                >
                  {/* Header / Trigger */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => toggleJob(job.id)}
                    className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none transition-colors hover:bg-gradient-to-r hover:from-[#f0f7ff]/30 hover:to-transparent"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <motion.h3 
                          className="text-xl font-semibold text-gray-900 group-hover:text-[#0ea5e9] transition-colors"
                        >
                          {job.title}
                        </motion.h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full"><Briefcase className="w-3.5 h-3.5 text-[#0ea5e9]"/> {job.category}</span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full"><MapPin className="w-3.5 h-3.5 text-[#0ea5e9]"/> {job.location}</span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full"><Clock className="w-3.5 h-3.5 text-[#0ea5e9]"/> {job.type}</span>
                      </div>
                    </div>
                    <motion.div 
                      className="text-gray-400 flex-shrink-0 flex items-center justify-center transition-transform duration-300"
                      animate={{ rotate: expandedJobId === job.id ? 180 : 0 }}
                    >
                      <ChevronDown className={`w-5 h-5 ${expandedJobId === job.id ? 'text-[#0ea5e9]' : ''}`} />
                    </motion.div>
                  </motion.button>

                  {/* Body / Expandable Content */}
                  <AnimatePresence>
                    {expandedJobId === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-6 md:p-8 pt-6">
                          <p className="text-gray-600 text-sm leading-relaxed mb-8 font-mono">
                            {job.description}
                          </p>

                          <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Responsibilities</h4>
                              <ul className="space-y-3">
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex gap-3 text-gray-600 text-sm">
                                    <span className="text-[#0088cc] font-bold text-lg leading-none">→</span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Requirements</h4>
                              <ul className="space-y-3">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex gap-3 text-gray-600 text-sm items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0088cc] mt-1.5 flex-shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Benefits</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.benefits.map((benefit, i) => (
                                <span key={i} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>

                          <motion.div 
                            className="mt-8"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <button className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white font-medium py-3 px-8 rounded-xl transition-all text-sm flex items-center gap-2 shadow-xl shadow-[#0ea5e9]/30 hover:shadow-[#0ea5e9]/50 relative overflow-hidden group">
                              <motion.div
                                className="absolute inset-0 bg-white/20"
                                animate={{
                                  x: ['-100%', '100%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                              <span className="relative z-10">Apply for This Role</span>
                              <motion.span
                                className="relative z-10"
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                →
                              </motion.span>
                            </button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200 border-dashed"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4 shadow-sm">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No roles found</h3>
                <p className="text-sm text-gray-500">We couldn't find any positions matching your search criteria.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-4 text-[#0088cc] text-sm font-medium hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-600"
              aria-label="Previous page"
            >
              <ChevronUp className="w-5 h-5 -rotate-90" />
            </motion.button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    currentPage === i + 1
                      ? "bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-lg shadow-[#0ea5e9]/30"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage((p) => Math.max(1, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-600"
              aria-label="Next page"
            >
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </motion.button>
          </motion.div>
        )}
      </div>
      
      {/* Quote Section */}
      <div className="mt-32 max-w-3xl mx-auto text-center px-6">
        <p className="text-xl md:text-2xl font-medium text-gray-900 italic leading-snug">
          "We are not building products. We are building independence — and we need people who understand the difference."
        </p>
        <p className="mt-8 text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold">
          — Trinetrum Founding Team
        </p>
      </div>
    </section>
  );
}

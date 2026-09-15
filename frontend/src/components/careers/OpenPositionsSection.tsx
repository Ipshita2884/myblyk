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
    <section className="py-24 bg-white text-gray-900" id="open-positions">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full">
            OPEN POSITIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Find your role
          </h2>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {JOB_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-white" : "text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-[#0088cc] rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto group mb-12">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-[#0088cc] transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-200 rounded-2xl bg-white focus:ring-2 focus:ring-[#0088cc] focus:border-transparent transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] outline-none"
              placeholder="Search by role, keyword..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Job List */}
        <div className="space-y-4 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all"
                >
                  {/* Header / Trigger */}
                  <button
                    onClick={() => toggleJob(job.id)}
                    className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none transition-colors hover:bg-gray-50/50"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5"/> {job.category}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5"/> {job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> {job.type}</span>
                      </div>
                    </div>
                    <div className="text-gray-400 flex-shrink-0 flex items-center justify-center transition-transform duration-300">
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedJobId === job.id ? 'rotate-180 text-[#0088cc]' : ''}`} />
                    </div>
                  </button>

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

                          <div className="mt-8">
                            <button className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-medium py-2.5 px-6 rounded-lg transition-colors text-sm flex items-center gap-2 shadow-[0_4px_14px_rgba(0,136,204,0.39)]">
                              Apply for This Role <span>→</span>
                            </button>
                          </div>
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
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-600"
              aria-label="Previous page"
            >
              <ChevronUp className="w-5 h-5 -rotate-90" />
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    currentPage === i + 1
                      ? "bg-[#0088cc] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-600"
              aria-label="Next page"
            >
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </button>
          </div>
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

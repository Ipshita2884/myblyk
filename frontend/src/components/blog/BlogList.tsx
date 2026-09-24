'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ["All", "Technology", "AI Research", "Engineering", "Accessibility"];

const BLOG_POSTS = [
  {
    id: 1,
    category: "AI Research",
    title: "How Computer Vision is Redefining Independence for the Visually Impaired",
    excerpt: "A deep dive into the visual perception stack that powers AI-Wear — and why context matters as much as accuracy.",
    author: "Arjun Sharma",
    readTime: "9 min read",
    date: "May 28, 2025",
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6dce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Engineering",
    title: "Privacy-First Design: Why We Built AI-Wear with Zero Cloud Processing",
    excerpt: "For a device that sees the world through your eyes, privacy isn't a feature — it's a foundation. Here's how we architect it.",
    author: "Rohan Mehta",
    readTime: "6 min read",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Accessibility",
    title: "The State of Assistive Technology in India: A 2025 Overview",
    excerpt: "India has 5+ million visually impaired individuals and a rapidly growing tech ecosystem. Why is the intersection still underserved?",
    author: "Kavya Reddy",
    readTime: "8 min read",
    date: "April 22, 2025",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "Engineering",
    title: "Bone Conduction Audio in Wearables: A Technical Primer",
    excerpt: "Why spatial audio matters for assistive wearables, and how bone-conduction speakers preserve situational awareness.",
    author: "Rohan Mehta",
    readTime: "7 min read",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = BLOG_POSTS.filter(post => 
    activeCategory === "All" || post.category === activeCategory
  );

  const topCards = filteredPosts.slice(0, 3);
  const listPosts = filteredPosts.slice(3);

  return (
    <section className="bg-slate-50/50 py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                  ? "bg-[#0ea5e9] text-white shadow-md shadow-[#0ea5e9]/20" 
                  : "bg-white text-slate-600 border border-gray-200 hover:border-[#0ea5e9]/30 hover:bg-[#f0f7ff]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid (First 3 posts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {topCards.map((post, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -8 }}
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)] transition-all duration-500 flex flex-col cursor-pointer group relative"
                onClick={() => window.location.href = '/blog/edge-ai-future'}
              >
                {/* Top highlight bar that appears on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

                <div className="h-56 w-full overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-1"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 group-hover:bg-blue-50/10 transition-colors duration-500">
                  <div className="inline-flex items-center gap-2 text-[#0ea5e9] text-xs font-bold tracking-wider uppercase mb-4 bg-[#f0f7ff] group-hover:bg-white group-hover:shadow-sm px-3 py-1 rounded-full w-fit transition-all duration-300 transform group-hover:translate-x-1">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#0ea5e9] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3 group-hover:text-slate-700 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs font-medium text-gray-500 pt-5 border-t border-gray-50 group-hover:border-blue-100 mt-auto transition-colors duration-500">
                    <span className="group-hover:text-[#0ea5e9] transition-colors duration-300 font-semibold">{post.author}</span>
                    <div className="flex items-center gap-2">
                      <span>{post.readTime}</span>
                      <span className="text-gray-300">•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Blog Listing (Remaining posts) */}
        {listPosts.length > 0 && (
          <div className="mt-16 flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {listPosts.map((post, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] transition-all duration-500 flex flex-col md:flex-row cursor-pointer group relative"
                  onClick={() => window.location.href = '/blog/edge-ai-future'}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0ea5e9] to-[#38bdf8] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20"></div>

                  <div className="w-full md:w-72 h-56 md:h-auto overflow-hidden relative shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col justify-center flex-grow group-hover:bg-blue-50/5 transition-colors duration-500">
                    <div className="inline-flex items-center gap-2 text-[#0ea5e9] text-xs font-bold tracking-wider uppercase mb-3 bg-[#f0f7ff] group-hover:bg-white group-hover:shadow-sm px-3 py-1 rounded-full w-fit transition-all duration-300">
                      {post.category}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#0ea5e9] transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mt-auto">
                      <span className="group-hover:text-[#0ea5e9] transition-colors duration-300 font-semibold">{post.author}</span>
                      <span className="text-gray-300">•</span>
                      <span>{post.readTime}</span>
                      <span className="text-gray-300">•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}

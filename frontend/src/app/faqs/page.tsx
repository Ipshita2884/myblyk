"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqHero from "@/components/faqs/FaqHero";
import FaqTabs from "@/components/faqs/FaqTabs";
import FaqAccordionList from "@/components/faqs/FaqAccordionList";
import FaqCTA from "@/components/faqs/FaqCTA";

const FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
  "About AI-Wear": [
    {
      question: "What is AI-Wear?",
      answer: "AI-Wear is a breakthrough smart eyewear platform that uses on-device computer vision and edge AI to give the visually impaired a new way to experience the world.",
    },
    {
      question: "Does AI-Wear work without internet?",
      answer: "Yes, our core AI models run directly on the device using edge computing, ensuring functionality even without an active internet connection.",
    },
    {
      question: "How accurate is the object and text recognition?",
      answer: "Our models achieve state-of-the-art accuracy, optimized specifically for real-time inference to quickly identify objects, read text, and describe environments.",
    },
    {
      question: "How does AI-Wear guide users?",
      answer: "It uses subtle haptic feedback and spatial audio cues to help users navigate their surroundings safely and intuitively.",
    },
  ],
  "Privacy & Security": [
    {
      question: "Is my visual data stored on your servers?",
      answer: "No. All visual processing happens locally on the device. We do not store or transmit your video feed, prioritizing your absolute privacy.",
    }
  ],
  "Availability & Pricing": [
    {
      question: "When will AI-Wear be available?",
      answer: "We are currently in the beta testing phase and expect to launch pre-orders by late next year.",
    }
  ],
  "Company & Partnerships": [
    {
      question: "How can we partner with Trinetrum?",
      answer: "Please reach out to us via the Contact page and select 'Partnership'. We are actively looking for NGO and tech partners.",
    }
  ],
};

export default function FaqsPage() {
  const [activeTab, setActiveTab] = useState("About AI-Wear");

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <FaqHero />
          
          <FaqTabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          <FaqAccordionList faqs={FAQ_DATA[activeTab] || []} />
          
          <FaqCTA />
        </div>
      </div>

      <Footer />
    </main>
  );
}

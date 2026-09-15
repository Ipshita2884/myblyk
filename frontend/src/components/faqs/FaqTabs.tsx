"use client";

interface FaqTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  "About AI-Wear",
  "Privacy & Security",
  "Availability & Pricing",
  "Company & Partnerships"
];

export default function FaqTabs({ activeTab, onTabChange }: FaqTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 border ${
              isActive 
                ? "bg-[#0ea5e9] text-white border-[#0ea5e9] shadow-sm" 
                : "bg-white text-slate-700 border-gray-200 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

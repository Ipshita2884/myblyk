import Link from "next/link";

export default function LegalContactCard() {
  return (
    <div className="mt-20 max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <p className="text-[14px] text-slate-600">
        Questions about this document? Contact our legal team:<br />
        <a href="mailto:legal@trinetrum.com" className="text-[#0ea5e9] font-medium hover:underline mt-2 inline-block">
          legal@trinetrum.com
        </a>
      </p>
    </div>
  );
}

import React from "react";

export default function PrivacyContent() {
  return (
    <div className="space-y-12 max-w-4xl">
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
        <ul className="space-y-3">
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Account information: name, email address, and role when you create an account.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Contact form submissions: name, email, organization, and message content.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Usage data: pages visited, time on site, and navigation patterns collected via anonymized analytics.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Device data on AI-Wear: No visual, audio, or sensory data is transmitted from the AI-Wear device. All processing is on-device.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
        <ul className="space-y-3">
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            To operate and maintain our website and services.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            To respond to your inquiries and support requests.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            To send product updates and news with your explicit consent.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            To improve our products through anonymized usage analytics.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            To comply with legal obligations.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">3. Data Sharing</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          We do not sell, trade, or rent your personal information to third parties. We may share anonymized aggregate data for research purposes. We may share information with service providers who assist in operating our website, under strict confidentiality agreements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">4. AI-Wear Device Privacy</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          AI-Wear processes all visual, audio, and sensory data entirely on-device. No data from the AI-Wear device is transmitted to Trinetrum servers or any third party. This is an architectural guarantee, not a policy statement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">5. Data Retention</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          We retain your personal information for as long as necessary to provide our services or as required by law. You may request deletion of your account and associated data at any time by contacting legal@trinetrum.com.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">6. Your Rights</h2>
        <ul className="space-y-3">
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Right to access: Request a copy of the personal data we hold about you.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Right to rectification: Request correction of inaccurate data.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Right to erasure: Request deletion of your personal data.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Right to portability: Request your data in a machine-readable format.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Right to object: Object to processing of your personal data for direct marketing.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">7. Cookies</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          We use essential cookies for website functionality and optional analytics cookies. See our Cookie Policy for details. You can manage cookie preferences at any time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">8. Contact</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          For privacy inquiries, contact our team at legal@trinetrum.com or write to: Trinetrum Ventures Private Limited, Bengaluru, Karnataka 560001, India.
        </p>
      </section>
      
    </div>
  );
}

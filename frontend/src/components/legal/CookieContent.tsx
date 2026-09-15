import React from "react";

export default function CookieContent() {
  return (
    <div className="space-y-12 max-w-4xl">
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you interact with content.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">2. Cookies We Use</h2>
        <ul className="space-y-3">
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Essential cookies: Required for the website to function correctly. These cannot be disabled.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Analytics cookies: Help us understand how visitors interact with our website using anonymized data. These can be disabled.
          </li>
          <li className="flex gap-3 text-[14px] text-slate-600 leading-relaxed">
            <span className="text-[#0ea5e9] text-[18px] mt-[-2px]">•</span>
            Preference cookies: Remember your settings and preferences across sessions.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">3. Cookies We Do Not Use</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          We do not use advertising cookies, third-party tracking cookies, or cookies for profiling or behavioral advertising.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">4. Managing Cookies</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          You can control and delete cookies through your browser settings. Disabling essential cookies may affect website functionality. You can also opt out of analytics cookies via the cookie consent banner.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">5. Third-Party Cookies</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          Our website may include embedded content from third-party services (such as embedded video players). These services may set their own cookies. We have no control over these cookies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">6. Contact</h2>
        <p className="text-[14px] text-slate-600 leading-relaxed">
          For questions about our cookie practices, contact us at legal@trinetrum.com.
        </p>
      </section>
      
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — GTA6 HQ",
  description: "Terms of Use for GTA6 HQ. Read the terms governing your use of this website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="glass rounded-2xl p-8 sm:p-12">
        <h1 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-2">Terms of Use</h1>
        <p className="text-xs text-gray-500 mb-8">Last updated: March 6, 2026</p>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using GTA6 HQ (buygta6game.com), you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this site.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">2. Use of Content</h2>
            <p>All content on this site is provided for personal, non-commercial informational purposes only. You may not reproduce, distribute, or republish content from this site without prior written permission.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">3. No Official Affiliation</h2>
            <p>GTA6 HQ is an independent fan site and is not affiliated with Rockstar Games or Take-Two Interactive. Nothing on this site constitutes an official announcement or statement from those companies.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">4. Accuracy of Information</h2>
            <p>We make every effort to provide accurate information, but we make no warranties regarding the completeness, accuracy, or reliability of any content on this site. Information is subject to change without notice. Use this site at your own risk.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">5. Affiliate Links</h2>
            <p>Some links on this site may be affiliate links. This means we may earn a small commission if you make a purchase through those links, at no additional cost to you. We only link to reputable retailers.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">6. Advertising</h2>
            <p>This site displays advertisements served by Google AdSense and potentially other advertising networks. We are not responsible for the content of third-party advertisements.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, GTA6 HQ shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on any information provided here.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">8. Changes to Terms</h2>
            <p>We reserve the right to update these Terms of Use at any time. Continued use of the site after changes are posted constitutes your acceptance of the revised terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — GTA6 HQ",
  description: "GTA6 HQ is an independent fan site. Not affiliated with Rockstar Games or Take-Two Interactive.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="glass rounded-2xl p-8 sm:p-12">
        <h1 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-2">Disclaimer</h1>
        <p className="text-xs text-gray-500 mb-8">Last updated: March 6, 2026</p>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-vice-orange/10 border border-vice-orange/20">
            <p className="text-vice-orange font-semibold text-sm">
              GTA6 HQ is an independent fan site. We are not affiliated with, endorsed by, or connected to Rockstar Games, Take-Two Interactive Software, or any of their subsidiaries or partners.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">Fan Site Notice</h2>
            <p>This website (buygta6game.com) is operated by an independent fan of the Grand Theft Auto series. All content on this site is created for informational and entertainment purposes only. We are not an official source for GTA 6 information.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">Trademarks & Intellectual Property</h2>
            <p>Grand Theft Auto, GTA 6, GTA VI, Rockstar Games, Vice City, and all related names, logos, and imagery are trademarks of Take-Two Interactive Software, Inc. and Rockstar Games. All rights belong to their respective owners. No copyright infringement is intended.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">Accuracy of Information</h2>
            <p>We strive to keep all information on this site accurate and up to date. However, GTA 6 details may change at any time. Content labeled as "Confirmed" reflects information officially announced by Rockstar Games or Take-Two Interactive. Content labeled "Rumor," "Expected," or "Estimated" is based on credible reporting, leaks, or community analysis and should not be treated as official.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">No Commercial Relationship</h2>
            <p>We have no commercial relationship with Rockstar Games or Take-Two Interactive. Pre-order links and product links on this site may be affiliate links through which we may earn a commission at no additional cost to you.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">External Links</h2>
            <p>This site may contain links to external websites including YouTube, retailers, and other sources. We are not responsible for the content or privacy practices of those sites.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

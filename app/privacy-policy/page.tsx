import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GTA6 HQ",
  description: "Privacy Policy for GTA6 HQ. Learn how we collect and use data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="glass rounded-2xl p-8 sm:p-12">
        <h1 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-2">Privacy Policy</h1>
        <p className="text-xs text-gray-500 mb-8">Last updated: March 6, 2026</p>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">1. Who We Are</h2>
            <p>GTA6 HQ (buygta6game.com) is an independent fan information website covering Grand Theft Auto 6. We are not affiliated with Rockstar Games, Take-Two Interactive, or any of their subsidiaries.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li><span className="text-gray-400">Email address</span> — only if you voluntarily subscribe to our notification list.</li>
              <li><span className="text-gray-400">Usage data</span> — pages visited, time on site, browser type, and device type, collected automatically via analytics.</li>
              <li><span className="text-gray-400">Cookies</span> — used by advertising partners and analytics tools to personalize ads and measure traffic.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li><span className="text-gray-400">Email addresses</span> are used solely to send GTA 6 news alerts. We use Brevo (brevo.com) to manage our mailing list. We will never sell or share your email with third parties.</li>
              <li><span className="text-gray-400">Analytics data</span> is used to understand how visitors use the site and improve our content.</li>
              <li><span className="text-gray-400">Advertising</span> — we use Google AdSense to display ads. Google may use cookies to serve ads based on your prior visits to this or other websites.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">4. Google AdSense & Cookies</h2>
            <p>This site uses Google AdSense, a third-party advertising service. Google uses cookies to serve ads based on a user's prior visits to our website and other sites on the internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-vice-orange hover:underline">Google Ads Settings</a>. For more information on how Google uses data, visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-vice-orange hover:underline">Google's Privacy & Terms</a>.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">5. Third-Party Services</h2>
            <p className="mb-3">We use the following third-party services that may collect data independently:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li><span className="text-gray-400">Brevo</span> — email list management</li>
              <li><span className="text-gray-400">Google AdSense</span> — advertising</li>
              <li><span className="text-gray-400">YouTube</span> — embedded video content</li>
              <li><span className="text-gray-400">Vercel</span> — website hosting</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">6. Your Rights</h2>
            <p>You may unsubscribe from our email list at any time using the unsubscribe link in any email we send. You may also request deletion of your data by contacting us directly.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-white tracking-wide mb-3">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

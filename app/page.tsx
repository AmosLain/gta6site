import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import BuySection from "@/components/BuySection";
import LastUpdated from "@/components/LastUpdated";
import Countdown from "@/components/Countdown";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "GTA 6 HQ — Release Date, Price, Pre-Order & System Requirements",
  description:
    "Everything you need to know about GTA 6: release date, price, pre-order links, PC system requirements, and official trailer breakdowns. Updated daily.",
  alternates: { canonical: "/" },
};

const highlightCards = [
  {
    title: "Release Date",
    icon: "📅",
    badge: "Confirmed" as const,
    content:
      "Rockstar Games has officially confirmed GTA 6 is targeting a 2025 release window for PS5 and Xbox Series X|S. A specific date is yet to be announced.",
  },
  {
    title: "Expected Price",
    icon: "💰",
    badge: "Rumor" as const,
    content:
      "Industry analysts predict a $69.99–$79.99 launch price for standard edition, with a premium edition reaching $99.99+.",
  },
  {
    title: "Platforms",
    icon: "🎮",
    badge: "Confirmed" as const,
    content: [
      "PlayStation 5 (confirmed)",
      "Xbox Series X|S (confirmed)",
      "PC release window unknown",
      "No PS4/Xbox One version planned",
    ],
  },
  {
    title: "Setting",
    icon: "🌴",
    badge: "Confirmed" as const,
    content:
      "GTA 6 is set in a fictional version of Miami, called Vice City, and the surrounding state of Leonida — the most expansive GTA world ever built.",
  },
  {
    title: "Protagonists",
    icon: "👤",
    badge: "Confirmed" as const,
    content: [
      "Lucia — the first female GTA protagonist",
      "Male protagonist (unnamed at reveal)",
      "Bonnie & Clyde-inspired storyline",
    ],
  },
  {
    title: "PC Release",
    icon: "🖥️",
    badge: "Rumor" as const,
    content:
      "A PC release is widely expected 6–18 months after the console launch, following Rockstar's historical release pattern with GTA V.",
  },
];

const faqItems = [
  {
    question: "When is the GTA 6 release date?",
    answer:
      "Rockstar Games has confirmed GTA 6 is targeting 2025 for PlayStation 5 and Xbox Series X|S. A specific release date has not yet been announced publicly. Check our Release Date page for the latest updates.",
  },
  {
    question: "Can I pre-order GTA 6 right now?",
    answer:
      "Official pre-orders have not yet opened. Rockstar Games typically opens pre-orders 4–8 weeks before launch. We'll update our Pre-Order page the moment they go live.",
  },
  {
    question: "How much will GTA 6 cost?",
    answer:
      "No official price has been confirmed. Based on industry trends and the $69.99 pricing standard for current-gen titles, most analysts expect GTA 6 to launch between $69.99 and $79.99.",
  },
  {
    question: "Will GTA 6 come to PC?",
    answer:
      "Rockstar has not officially confirmed a PC version yet. Given GTA V's history (console in 2013, PC in 2015), a PC release 12–18 months after console launch is widely anticipated.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="GTA 6 EVERYTHING YOU NEED"
        subtitle="Release dates, prices, pre-order links, system requirements, and trailer breakdowns — all in one place. Updated as news breaks."
        badge="✅ November 19, 2026 — Official Launch Date"
        primaryCTA={{ label: "Pre-Order GTA 6", href: "/pre-order" }}
        secondaryCTA={{ label: "Watch Trailer", href: "/trailer" }}
      />

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 mb-4 relative z-10">
        <div className="glass rounded-2xl p-4 sm:p-6 glow-border grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Trailer Views", value: "746M+", sub: "Combined 24h" },
            { label: "Release Date", value: "NOV 19", sub: "PS5 & Xbox 2026" },
            { label: "Map Size", value: "~3×", sub: "Larger than GTA V" },
            { label: "Protagonists", value: "2", sub: "Lucia + Partner" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl text-gradient tracking-wider">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              <div className="text-[10px] text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <Countdown />

      <CardSection
        heading="GTA 6 At a Glance"
        subheading="Key facts — confirmed by Rockstar or reported by credible sources."
        cards={highlightCards}
        columns={3}
      />

      {/* Editorial section */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-6">
            Why GTA 6 Is the Most Anticipated Game Ever
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              Grand Theft Auto 6 represents the most ambitious project in Rockstar Games' history.
              With a development cycle spanning over a decade and a budget rumored to exceed $2 billion,
              GTA 6 is poised to redefine open-world gaming entirely.
            </p>
            <p>
              The announcement trailer — released on December 4, 2023 — shattered YouTube records,
              accumulating over 90 million views in its first 24 hours and crossing 200 million total
              views, making it the most-watched gaming trailer of all time.
            </p>
            <h3 className="font-display text-2xl text-white tracking-wider pt-2">
              What Makes GTA 6 Different
            </h3>
            <p>
              For the first time in the mainline GTA series, players will control a female protagonist.
              Lucia — alongside her unnamed male partner — navigates Vice City in a story described
              as a modern Bonnie and Clyde narrative. The duo's dynamic and the living, breathing world
              of Leonida are expected to set new standards for storytelling in open-world games.
            </p>
            <p>
              The game features an evolved version of RAGE engine with full ray-tracing support,
              next-gen physics, and an NPC behavior system dramatically more advanced than any
              previous Rockstar title. The world reacts dynamically to player actions in ways
              GTA V never could.
            </p>
          </div>
        </div>
      </section>

      <BuySection />
      <EmailCapture />
      <FAQ items={faqItems} />
      <LastUpdated className="pb-8" />
    </>
  );
}

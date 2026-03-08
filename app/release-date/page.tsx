import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";
import { VideoGameSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "GTA 6 Release Date — November 19, 2026 Official & Confirmed",
  description: "GTA 6 releases on November 19, 2026 on PS5 and Xbox Series X|S. Rockstar confirmed the date after two delays. PC release expected 2027. Full timeline here.",
  alternates: { canonical: "/release-date" },
};

const timelineCards = [
  {
    title: "December 2023",
    badge: "Confirmed" as const,
    icon: "🎬",
    content: [
      "Trailer 1 released — 271M views in 24 hours",
      "Release year 2025 first announced",
      "PS5 & Xbox Series X|S confirmed platforms",
      "Vice City and Leonida confirmed as setting",
    ],
  },
  {
    title: "May 2025",
    badge: "Confirmed" as const,
    icon: "📅",
    content: [
      "Trailer 2 released — new locations revealed",
      "Date shifted to May 26, 2026",
      "Dual protagonists Lucia & Jason confirmed",
      "Map details: Keys, Grassrivers, Port Gellhorn",
    ],
  },
  {
    title: "November 2025",
    badge: "Confirmed" as const,
    icon: "⏳",
    content: [
      "Second delay announced via Take-Two earnings call",
      "New date: November 19, 2026",
      "Reason: extra polish and quality assurance",
      "Take-Two stock dropped ~10% on announcement",
    ],
  },
  {
    title: "November 19, 2026",
    badge: "Confirmed" as const,
    icon: "🚀",
    content: [
      "Official launch day — PS5 & Xbox Series X|S",
      "Holiday season window — maximizes sales",
      "Take-Two reaffirmed date in Feb 2026 earnings call",
      "Marketing campaign begins Summer 2026",
    ],
  },
];

const faqItems = [
  {
    question: "When is GTA 6 releasing?",
    answer: "GTA 6 officially releases on November 19, 2026, on PlayStation 5 and Xbox Series X|S. Rockstar Games confirmed this date, and Take-Two Interactive reaffirmed it in their February 2026 earnings call.",
  },
  {
    question: "Is GTA 6 coming to PC?",
    answer: "No PC release date has been confirmed. Based on Rockstar's history with GTA 5 and Red Dead Redemption 2, a PC version is expected 6-12 months after the console launch, likely sometime in 2027.",
  },
  {
    question: "Is GTA 6 coming to PS4 or Xbox One?",
    answer: "No. GTA 6 is exclusive to PS5 and Xbox Series X|S. The game's advanced graphics and open-world systems require next-generation hardware.",
  },
  {
    question: "Could GTA 6 be delayed again?",
    answer: "Take-Two confirmed the November 19, 2026 date in their February 2026 earnings call. However, journalist Jason Schreier reported the game was not yet content-complete in early 2026, which has kept some speculation alive.",
  },
  {
    question: "Why was GTA 6 delayed twice?",
    answer: "Rockstar cited the need for additional polish. The delay from 2025 to May 2026, and then to November 2026, reportedly cost Take-Two up to $500 million including lost revenue and extra development costs.",
  },
];

export default function ReleaseDatePage() {
  return (
    <>
      <VideoGameSchema url="https://buygta6game.com/release-date" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://buygta6game.com" },
        { name: "Release Date", url: "https://buygta6game.com/release-date" },
      ]} />

      <Hero
        title="GTA 6 RELEASE DATE"
        subtitle="November 19, 2026 — Official and confirmed by Rockstar Games. PS5 and Xbox Series X|S only at launch."
        badge="✅ Officially Confirmed — November 19, 2026"
        primaryCTA={{ label: "Pre-Order Info", href: "/pre-order" }}
        secondaryCTA={{ label: "Check Price", href: "/price" }}
      />

      <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <div className="glass rounded-2xl p-8 glow-border">
          <div className="text-6xl font-display tracking-widest text-vice-orange mb-2">NOV 19</div>
          <div className="text-3xl font-display text-white mb-4">2026</div>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Confirmed by Rockstar Games and reaffirmed by Take-Two Interactive CEO Strauss Zelnick in February 2026.
            PS5 and Xbox Series X|S only. PC release expected in 2027.
          </p>
        </div>
      </section>

      <CardSection
        heading="FULL TIMELINE"
        subheading="From announcement to launch — every key date in GTA 6 history"
        cards={timelineCards}
      />

      <FAQ
        heading="RELEASE DATE FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}
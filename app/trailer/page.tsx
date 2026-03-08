import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";
import { VideoGameSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "GTA 6 Trailers — Official Trailer 1 & 2 Breakdown",
  description: "GTA 6 has two official trailers. Trailer 1 (Dec 2023) got 271M views. Trailer 2 (May 2025) confirmed Lucia, Jason, Vice City and Leonida. Full breakdown here.",
  alternates: { canonical: "/trailer" },
};

const trailer1Cards = [
  {
    title: "Trailer 1 — December 2023",
    badge: "Confirmed" as const,
    icon: "🎬",
    content: [
      "Released December 5, 2023",
      "271 million views in 24 hours — all-time record",
      "Vice City and Leonida (Florida) confirmed",
      "First female GTA protagonist revealed: Lucia",
      "Song: Love Is a Long Road by Tom Petty",
    ],
  },
  {
    title: "Trailer 2 — May 2025",
    badge: "Confirmed" as const,
    icon: "🎥",
    content: [
      "Released May 6, 2025",
      "475 million views in 24 hours — new record",
      "Jason Duval confirmed as second protagonist",
      "New locations: Keys, Grassrivers, Port Gellhorn",
      "Song: Hot Together by The Pointer Sisters",
    ],
  },
  {
    title: "Confirmed Gameplay Details",
    badge: "Confirmed" as const,
    icon: "🎮",
    content: [
      "Character switching between Lucia and Jason",
      "Store robberies and bank heists shown",
      "Weightlifting mechanic (like San Andreas)",
      "Safehouse upgrades over time",
      "In-game social media and viral moments",
    ],
  },
  {
    title: "Easter Eggs & Details",
    badge: "Rumor" as const,
    icon: "🥚",
    content: [
      "Jason jokes about fixing leaks — meta Rockstar reference",
      "Leonida Manatees sports team (Dolphins parody)",
      "Gloriana State license plates spotted",
      "Bocamar Bridge (Sunshine Skyway reference)",
      "Phil Anmu-nation cameo — possible Vice City link",
    ],
  },
];

const faqItems = [
  {
    question: "How many GTA 6 trailers are there?",
    answer: "Two official trailers. Trailer 1 released December 5, 2023 and Trailer 2 released May 6, 2025. A third trailer is expected as part of Rockstar's Summer 2026 marketing campaign ahead of the November 19 launch.",
  },
  {
    question: "What song is in GTA 6 Trailer 1?",
    answer: "Love Is a Long Road by Tom Petty (1989). The song saw a massive spike in streaming after the trailer dropped, becoming a chart hit again.",
  },
  {
    question: "What song is in GTA 6 Trailer 2?",
    answer: "Hot Together by The Pointer Sisters (1986). It fits the Vice City neon aesthetic and hints that classic 80s music will feature on in-game radio stations.",
  },
  {
    question: "Is GTA 6 trailer footage real gameplay?",
    answer: "Yes. Rockstar confirmed that both trailers were recorded on a base PlayStation 5 using the in-game RAGE engine. No pre-rendered cutscenes — what you see is real engine quality.",
  },
  {
    question: "When is the next GTA 6 trailer?",
    answer: "Trailer 3 has not been officially announced. Based on Take-Two's statement that marketing begins Summer 2026, a new trailer is expected between June and September 2026.",
  },
];

export default function TrailerPage() {
  return (
    <>
      <VideoGameSchema url="https://buygta6game.com/trailer" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://buygta6game.com" },
        { name: "Trailer", url: "https://buygta6game.com/trailer" },
      ]} />

      <Hero
        title="GTA 6 OFFICIAL TRAILERS"
        subtitle="Two trailers released. 746 million combined views in 24 hours. Every confirmed detail, scene by scene."
        badge="Trailer 3 Expected Summer 2026"
        primaryCTA={{ label: "Pre-Order GTA 6", href: "/pre-order" }}
        secondaryCTA={{ label: "Release Date Info", href: "/release-date" }}
      />

      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-6">
        {/* Trailer 1 */}
        <div className="glass rounded-2xl overflow-hidden glow-border">
          <div
            className="aspect-video relative flex items-center justify-center"
            style={{ backgroundImage: "url(https://img.youtube.com/vi/QdBZY2fkU-0/maxresdefault.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center">
              <p className="text-xs text-gray-300 uppercase tracking-widest mb-3">Official GTA 6 Trailer 1 — December 2023</p>
              <a
                href="https://www.youtube.com/watch?v=QdBZY2fkU-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-vice-orange hover:bg-vice-orange/90 text-white font-semibold rounded-xl text-sm transition-all hover:scale-105 shadow-vice-glow-sm"
              >
                <span className="text-2xl">▶</span> Watch Trailer 1 on YouTube
              </a>
              <p className="text-xs text-gray-500 mt-3">271M views · Love Is a Long Road — Tom Petty</p>
            </div>
          </div>
        </div>
        {/* Trailer 2 */}
        <div className="glass rounded-2xl overflow-hidden glow-border">
          <div
            className="aspect-video relative flex items-center justify-center"
            style={{ backgroundImage: "url(https://img.youtube.com/vi/VQRLujxTm3c/maxresdefault.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center">
              <p className="text-xs text-gray-300 uppercase tracking-widest mb-3">Official GTA 6 Trailer 2 — May 2025</p>
              <a
                href="https://www.youtube.com/watch?v=VQRLujxTm3c&t=4s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-vice-orange hover:bg-vice-orange/90 text-white font-semibold rounded-xl text-sm transition-all hover:scale-105 shadow-vice-glow-sm"
              >
                <span className="text-2xl">▶</span> Watch Trailer 2 on YouTube
              </a>
              <p className="text-xs text-gray-500 mt-3">475M views · Hot Together — The Pointer Sisters</p>
            </div>
          </div>
        </div>
      </section>

      <CardSection
        heading="TRAILER BREAKDOWN"
        subheading="Everything confirmed across both official trailers"
        cards={trailer1Cards}
      />

      <FAQ
        heading="TRAILER FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}
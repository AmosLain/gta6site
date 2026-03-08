import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";
import { VideoGameSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "GTA 6 Leaks — What's Real? Every Major Leak Explained (2026)",
  description:
    "GTA 6 leaks breakdown: the 2022 source code leak, confirmed details, Lucia and Jason early footage, and what credible journalists have reported. Sorted by reliability.",
  alternates: { canonical: "/leaks" },
};

const faqItems = [
  {
    question: "What was the GTA 6 leak in 2022?",
    answer:
      "In September 2022, a hacker leaked over 90 videos of early GTA 6 development footage, showing Lucia and Jason in prototype gameplay. It was the largest leak in gaming history. Rockstar confirmed the footage was real. The hacker, a teenager known as 'teapotuberhacker', was later arrested in the UK.",
  },
  {
    question: "Was the GTA 6 source code leaked?",
    answer:
      "The hacker claimed to have the GTA 6 source code and attempted to extort Rockstar. While some code snippets were shared, the full source code was never publicly released. Rockstar and Take-Two took legal action.",
  },
  {
    question: "What did the 2022 leak confirm?",
    answer:
      "The 2022 leak confirmed: dual protagonists Lucia and Jason, the Vice City setting, Florida-inspired open world, advanced NPC behavior, dynamic water and flooding mechanics, and various gameplay systems. Most of this was later confirmed officially in trailers.",
  },
  {
    question: "Are there credible GTA 6 leakers?",
    answer:
      "Journalist Jason Schreier (Bloomberg) has published multiple credible reports on GTA 6, including the 2025 delay and development status. Rockstar Intel is considered a reliable source for GTA news. Anonymous leakers on Reddit and Discord have a mixed accuracy record.",
  },
  {
    question: "Is GTA 6 content-complete?",
    answer:
      "According to a Jason Schreier report from early 2026, GTA 6 was not yet content-complete at that time, meaning story missions and content were still being finalized. This fueled speculation about another delay, though Take-Two has maintained the November 19, 2026 release date.",
  },
];

const leakCards = [
  {
    title: "The 2022 Mega Leak",
    badge: "Confirmed" as const,
    icon: "💻",
    content: [
      "90+ development videos leaked — September 2022",
      "Showed early Lucia and Jason gameplay",
      "Largest gaming leak in history",
      "Rockstar confirmed authenticity",
      "Hacker later arrested in UK",
    ],
  },
  {
    title: "Jason Schreier Reports",
    badge: "Confirmed" as const,
    icon: "📰",
    content: [
      "Bloomberg journalist with Rockstar sources",
      "Confirmed 2025 → 2026 delay details",
      "Reported game not content-complete in early 2026",
      "Most reliable external source for GTA 6 news",
    ],
  },
  {
    title: "Map Size Estimates",
    badge: "Rumor" as const,
    icon: "🗺️",
    content: [
      "Leaked documents suggest ~150 sq miles",
      "Approx. 3× larger than GTA 5",
      "Multiple regions beyond Vice City confirmed",
      "Not officially verified by Rockstar",
    ],
  },
  {
    title: "PC Version Delay",
    badge: "Rumor" as const,
    icon: "🖥️",
    content: [
      "Multiple sources expect PC release in 2027",
      "Matches Rockstar's GTA 5 and RDR2 pattern",
      "No official PC announcement yet",
      "PC specs unknown — console version first",
    ],
  },
  {
    title: "Online Mode Details",
    badge: "Rumor" as const,
    icon: "🌐",
    content: [
      "GTA Online successor expected at launch",
      "Rumors of property ownership, businesses",
      "Expanded heist system reportedly planned",
      "No official GTA Online 2 announcement",
    ],
  },
  {
    title: "Delay Cost: $500M",
    badge: "Confirmed" as const,
    icon: "💰",
    content: [
      "Take-Two reported ~$500M cost from delays",
      "Lost Q4 2025 holiday revenue factored in",
      "Extra development costs included",
      "Confirmed in Take-Two earnings disclosures",
    ],
  },
];

export default function LeaksPage() {
  return (
    <>
      <VideoGameSchema url="https://buygta6game.com/leaks" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://buygta6game.com" },
        { name: "GTA 6 Leaks", url: "https://buygta6game.com/leaks" },
      ]} />

      <Hero
        title="GTA 6 LEAKS"
        subtitle="The 2022 mega leak, Jason Schreier reports, map size estimates, and everything else worth knowing. Sorted by reliability."
        badge="⚠️ Fan Analysis — Not Official Rockstar Info"
        primaryCTA={{ label: "Confirmed Gameplay", href: "/gameplay" }}
        secondaryCTA={{ label: "Latest News", href: "/news" }}
      />

      <CardSection
        heading="Leaks & Reports — By Reliability"
        subheading="Confirmed leaks vs unverified rumors — we label everything clearly"
        cards={leakCards}
        columns={3}
      />

      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-6">
            The 2022 Leak: What Really Happened
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              In September 2022, Rockstar Games experienced the most significant security breach in gaming
              history. A hacker broke into Rockstar's internal Slack workspace and downloaded over 90 videos
              of early GTA 6 development footage — raw, unfinished clips showing placeholder animations,
              debug menus, and early versions of Lucia and Jason's gameplay mechanics.
            </p>
            <p>
              The footage spread across the internet within hours. Rockstar confirmed it was genuine. The
              gaming world had its first real look at GTA 6 — not the polished reveal Rockstar had planned,
              but a messy, unfiltered window into development. Despite the rough state of the footage, the
              core of what would become GTA 6 was unmistakably there.
            </p>
            <h3 className="font-display text-2xl text-white tracking-wider pt-2">
              The Hacker
            </h3>
            <p>
              The hacker, operating as "teapotuberhacker" and later identified as a UK teenager, was
              arrested by City of London Police in September 2022. He was also connected to the Uber and
              Rockstar hacks through the LAPSUS$ hacking group. Legal proceedings followed, and Rockstar
              pursued civil and criminal remedies. The incident led to a significant overhaul of Rockstar's
              internal security practices.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        heading="GTA 6 LEAKS FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}

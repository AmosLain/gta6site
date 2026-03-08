import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";
import { VideoGameSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "GTA 6 vs GTA 5 — Every Difference Explained (2026)",
  description:
    "GTA 6 vs GTA 5: map size, graphics, protagonists, story, online mode, and more. How does Rockstar's new game stack up against one of the best-selling games ever made?",
  alternates: { canonical: "/gta-6-vs-gta-5" },
};

const comparisonCards = [
  {
    title: "Map Size",
    badge: "Confirmed" as const,
    icon: "🗺️",
    content: [
      "GTA 6: Leonida — estimated 3× larger than GTA 5",
      "GTA 5: Los Santos + Blaine County (~49 sq miles)",
      "GTA 6 includes Vice City, the Keys, Grassrivers & more",
      "Dynamic weather and floods reshape the open world",
    ],
  },
  {
    title: "Protagonists",
    badge: "Confirmed" as const,
    icon: "👤",
    content: [
      "GTA 6: Lucia & Jason — dual protagonists",
      "GTA 5: Michael, Trevor, Franklin — three protagonists",
      "GTA 6 features the first female lead in mainline GTA",
      "Bonnie & Clyde narrative — more intimate than GTA 5",
    ],
  },
  {
    title: "Graphics & Engine",
    badge: "Confirmed" as const,
    icon: "🎨",
    content: [
      "GTA 6: RAGE engine with full ray-tracing support",
      "GTA 5: RAGE engine (2013), no ray-tracing at launch",
      "GTA 6: next-gen NPC behavior and crowd simulation",
      "GTA 6: built exclusively for PS5 & Xbox Series X|S",
    ],
  },
  {
    title: "Story & Setting",
    badge: "Confirmed" as const,
    icon: "📖",
    content: [
      "GTA 6: Vice City, Florida-inspired — 2020s present day",
      "GTA 5: Los Santos, LA-inspired — 2013 present day",
      "GTA 6: social media and viral culture woven into story",
      "GTA 6: more grounded, character-driven narrative",
    ],
  },
  {
    title: "Online Mode",
    badge: "Rumor" as const,
    icon: "🌐",
    content: [
      "GTA 6 Online: not officially detailed yet",
      "GTA 5 Online: launched 2013, still active with millions",
      "GTA 6 Online expected to launch alongside story mode",
      "New economy and heist systems rumored",
    ],
  },
  {
    title: "Price & Platforms",
    badge: "Rumor" as const,
    icon: "💰",
    content: [
      "GTA 6: $79.99–$99.99 expected — PS5 & Xbox only",
      "GTA 5: launched at $59.99 in 2013",
      "GTA 5 is on PS4/Xbox One/PC/PS5/Xbox Series",
      "GTA 6: no PS4, no Xbox One, no PC at launch",
    ],
  },
];

const faqItems = [
  {
    question: "Is GTA 6 bigger than GTA 5?",
    answer:
      "Yes. Leaked development materials and trailer analysis suggest GTA 6's Leonida is approximately three times the size of GTA 5's Los Santos map. It includes Vice City, the Florida Keys equivalent, rural Grassrivers, and coastal Port Gellhorn.",
  },
  {
    question: "Does GTA 6 have better graphics than GTA 5?",
    answer:
      "Significantly. GTA 6 runs on an upgraded RAGE engine with ray-tracing, advanced NPC simulation, and next-gen lighting — all built exclusively for PS5 and Xbox Series X|S hardware. GTA 5 launched in 2013 on PS3 and Xbox 360.",
  },
  {
    question: "Is GTA 6 story better than GTA 5?",
    answer:
      "We don't know yet, but GTA 6 takes a different approach. Where GTA 5 juggled three protagonists with separate arcs, GTA 6 focuses on Lucia and Jason as a duo — a tighter, more cinematic narrative inspired by Bonnie and Clyde.",
  },
  {
    question: "Will GTA 6 kill GTA 5 Online?",
    answer:
      "Almost certainly GTA Online will wind down as GTA 6 launches. GTA 5 Online is still generating Rockstar hundreds of millions annually, but once GTA 6 Online launches, the playerbase will migrate. Rockstar has not announced a shutdown date for GTA Online.",
  },
  {
    question: "Can I still play GTA 5 after GTA 6 releases?",
    answer:
      "Yes. GTA 5 is still available and fully playable across all platforms. GTA Online servers are expected to remain live for years after GTA 6 launches, similar to how GTA 4 Online ran alongside GTA 5.",
  },
];

export default function GTA6vsGTA5Page() {
  return (
    <>
      <VideoGameSchema url="https://buygta6game.com/gta-6-vs-gta-5" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://buygta6game.com" },
        { name: "GTA 6 vs GTA 5", url: "https://buygta6game.com/gta-6-vs-gta-5" },
      ]} />

      <Hero
        title="GTA 6 VS GTA 5"
        subtitle="Map size, graphics, story, protagonists, online mode — every major difference between GTA 6 and one of the best-selling games in history."
        badge="GTA 6 launches November 19, 2026"
        primaryCTA={{ label: "Release Date Info", href: "/release-date" }}
        secondaryCTA={{ label: "GTA 6 Gameplay", href: "/gameplay" }}
      />

      <CardSection
        heading="Head-to-Head Comparison"
        subheading="GTA 6 vs GTA 5 — confirmed facts and credible expectations"
        cards={comparisonCards}
        columns={3}
      />

      {/* Editorial */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-6">
            Why GTA 6 Is a Generational Leap Over GTA 5
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              Grand Theft Auto 5 launched in 2013 on the PlayStation 3 and Xbox 360. More than a decade later, it
              remains one of the most-played games in the world — a testament to Rockstar's world-building and the
              longevity of GTA Online. But GTA 6 is not just an incremental upgrade. It is a complete rethinking of
              what an open-world game can be.
            </p>
            <p>
              The most immediate difference is scale. GTA 5's Los Santos was a masterpiece of density — a compressed,
              detail-packed version of Los Angeles that still feels alive today. GTA 6's Leonida takes a different
              approach: sprawl. The state of Leonida covers Vice City (a reimagined Miami), the Florida Keys
              equivalent, rural Grassrivers, and the port city of Port Gellhorn. Early trailer analysis suggests
              the map is roughly three times the drivable area of GTA 5.
            </p>
            <h3 className="font-display text-2xl text-white tracking-wider pt-2">
              The Protagonist Difference
            </h3>
            <p>
              GTA 5 was ambitious in its own way — three playable protagonists with interconnected stories. But
              Lucia and Jason in GTA 6 represent a different kind of ambition: depth over breadth. Rockstar has
              described the relationship between the two leads as central to the entire narrative, a Bonnie and
              Clyde dynamic that is expected to deliver more emotional storytelling than anything in GTA 5.
              Lucia also marks a milestone as the first female protagonist in a mainline GTA game.
            </p>
            <h3 className="font-display text-2xl text-white tracking-wider pt-2">
              Technology That GTA 5 Simply Cannot Match
            </h3>
            <p>
              GTA 6 is built exclusively for PS5 and Xbox Series X|S. There is no last-gen version, no compromise.
              The RAGE engine has been upgraded with full ray-tracing, next-gen NPC crowd simulation, and a
              dynamic world that reacts to player actions in ways GTA 5 never attempted. Flooded roads after
              storms, evolving neighborhoods, and social media mechanics built into the game world are all confirmed.
              GTA 5 was built for a CD drive and 512MB of RAM. GTA 6 was built for an NVMe SSD and 16GB of GDDR6.
              The comparison is almost unfair.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        heading="GTA 6 VS GTA 5 FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}

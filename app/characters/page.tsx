import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";
import { VideoGameSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "GTA 6 Characters — Lucia, Jason & All Confirmed Cast (2026)",
  description:
    "GTA 6 characters: Lucia is the first female GTA protagonist. Jason Duval is her partner. Full breakdown of their story, background, and what we know from trailers.",
  alternates: { canonical: "/characters" },
};

const faqItems = [
  {
    question: "Who are the main characters in GTA 6?",
    answer:
      "GTA 6 has two playable protagonists: Lucia and Jason Duval. Lucia is the first female lead in a mainline GTA game. Their story is described as a modern Bonnie and Clyde narrative set in the state of Leonida.",
  },
  {
    question: "Who is Lucia in GTA 6?",
    answer:
      "Lucia is one of the two playable protagonists in GTA 6 and the first female lead in the mainline GTA series. She was revealed in Trailer 1 (December 2023). In the trailer, she is shown being released from prison and reuniting with Jason. Her full backstory has not been officially revealed.",
  },
  {
    question: "Who is Jason in GTA 6?",
    answer:
      "Jason Duval is the male protagonist of GTA 6, confirmed in Trailer 2 (May 2025). He is Lucia's partner in crime. The two are described as having a Bonnie and Clyde dynamic — a couple on the run pulling off crimes across Leonida.",
  },
  {
    question: "Can you switch between Lucia and Jason?",
    answer:
      "Yes. GTA 6 features the character-switching mechanic from GTA 5, allowing players to switch between Lucia and Jason. Both have unique abilities, perspectives, and story arcs that interweave throughout the game.",
  },
  {
    question: "Is GTA 6 based on a real story?",
    answer:
      "No, GTA 6 is fictional. However, the Lucia and Jason dynamic is inspired by Bonnie and Clyde — the real-life Depression-era criminal couple. The game's Vice City setting is also inspired by real Miami culture and the Florida criminal underworld.",
  },
];

const characterCards = [
  {
    title: "Lucia",
    badge: "Confirmed" as const,
    icon: "👩",
    content: [
      "First female protagonist in mainline GTA",
      "Revealed in Trailer 1 — December 2023",
      "Shown being released from prison at trailer's start",
      "Voice actress not officially confirmed",
      "Latin heritage suggested by name and appearance",
    ],
  },
  {
    title: "Jason Duval",
    badge: "Confirmed" as const,
    icon: "👨",
    content: [
      "Male protagonist and Lucia's partner",
      "Confirmed in Trailer 2 — May 2025",
      "Full name Jason Duval revealed via in-game documents",
      "Shown in heists, car chases, and action sequences",
      "The Bonnie & Clyde to Lucia's dynamic",
    ],
  },
  {
    title: "Their Relationship",
    badge: "Confirmed" as const,
    icon: "❤️",
    content: [
      "Described as Bonnie & Clyde inspired",
      "Romantic and criminal partnership",
      "More intimate narrative than GTA 5's three protagonists",
      "Dual perspective gives depth to the story",
      "Trailers show genuine chemistry between the two",
    ],
  },
  {
    title: "Supporting Cast",
    badge: "Rumor" as const,
    icon: "👥",
    content: [
      "No supporting characters officially named yet",
      "Trailer shows criminal associates and antagonists",
      "Vice City gang leaders expected as major characters",
      "Corrupt officials — a GTA staple — likely featured",
    ],
  },
];

export default function CharactersPage() {
  return (
    <>
      <VideoGameSchema url="https://buygta6game.com/characters" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://buygta6game.com" },
        { name: "Characters", url: "https://buygta6game.com/characters" },
      ]} />

      <Hero
        title="GTA 6 CHARACTERS"
        subtitle="Lucia and Jason Duval — the first female GTA protagonist and her partner. A modern Bonnie and Clyde across the state of Leonida."
        badge="Lucia — First Female GTA Protagonist"
        primaryCTA={{ label: "GTA 6 Gameplay", href: "/gameplay" }}
        secondaryCTA={{ label: "Watch Trailers", href: "/trailer" }}
      />

      <CardSection
        heading="Meet the Protagonists"
        subheading="Everything confirmed about Lucia, Jason, and their story"
        cards={characterCards}
        columns={2}
      />

      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-6">
            A New Kind of GTA Story
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              Every GTA protagonist has reflected their era. Tommy Vercetti was a revenge story. CJ was about
              loyalty and family. Niko Bellic was the immigrant dream turned nightmare. GTA 5's trio explored
              different American archetypes. Lucia and Jason are something new: a love story wrapped in crime.
            </p>
            <p>
              Lucia's introduction is one of the most striking moments in GTA trailer history. The first frame
              shows her in prison orange, being processed. By the end of the trailer, she and Jason are fleeing
              police in a high-speed chase, laughing. Rockstar established their dynamic in under three minutes:
              these are two people who chose each other and chose this life, together.
            </p>
            <h3 className="font-display text-2xl text-white tracking-wider pt-2">
              Why Lucia Matters
            </h3>
            <p>
              Lucia is not just a milestone for representation — she represents a genuine shift in how Rockstar
              tells stories. The studio has been criticized for its treatment of female characters in past games.
              Making Lucia the face of GTA 6, sharing equal billing with Jason in every trailer, signals that
              Rockstar is building its most complex and empathetic protagonist yet. Whether the game delivers on
              that promise remains to be seen, but the intent is clear.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        heading="GTA 6 CHARACTERS FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}

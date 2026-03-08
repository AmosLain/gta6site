import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";
import { VideoGameSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "GTA 6 Map — Leonida, Vice City & All Locations (2026)",
  description:
    "GTA 6 map breakdown: Leonida state, Vice City, the Keys, Grassrivers, Port Gellhorn. How big is the GTA 6 map vs GTA 5? Everything confirmed so far.",
  alternates: { canonical: "/map" },
};

const faqItems = [
  {
    question: "How big is the GTA 6 map?",
    answer:
      "Based on trailer analysis and leaked development materials, the GTA 6 map — the state of Leonida — is estimated to be approximately 3 times the size of GTA 5's Los Santos. It includes Vice City, a Florida Keys equivalent, rural Grassrivers, and the coastal Port Gellhorn.",
  },
  {
    question: "Is Vice City confirmed in GTA 6?",
    answer:
      "Yes. Rockstar confirmed Vice City in Trailer 1 (December 2023). Vice City is a fictional version of Miami and is one of the main urban areas in the state of Leonida.",
  },
  {
    question: "What is Leonida in GTA 6?",
    answer:
      "Leonida is the fictional US state where GTA 6 is set. It is inspired by Florida and includes multiple regions: Vice City (Miami), the Keys (Florida Keys), Grassrivers (Everglades-style wetlands), and Port Gellhorn (a port city).",
  },
  {
    question: "Will GTA 6 have underwater areas?",
    answer:
      "Underwater exploration has not been officially confirmed, but the Florida-inspired setting and advanced water physics shown in trailers strongly suggest it. GTA 5 had underwater areas and GTA 6 is expected to expand on this.",
  },
  {
    question: "How does the GTA 6 map compare to RDR2?",
    answer:
      "Red Dead Redemption 2's map is approximately 29 square miles. GTA 6's Leonida is expected to be significantly larger based on trailer analysis, potentially 2-3 times larger than RDR2's world.",
  },
];

const mapCards = [
  {
    title: "Vice City",
    badge: "Confirmed" as const,
    icon: "🌆",
    content: [
      "Fictional version of Miami, Florida",
      "Neon lights, Art Deco architecture",
      "Beachfront districts and downtown skyline",
      "First seen in GTA: Vice City (2002) — now reimagined",
    ],
  },
  {
    title: "The Keys",
    badge: "Confirmed" as const,
    icon: "🏝️",
    content: [
      "Florida Keys equivalent — chain of islands",
      "Revealed in GTA 6 Trailer 2 (May 2025)",
      "Bridges connecting islands",
      "Tropical environment, boats and water activity",
    ],
  },
  {
    title: "Grassrivers",
    badge: "Confirmed" as const,
    icon: "🌿",
    content: [
      "Everglades-inspired wetlands region",
      "Rural swampland and bayou areas",
      "Confirmed in Trailer 2",
      "Wildlife and off-road vehicle gameplay expected",
    ],
  },
  {
    title: "Port Gellhorn",
    badge: "Confirmed" as const,
    icon: "⚓",
    content: [
      "Coastal port city",
      "Industrial docks and shipping areas",
      "Confirmed in Trailer 2",
      "Likely setting for heist missions",
    ],
  },
  {
    title: "Map Size vs GTA 5",
    badge: "Rumor" as const,
    icon: "📏",
    content: [
      "Estimated 3× larger than GTA 5",
      "GTA 5: ~49 sq miles of drivable area",
      "GTA 6 Leonida: ~150 sq miles estimated",
      "Based on trailer analysis — not official",
    ],
  },
  {
    title: "Dynamic World",
    badge: "Confirmed" as const,
    icon: "🌊",
    content: [
      "Flooding shown in Trailer 1 and 2",
      "Dynamic weather reshapes the map",
      "Day/night cycle with neon Vice City nights",
      "Seasonal events expected post-launch",
    ],
  },
];

export default function MapPage() {
  return (
    <>
      <VideoGameSchema url="https://buygta6game.com/map" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://buygta6game.com" },
        { name: "GTA 6 Map", url: "https://buygta6game.com/map" },
      ]} />

      <Hero
        title="GTA 6 MAP"
        subtitle="The state of Leonida — Vice City, the Keys, Grassrivers, and Port Gellhorn. Everything confirmed about the biggest GTA world ever built."
        badge="Estimated 3× Larger Than GTA 5"
        primaryCTA={{ label: "GTA 6 vs GTA 5", href: "/gta-6-vs-gta-5" }}
        secondaryCTA={{ label: "Gameplay Details", href: "/gameplay" }}
      />

      <CardSection
        heading="GTA 6 Map Locations"
        subheading="Every confirmed region in the state of Leonida"
        cards={mapCards}
        columns={3}
      />

      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-6">
            The World of Leonida
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              Every GTA game has been defined by its city. Vice City had neon-soaked 80s Miami. San Andreas had
              the sprawl of Los Santos, San Fierro, and Las Venturas. GTA 4 had Liberty City's gritty realism.
              GTA 6 is different — it is not just a city. It is an entire state.
            </p>
            <p>
              The state of Leonida is Rockstar's most ambitious world yet. Inspired by Florida, it captures the
              full range of the state's geography: the glittering oceanfront towers of Vice City, the quiet
              islands of the Keys connected by bridges, the murky swamplands of Grassrivers teeming with wildlife,
              and the working-class industrial sprawl of Port Gellhorn's docks.
            </p>
            <h3 className="font-display text-2xl text-white tracking-wider pt-2">
              A Living, Breathing World
            </h3>
            <p>
              What sets GTA 6's map apart is not just its size — it is how it behaves. Trailer footage confirmed
              dynamic flooding that reshapes roads and neighborhoods. The day/night cycle transforms Vice City from
              a sun-baked beach city into a neon-lit nightlife capital. Weather systems roll in from the ocean,
              affecting gameplay and NPC behavior in real time. Rockstar has built a world that feels genuinely
              alive in ways no GTA game has before.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        heading="GTA 6 MAP FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "GTA 6 Gameplay — Confirmed Mechanics, Features & Details (2026)",
  description:
    "GTA 6 gameplay confirmed: dual protagonists, heists, store robberies, character customization, dynamic world, NPC AI, and more. Everything Rockstar has shown so far.",
  alternates: { canonical: "/gameplay" },
};

const gameplayCards = [
  {
    title: "Dual Protagonists",
    badge: "Confirmed" as const,
    icon: "👥",
    content: [
      "Switch between Lucia and Jason at any time",
      "Both have unique abilities and story perspectives",
      "Co-op narrative — missions designed around the duo",
      "Bonnie & Clyde dynamic affects mission outcomes",
    ],
  },
  {
    title: "Heists & Robberies",
    badge: "Confirmed" as const,
    icon: "🏦",
    content: [
      "Bank heists shown in Trailer 2",
      "Store robberies — smaller scale, improvisational",
      "Multi-stage planning like GTA 5 heists",
      "New escape systems and wanted level mechanics",
    ],
  },
  {
    title: "Character Customization",
    badge: "Confirmed" as const,
    icon: "👗",
    content: [
      "Weightlifting mechanic — affects character physique",
      "Extensive clothing and outfit options",
      "Safehouse upgrades over time",
      "Tattoos and appearance customization confirmed",
    ],
  },
  {
    title: "Dynamic World",
    badge: "Confirmed" as const,
    icon: "🌎",
    content: [
      "Flooding and dynamic weather systems",
      "NPCs react to player reputation and actions",
      "In-game social media — go viral for stunts",
      "Businesses and economy evolve over time",
    ],
  },
  {
    title: "NPC AI & Crowds",
    badge: "Confirmed" as const,
    icon: "🤖",
    content: [
      "Most advanced NPC behavior in Rockstar history",
      "Crowds film player actions on in-game phones",
      "Police and civilians have persistent memory",
      "Wildlife behavior improvements over RDR2",
    ],
  },
  {
    title: "Vehicles & Combat",
    badge: "Rumor" as const,
    icon: "🚗",
    content: [
      "Expanded vehicle roster — boats, planes, bikes",
      "Improved gunplay — closer to RDR2 than GTA 5",
      "Cover system refinements shown in trailers",
      "Water physics dramatically improved",
    ],
  },
];

const faqItems = [
  {
    question: "Can you play as both Lucia and Jason?",
    answer:
      "Yes. GTA 6 features two playable protagonists — Lucia and Jason Duval. Players can switch between them, similar to GTA 5's character switching mechanic. Both characters have their own abilities, perspectives, and story arcs that interweave throughout the game.",
  },
  {
    question: "Is there a GTA 6 single player story?",
    answer:
      "Yes. GTA 6 has a full single-player story mode. Rockstar has always prioritized story alongside online modes. The GTA 6 campaign follows Lucia and Jason across the state of Leonida in a crime narrative described as a modern Bonnie and Clyde.",
  },
  {
    question: "Does GTA 6 have GTA Online?",
    answer:
      "GTA 6 will have an online multiplayer mode, though details have not been officially announced. Rockstar is expected to launch GTA 6 Online alongside or shortly after the story mode. It will likely feature a new economy, properties, and cooperative heists.",
  },
  {
    question: "How does the wanted system work in GTA 6?",
    answer:
      "Rockstar has not detailed the wanted system yet, but trailers show police chases and a star system is assumed. Given NPC AI improvements, witnesses may call police, report player behavior on in-game social media, and the system may feel more realistic than GTA 5.",
  },
  {
    question: "Will GTA 6 have first person mode?",
    answer:
      "Rockstar has not confirmed first-person mode, but GTA 5 introduced it in 2014 and it became a fan-favorite feature. It is widely expected to return in GTA 6, possibly with improvements given the more cinematic character animations shown in trailers.",
  },
  {
    question: "Is GTA 6 realistic or arcade-style?",
    answer:
      "GTA 6 appears to be more grounded and realistic than GTA 5, leaning closer to Red Dead Redemption 2's attention to detail — but still maintaining the over-the-top GTA feel. The game world is more reactive and simulation-driven than any previous GTA title.",
  },
];

export default function GameplayPage() {
  return (
    <>
      <Hero
        title="GTA 6 GAMEPLAY"
        subtitle="Every confirmed mechanic, feature, and gameplay detail from official trailers and Rockstar statements. Updated as new information drops."
        badge="Trailer 3 Expected Summer 2026 — More Gameplay Incoming"
        primaryCTA={{ label: "Watch Trailers", href: "/trailer" }}
        secondaryCTA={{ label: "Characters Info", href: "/characters" }}
      />

      <CardSection
        heading="Confirmed Gameplay Features"
        subheading="Everything Rockstar has shown or confirmed across both official trailers"
        cards={gameplayCards}
        columns={3}
      />

      {/* Editorial */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-6">
            How GTA 6 Gameplay Evolves the Formula
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              Every GTA game has refined the open-world formula Rockstar pioneered. GTA 3 gave us the template.
              San Andreas expanded it with RPG mechanics. GTA 5 perfected cinematic storytelling and heist design.
              GTA 6 is doing something different — it is making the world itself the gameplay.
            </p>
            <p>
              The most significant change is the living, reactive Leonida. In GTA 5, the world largely existed
              as a backdrop. In GTA 6, trailers confirm that NPCs film player actions on in-game phones, flooding
              reshapes areas after storms, and a social media system lets your in-game reputation spread virally.
              You are not just a criminal in a city — you are a character in a world that notices you.
            </p>
            <h3 className="font-display text-2xl text-white tracking-wider pt-2">
              The Heist Experience
            </h3>
            <p>
              GTA 5's heists were a landmark moment in open-world gaming — multi-stage missions requiring planning,
              crew selection, and execution across multiple approaches. GTA 6 appears to expand this further.
              Trailer 2 shows bank heist sequences and store robberies that look more dynamic and improvisational
              than before. The dual-protagonist mechanic adds a co-op dimension to every criminal operation,
              with Lucia and Jason able to split roles and cover different angles mid-mission.
            </p>
            <h3 className="font-display text-2xl text-white tracking-wider pt-2">
              Red Dead Redemption 2's Influence
            </h3>
            <p>
              Rockstar's last major release before GTA 6 was Red Dead Redemption 2 — widely regarded as one of
              the most detailed open-world games ever made. Its NPC interaction systems, physics, and world
              simulation set a new bar. GTA 6 is clearly built on those foundations. The weight of character
              movement, the crowd simulation, and the environmental detail visible in trailers all echo RDR2's
              approach. GTA 6 is essentially what happens when Rockstar applies the RDR2 playbook to a
              modern-day crime sandbox.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        heading="GAMEPLAY FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}

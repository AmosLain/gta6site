import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "GTA 6 Pre-Order — How & Where to Pre-Order Grand Theft Auto 6",
  description: "GTA 6 pre-orders have not officially opened yet. Expected to launch Summer 2026. PlayStation Store, Xbox, and retailers will carry it. Get notified the moment it goes live.",
  alternates: { canonical: "/pre-order" },
};

const preOrderCards = [
  {
    title: "PlayStation Store",
    badge: "Rumor" as const,
    icon: "🎮",
    content: [
      "PS5 exclusive at launch",
      "Title IDs added to PSN database",
      "Digital pre-order likely first",
      "PS5 version only — no PS4",
    ],
  },
  {
    title: "Xbox Store",
    badge: "Rumor" as const,
    icon: "🟢",
    content: [
      "Xbox Series X|S only",
      "UK listing showed £89.99",
      "Smart Delivery likely included",
      "No Xbox One version confirmed",
    ],
  },
  {
    title: "Amazon & Retailers",
    badge: "Rumor" as const,
    icon: "📦",
    content: [
      "Physical copies expected",
      "Amazon, GameStop, Best Buy",
      "Some speculation of digital-first launch",
      "Physical discs may follow weeks later",
    ],
  },
  {
    title: "When to Expect Pre-Orders",
    badge: "Rumor" as const,
    icon: "📅",
    content: [
      "Summer 2026 — alongside marketing push",
      "Rockstar marketing begins Summer 2026",
      "New trailers expected before pre-orders open",
      "Sign up below to get notified instantly",
    ],
  },
];

const faqItems = [
  {
    question: "Can I pre-order GTA 6 now?",
    answer: "Not yet. Official pre-orders have not opened on PlayStation Store, Xbox Store, or any retailer. The PlayStation Store database has received GTA 6 title IDs, suggesting listings are coming soon.",
  },
  {
    question: "Will there be pre-order bonuses?",
    answer: "Almost certainly yes. Rockstar typically offers in-game bonuses such as exclusive vehicles, cash, or outfits for pre-orders. Specific bonuses have not been announced yet.",
  },
  {
    question: "Should I pre-order GTA 6?",
    answer: "There is no rush — GTA 6 will not sell out digitally. For physical copies, pre-ordering ensures you get it on day one. Wait for pre-order bonuses to be announced before committing.",
  },
  {
    question: "Will GTA 6 come on Game Pass or PS Plus?",
    answer: "No day-one Game Pass or PS Plus release is expected. Given its massive budget, Take-Two will not discount the game on subscription services at launch.",
  },
];

export default function PreOrderPage() {
  return (
    <>
      <Hero
        title="GTA 6 PRE-ORDER"
        subtitle="Pre-orders are not open yet. Rockstar's marketing campaign starts Summer 2026 — that is when pre-orders are expected to go live."
        badge="Pre-Orders Coming Summer 2026"
        primaryCTA={{ label: "Notify Me", href: "#email" }}
        secondaryCTA={{ label: "Check Price", href: "/price" }}
      />

      <CardSection
        heading="WHERE TO PRE-ORDER"
        subheading="Pre-orders will be available on these platforms when they open"
        cards={preOrderCards}
      />

      <FAQ
        heading="PRE-ORDER FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}
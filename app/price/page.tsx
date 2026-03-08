import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "GTA 6 Price — How Much Will GTA 6 Cost in 2026?",
  description: "GTA 6 price is expected to be $80-$100 USD. Take-Two CEO Strauss Zelnick says pricing will be fair. Special editions likely at higher tiers. Full pricing breakdown here.",
  alternates: { canonical: "/price" },
};

const priceCards = [
  {
    title: "Standard Edition",
    badge: "Rumor" as const,
    icon: "💰",
    content: [
      "Expected price: $79.99 USD",
      "PS5 & Xbox Series X|S versions",
      "Base game only",
      "Digital and physical release",
    ],
  },
  {
    title: "Premium / Deluxe Edition",
    badge: "Rumor" as const,
    icon: "💎",
    content: [
      "Expected price: $99.99 - $109.99 USD",
      "Early access (likely 3-5 days)",
      "Bonus in-game content & currency",
      "Xbox listing showed £89.99 in UK",
    ],
  },
  {
    title: "Collector Edition",
    badge: "Rumor" as const,
    icon: "🏆",
    content: [
      "Physical collectibles expected",
      "Steelbook case likely",
      "Exclusive in-game items",
      "Price: $150+ speculated",
    ],
  },
  {
    title: "What Take-Two Said",
    badge: "Confirmed" as const,
    icon: "🎙️",
    content: [
      "CEO Zelnick: pricing will be fair",
      "We deliver more value than what we charge",
      "Variable pricing — special editions priced up",
      "Industry analyst Matthew Ball: $100 likely",
    ],
  },
];

const faqItems = [
  {
    question: "How much will GTA 6 cost?",
    answer: "No official price has been confirmed. The standard edition is expected to be $79.99 USD, with premium editions potentially reaching $99.99 or higher. Take-Two CEO Strauss Zelnick has said pricing will be fair and offer good value.",
  },
  {
    question: "Will GTA 6 cost $100?",
    answer: "It is possible. Industry analyst Matthew Ball forecast a $100 price tag, and Zelnick noted that special editions can be priced up. Development costs reportedly exceeded $2 billion, making a premium price understandable.",
  },
  {
    question: "When will pre-orders open?",
    answer: "Pre-orders have not opened yet. PlayStation Store database updates adding GTA 6 title IDs suggest official listings are coming. Rockstar typically announces pre-orders alongside major marketing pushes, expected Summer 2026.",
  },
  {
    question: "Will GTA 6 have a Game Pass or PS Plus day one release?",
    answer: "Very unlikely. Given its massive budget and expected sales, Rockstar and Take-Two would not put GTA 6 on subscription services at launch. GTA 5 took years to arrive on Game Pass.",
  },
];

export default function PricePage() {
  return (
    <>
      <Hero
        title="GTA 6 PRICE"
        subtitle="No official price confirmed yet. Expected $79.99-$99.99 USD. Take-Two promises fair value for the most expensive game ever made."
        badge="Price TBA — Expected $80-$100 USD"
        primaryCTA={{ label: "Pre-Order Info", href: "/pre-order" }}
        secondaryCTA={{ label: "Release Date", href: "/release-date" }}
      />

      <CardSection
        heading="PRICING BREAKDOWN"
        subheading="Expected editions and prices based on leaks and executive statements"
        cards={priceCards}
      />

      <FAQ
        heading="PRICE FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}
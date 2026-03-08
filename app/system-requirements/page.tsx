import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";
import { VideoGameSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "GTA 6 PC System Requirements — Minimum & Recommended Specs (2026)",
  description: "GTA 6 PC system requirements are not official yet. Expected minimum: GTX 1660 + i5 + 12GB RAM. Recommended: RTX 3060 + i7 + 16GB RAM. PC release expected 2027.",
  alternates: { canonical: "/system-requirements" },
};

const specsCards = [
  {
    title: "Minimum PC Specs (Estimated)",
    badge: "Rumor" as const,
    icon: "💻",
    content: [
      "CPU: Intel Core i5-6600K / AMD Ryzen 5 1600",
      "GPU: NVIDIA GTX 1660 / AMD RX 5500 XT",
      "RAM: 12GB",
      "Storage: 150GB SSD (SSD required, no HDD)",
      "OS: Windows 10 64-bit",
      "DirectX: Version 12",
    ],
  },
  {
    title: "Recommended PC Specs (Estimated)",
    badge: "Rumor" as const,
    icon: "🖥️",
    content: [
      "CPU: Intel Core i7-10700 / AMD Ryzen 7 5700X",
      "GPU: NVIDIA RTX 3060 / AMD RX 6700 XT",
      "RAM: 16GB",
      "Storage: 150GB NVMe SSD",
      "OS: Windows 10/11 64-bit",
      "Note: Based on leaked RTX 2080 Super playtesting",
    ],
  },
  {
    title: "Console Specs for Reference",
    badge: "Confirmed" as const,
    icon: "🎮",
    content: [
      "PS5: AMD Zen 2 CPU, RDNA 2 GPU (10.28 TFLOPs)",
      "Xbox Series X: AMD Zen 2, RDNA 2 (12 TFLOPs)",
      "Both consoles: 16GB GDDR6 RAM",
      "Built-in NVMe SSD on both platforms",
      "GTA 6 built specifically for these specs",
    ],
  },
  {
    title: "PC Release Info",
    badge: "Rumor" as const,
    icon: "📅",
    content: [
      "No PC release date confirmed by Rockstar",
      "Console launch: November 19, 2026",
      "PC expected: 2027 (6-12 months later)",
      "PC version likely to include extra graphics options",
      "Mod support expected post-launch",
    ],
  },
];

const faqItems = [
  {
    question: "What are the GTA 6 PC system requirements?",
    answer: "Rockstar has not released official PC requirements. Based on community analysis, leaked playtesting footage (RTX 2080 Super was used), and console specs, experts predict a minimum of GTX 1660 + 12GB RAM and recommended of RTX 3060 + 16GB RAM.",
  },
  {
    question: "Does GTA 6 require an SSD?",
    answer: "Almost certainly yes. GTA 6 is being built for PS5 and Xbox Series X|S, both of which use high-speed NVMe SSDs. The game's massive open world will require SSD speeds. HDDs are expected to be unsupported.",
  },
  {
    question: "How much storage will GTA 6 need?",
    answer: "Based on GTA 5's 100GB+ footprint and the game's much larger scale, experts estimate 150GB of SSD space. Some estimates go as high as 300GB including updates and DLC.",
  },
  {
    question: "Will GTA 6 run on my PC?",
    answer: "GTA 6 is not releasing on PC at launch. The PC version is expected in 2027. Official system requirements will be announced closer to that release. If your PC can run modern AAA games at decent settings, you likely have nothing to worry about.",
  },
];

export default function SystemRequirementsPage() {
  return (
    <>
      <VideoGameSchema url="https://buygta6game.com/system-requirements" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://buygta6game.com" },
        { name: "System Requirements", url: "https://buygta6game.com/system-requirements" },
      ]} />

      <Hero
        title="GTA 6 SYSTEM REQUIREMENTS"
        subtitle="PC version not confirmed at launch. Console release November 19, 2026. PC expected 2027. Estimated specs based on leaks and expert analysis."
        badge="PC Release Expected 2027 — Specs Not Official Yet"
        primaryCTA={{ label: "Release Date Info", href: "/release-date" }}
        secondaryCTA={{ label: "Price Info", href: "/price" }}
      />

      <CardSection
        heading="ESTIMATED PC SPECS"
        subheading="Based on leaked playtesting footage, console hardware, and expert analysis — not official"
        cards={specsCards}
      />

      <FAQ
        heading="SYSTEM REQUIREMENTS FAQ"
        items={faqItems}
      />

      <LastUpdated className="pb-8" />
    </>
  );
}
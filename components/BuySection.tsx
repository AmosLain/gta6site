"use client";
import CTAButton from "./CTAButton";

interface BuyOption {
  platform: string;
  icon: string;
  label: string;
  sublabel: string;
  color: string;
}

const buyOptions: BuyOption[] = [
  {
    platform: "PlayStation 5",
    icon: "🎮",
    label: "PlayStation Store",
    sublabel: "PS5 Edition",
    color: "from-blue-600/20 to-blue-900/10",
  },
  {
    platform: "Xbox Series X|S",
    icon: "🟢",
    label: "Microsoft Store",
    sublabel: "Xbox Edition",
    color: "from-green-600/20 to-green-900/10",
  },
  {
    platform: "PC",
    icon: "🖥️",
    label: "Rockstar Games Launcher",
    sublabel: "PC / Windows",
    color: "from-vice-orange/20 to-orange-900/10",
  },
  {
    platform: "Amazon",
    icon: "📦",
    label: "Amazon.com",
    sublabel: "Physical Copy",
    color: "from-yellow-600/20 to-yellow-900/10",
  },
];

export default function BuySection() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider mb-3">
          Where to Buy GTA 6
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Pre-order links will be activated on launch day. Bookmark this page — we update
          it the moment official links go live.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buyOptions.map((option) => (
          <a
            key={option.platform}
            href="#"
            className={`group relative glass rounded-2xl p-6 hover:glow-border transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${option.color} overflow-hidden`}
            onClick={(e) => e.preventDefault()}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{option.icon}</span>
              <div className="flex-1">
                <div className="font-display text-lg tracking-wider text-white group-hover:text-vice-gold transition-colors">
                  {option.platform}
                </div>
                <div className="text-sm text-gray-500">{option.sublabel}</div>
              </div>
              <div className="shrink-0">
                <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-vice-orange/20 text-vice-orange border border-vice-orange/30 group-hover:bg-vice-orange group-hover:text-white transition-all">
                  Coming Soon
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              via {option.label} — links activate at launch
            </p>
          </a>
        ))}
      </div>

      <p className="text-center text-xs text-gray-600 mt-6">
        * Pre-order links are placeholders. This page is updated as official channels open.
        Not affiliated with any retailer or Rockstar Games.
      </p>
    </section>
  );
}

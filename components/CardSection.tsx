import { cn } from "@/lib/utils";

interface Card {
  title: string;
  content: string | string[];
  badge?: "Confirmed" | "Rumor" | "Leaked";
  icon?: string;
}

interface CardSectionProps {
  heading: string;
  subheading?: string;
  cards: Card[];
  columns?: 2 | 3 | 4;
}

const badgeStyles = {
  Confirmed:
    "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  Rumor: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
  Leaked: "bg-vice-pink/15 text-vice-pink border border-vice-pink/30",
};

export default function CardSection({
  heading,
  subheading,
  cards,
  columns = 3,
}: CardSectionProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="section-glow py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider mb-3">
          {heading}
        </h2>
        {subheading && (
          <p className="text-gray-400 max-w-2xl mx-auto">{subheading}</p>
        )}
      </div>

      <div className={cn("grid grid-cols-1 gap-5", gridCols[columns])}>
        {cards.map((card, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 shadow-card-glow hover:border-vice-orange/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-start justify-between mb-3">
              {card.icon && (
                <span className="text-2xl mr-2">{card.icon}</span>
              )}
              <h3 className="font-display text-xl tracking-wider text-white flex-1 group-hover:text-vice-gold transition-colors">
                {card.title}
              </h3>
              {card.badge && (
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ml-2 shrink-0",
                    badgeStyles[card.badge]
                  )}
                >
                  {card.badge}
                </span>
              )}
            </div>

            {Array.isArray(card.content) ? (
              <ul className="space-y-1.5">
                {card.content.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-vice-orange mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400 leading-relaxed">{card.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

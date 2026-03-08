import Link from "next/link";
import CTAButton from "./CTAButton";

interface HeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  showCountdown?: boolean;
}

export default function Hero({
  title,
  subtitle,
  badge,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-vice-gradient" />

      {/* Sunset glow */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,107,53,0.2) 0%, rgba(255,45,120,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Top accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 animate-pulse-slow"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,179,71,0.2) 0%, transparent 65%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,53,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border mb-6 animate-float">
            <span className="w-2 h-2 rounded-full bg-vice-orange animate-pulse" />
            <span className="text-xs font-semibold text-vice-orange uppercase tracking-widest">
              {badge}
            </span>
          </div>
        )}

        <h1 className="font-display text-6xl sm:text-8xl lg:text-[7rem] leading-none tracking-wider text-white mb-6">
          {title.split(" ").map((word, i) => (
            <span
              key={i}
              className={i === 1 || i === 2 ? "text-gradient" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <p className="text-lg sm:text-xl text-gray-300/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <CTAButton href={primaryCTA.href} variant="primary" size="lg">
              {primaryCTA.label}
            </CTAButton>
          )}
          {secondaryCTA && (
            <CTAButton href={secondaryCTA.href} variant="secondary" size="lg">
              {secondaryCTA.label}
            </CTAButton>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vice-darker to-transparent" />
    </section>
  );
}

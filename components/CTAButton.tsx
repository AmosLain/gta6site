"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-vice-orange/50";

  const variants = {
    primary:
      "bg-vice-orange text-white hover:bg-vice-orange/90 shadow-vice-glow hover:shadow-vice-glow hover:scale-105 active:scale-95",
    secondary:
      "glass glow-border text-white hover:bg-vice-orange/10 hover:border-vice-orange/60 hover:scale-105 active:scale-95",
    ghost:
      "text-vice-orange hover:text-vice-gold hover:bg-vice-orange/5 border border-transparent hover:border-vice-orange/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (external || href.startsWith("http") || href === "#") {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

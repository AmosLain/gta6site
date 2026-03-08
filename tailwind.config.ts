import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vice: {
          orange: "#FF6B35",
          gold: "#FFB347",
          pink: "#FF2D78",
          teal: "#00D4FF",
          dark: "#0A0A0F",
          darker: "#050508",
          card: "#111118",
          border: "#2A2A3A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "vice-gradient":
          "linear-gradient(135deg, #0A0A0F 0%, #1A0A1F 50%, #0F0A0A 100%)",
        "glow-orange":
          "radial-gradient(ellipse at center, rgba(255,107,53,0.15) 0%, transparent 70%)",
        "glow-pink":
          "radial-gradient(ellipse at center, rgba(255,45,120,0.12) 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.6) 60%, #0A0A0F 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        "vice-glow": "0 0 30px rgba(255,107,53,0.3), 0 0 60px rgba(255,107,53,0.1)",
        "vice-glow-sm": "0 0 15px rgba(255,107,53,0.25)",
        "pink-glow": "0 0 30px rgba(255,45,120,0.3)",
        "card-glow": "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;

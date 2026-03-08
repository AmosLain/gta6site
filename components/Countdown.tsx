"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-11-19T00:00:00Z");

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: time?.days ?? 0 },
    { label: "Hours", value: time?.hours ?? 0 },
    { label: "Minutes", value: time?.minutes ?? 0 },
    { label: "Seconds", value: time?.seconds ?? 0 },
  ];

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto glass rounded-2xl p-8 sm:p-10 glow-border text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vice-orange/10 border border-vice-orange/20 mb-4">
          <span className="text-xs font-semibold text-vice-orange uppercase tracking-widest">
            🚀 Launch Countdown
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wider mb-8">
          GTA 6 RELEASES IN
        </h2>
        <div className="grid grid-cols-4 gap-3 sm:gap-6">
          {units.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-full rounded-xl bg-white/5 border border-white/10 py-4 sm:py-6 mb-2">
                <span className="font-display text-3xl sm:text-5xl text-gradient tracking-widest">
                  {time === null ? "--" : label === "Days" ? value : pad(value)}
                </span>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-600">
          November 19, 2026 — PS5 & Xbox Series X|S
        </p>
      </div>
    </section>
  );
}

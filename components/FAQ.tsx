"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  heading?: string;
  items: FAQItem[];
}

export default function FAQ({ heading = "Frequently Asked Questions", items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider text-center mb-10">
        {heading}
      </h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
              open === i ? "glow-border" : "border-vice-border/50"
            }`}
          >
            <button
              className="w-full flex items-center justify-between p-5 text-left gap-4 hover:bg-white/3 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-medium text-white text-sm sm:text-base">{item.question}</span>
              <span
                className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  open === i
                    ? "border-vice-orange text-vice-orange rotate-45"
                    : "border-gray-600 text-gray-400"
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

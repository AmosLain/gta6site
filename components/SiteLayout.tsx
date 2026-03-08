"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/utils";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-subtle border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-2xl tracking-wider text-gradient hover:opacity-90 transition-opacity"
            >
              GTA6 HQ
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === link.href
                      ? "text-vice-orange bg-vice-orange/10 shadow-vice-glow-sm"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/pre-order"
                className="ml-3 px-4 py-2 text-sm font-semibold bg-vice-orange text-white rounded-lg hover:bg-vice-orange/90 transition-all duration-200 shadow-vice-glow-sm"
              >
                Pre-Order Now
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1.5 transition-all"></div>
              <div className="w-5 h-0.5 bg-current mb-1.5 transition-all"></div>
              <div className="w-5 h-0.5 bg-current transition-all"></div>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <div className="lg:hidden pb-4 border-t border-white/5 mt-2 pt-4">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                      pathname === link.href
                        ? "text-vice-orange bg-vice-orange/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/pre-order"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-4 py-2.5 text-sm font-semibold bg-vice-orange text-white rounded-lg text-center"
                >
                  Pre-Order Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5 bg-vice-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-display text-2xl text-gradient mb-3">GTA6 HQ</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                The most comprehensive fan resource for Grand Theft Auto 6 information,
                news, and updates.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-vice-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                Disclaimer
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Not affiliated with Rockstar Games, Take-Two Interactive, or any
                official GTA 6 partners. All trademarks belong to their respective owners.
              </p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 text-center space-y-3">
            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/privacy-policy" className="text-xs text-gray-600 hover:text-vice-orange transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="text-xs text-gray-600 hover:text-vice-orange transition-colors">Disclaimer</Link>
              <Link href="/terms" className="text-xs text-gray-600 hover:text-vice-orange transition-colors">Terms of Use</Link>
            </div>
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} GTA6 HQ — Independent Fan Site. Not affiliated with Rockstar Games or Take-Two Interactive.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

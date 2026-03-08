export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const SITE_URL = "https://buygta6game.com";

export const NAV_LINKS = [
  { label: "Release Date", href: "/release-date" },
  { label: "Pre-Order", href: "/pre-order" },
  { label: "Price", href: "/price" },
  { label: "Gameplay", href: "/gameplay" },
  { label: "Trailer", href: "/trailer" },
  { label: "Map", href: "/map" },
  { label: "Characters", href: "/characters" },
  { label: "Leaks", href: "/leaks" },
  { label: "GTA 6 vs GTA 5", href: "/gta-6-vs-gta-5" },
  { label: "News", href: "/news" },
  { label: "System Requirements", href: "/system-requirements" },
];

export const LAST_UPDATED = "March 9, 2026";

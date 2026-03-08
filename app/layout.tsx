import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buygta6game.com"),
  title: {
    default: "GTA 6 HQ — Release Date, Price, Pre-Order & System Requirements",
    template: "%s | GTA 6 HQ",
  },
  description:
    "Your #1 source for GTA 6 news. Find the latest GTA 6 release date, price, pre-order links, system requirements, and trailer breakdowns.",
  keywords: [
    "GTA 6",
    "Grand Theft Auto 6",
    "GTA 6 release date",
    "GTA 6 pre-order",
    "GTA 6 price",
    "GTA 6 system requirements",
    "GTA 6 trailer",
    "Rockstar Games",
    "buy GTA 6",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buygta6game.com",
    siteName: "GTA 6 HQ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GTA 6 HQ — Everything You Need to Know",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-vice-darker text-white font-body antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

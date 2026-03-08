interface FAQItem {
  question: string;
  answer: string;
}

interface VideoGameSchemaProps {
  url?: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

interface NewsArticleSchemaProps {
  headline: string;
  url: string;
  datePublished: string;
  description: string;
}

export function VideoGameSchema({ url = "https://buygta6game.com" }: VideoGameSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Grand Theft Auto VI",
    alternateName: ["GTA 6", "GTA VI"],
    url,
    description:
      "Grand Theft Auto VI is an open-world action-adventure game developed by Rockstar Games. Set in Vice City and the state of Leonida, it features dual protagonists Lucia and Jason. Releasing November 19, 2026 on PlayStation 5 and Xbox Series X|S.",
    author: {
      "@type": "Organization",
      name: "Rockstar Games",
      url: "https://www.rockstargames.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Take-Two Interactive",
    },
    genre: ["Action", "Adventure", "Open World", "Crime"],
    gamePlatform: ["PlayStation 5", "Xbox Series X", "Xbox Series S"],
    releaseDate: "2026-11-19",
    image: "https://buygta6game.com/og-image.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function NewsArticleSchema({ headline, url, datePublished, description }: NewsArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline,
    url,
    datePublished,
    description,
    publisher: {
      "@type": "Organization",
      name: "GTA6 HQ",
      url: "https://buygta6game.com",
    },
    about: {
      "@type": "VideoGame",
      name: "Grand Theft Auto VI",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

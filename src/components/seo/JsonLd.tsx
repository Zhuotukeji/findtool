interface BreadcrumbItem {
  name: string;
  url: string;
}

export function JsonLdBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface SoftwareAppProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  rating?: number;
  ratingCount?: number;
  pricing?: string;
  image?: string;
}

export function JsonLdSoftwareApp({
  name,
  description,
  url,
  category,
  rating,
  ratingCount,
  pricing,
  image,
}: SoftwareAppProps) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: category || 'Utility',
    operatingSystem: 'Web',
  };

  if (image) data.image = image;

  if (rating && ratingCount) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating,
      ratingCount: ratingCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  if (pricing) {
    data.offers = {
      '@type': 'Offer',
      price: pricing === 'Free' ? '0' : undefined,
      priceCurrency: 'USD',
      description: pricing,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLdWebSite({ name, url }: { name: string; url: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

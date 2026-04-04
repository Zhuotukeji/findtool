import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export const metadata: Metadata = {
  title: 'Search AI Tools - ToolFinder',
  description: 'Search and filter AI tools by category, pricing, and features. Find the perfect AI tool for your needs.',
  openGraph: {
    title: 'Search AI Tools',
    description: 'Search and filter AI tools by category, pricing, and features.',
    url: `${siteUrl}/search`,
  },
  alternates: {
    canonical: `${siteUrl}/search`,
  },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

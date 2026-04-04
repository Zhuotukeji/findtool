import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ToolFinder - Find the Best AI Tools for Every Task',
    template: '%s | ToolFinder',
  },
  description:
    'Discover, compare, and choose the best AI tools for your needs. Browse 200+ tools across 10+ categories with detailed reviews, pricing info, and side-by-side comparisons.',
  keywords: [
    'AI tools',
    'artificial intelligence',
    'tool directory',
    'AI comparison',
    'best AI tools',
    'AI software',
    'machine learning tools',
    'AI productivity',
  ],
  authors: [{ name: 'ToolFinder' }],
  creator: 'ToolFinder',
  publisher: 'ToolFinder',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ToolFinder',
    title: 'ToolFinder - Find the Best AI Tools for Every Task',
    description:
      'Discover, compare, and choose the best AI tools. Browse 200+ tools across 10+ categories.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ToolFinder - AI Tool Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolFinder - Find the Best AI Tools',
    description:
      'Discover, compare, and choose the best AI tools. Browse 200+ tools across 10+ categories.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

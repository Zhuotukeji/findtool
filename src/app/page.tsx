import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import SearchBar from '@/components/search/SearchBar';
import ToolCard from '@/components/tools/ToolCard';
import CategoryCard from '@/components/tools/CategoryCard';
import { categories, tools } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

function JsonLdWebSite() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ToolFinder',
    url: siteUrl,
    description: 'Discover, compare, and choose the best AI tools for your needs.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function JsonLdOrganization() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ToolFinder',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'AI tool discovery and comparison platform.',
    sameAs: [],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  const featuredTools = tools.filter((t) => t.featured).slice(0, 6);
  const featuredCategories = categories.filter((c) => c.featured).slice(0, 6);
  const latestTools = [...tools].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()).slice(0, 4);

  return (
    <>
      <JsonLdWebSite />
      <JsonLdOrganization />
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-violet-200 text-sm text-violet-700 mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span>Discover {tools.length}+ AI Tools across {categories.length} categories</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up animate-delay-100">
              Find the <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Perfect AI Tool</span> for Your Needs
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Compare features, pricing, and reviews of the best AI tools. Make informed decisions with our comprehensive directory.
            </p>
            <div className="max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
              <SearchBar />
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm text-gray-500 animate-fade-in-up animate-delay-400">
              <span>Popular:</span>
              {['ChatGPT', 'Midjourney', 'GitHub Copilot', 'Jasper'].map((term) => (
                <Link key={term} href={`/search?q=${encodeURIComponent(term)}`} className="text-violet-600 hover:text-violet-800 hover:underline">
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 text-violet-600 text-sm font-medium mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Featured Tools</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Top Rated AI Tools</h2>
              <p className="text-gray-500 mt-2">Hand-picked tools trusted by thousands of professionals</p>
            </div>
            <Link href="/search" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-violet-600 bg-violet-50 rounded-full hover:bg-violet-100 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} featured />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/search" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-violet-600 bg-violet-50 rounded-full hover:bg-violet-100 transition-colors">
              View All Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Browse by Category</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore AI tools organized by use case to find exactly what you need</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/category" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-200 hover:border-violet-300 hover:text-violet-600 transition-all shadow-sm">
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Tools Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-2">
                <Zap className="w-4 h-4" />
                <span>Recently Added</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Latest AI Tools</h2>
              <p className="text-gray-500 mt-2">Stay updated with the newest additions to our directory</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
            Our directory is constantly growing. Search through our collection or suggest a tool to be added.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-violet-700 font-semibold rounded-full hover:bg-violet-50 transition-colors shadow-lg">
              Search All Tools <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/compare" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              Compare Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

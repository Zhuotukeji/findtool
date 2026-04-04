import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ExternalLink, Check, ArrowLeft, Globe, Calendar, Tag } from 'lucide-react';
import { tools, categories } from '@/data';
import { JsonLdSoftwareApp, JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return {};
  const category = categories.find((c) => c.slug === tool.category);
  return {
    title: `${tool.name} - AI Tool Review`,
    description: `${tool.description} Compare features, pricing, and alternatives for ${tool.name}.`,
    openGraph: {
      title: `${tool.name} - AI Tool Review | ToolFinder`,
      description: tool.description,
      url: `${siteUrl}/tool/${tool.slug}`,
      images: tool.logo ? [{ url: tool.logo, width: 200, height: 200, alt: tool.name }] : [],
    },
    alternates: {
      canonical: `${siteUrl}/tool/${tool.slug}`,
    },
    keywords: [tool.name, 'AI tool', category?.name || '', 'review', 'pricing', 'alternatives'],
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.slug === tool.category);
  const relatedTools = tools.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLdSoftwareApp
        name={tool.name}
        description={tool.description}
        url={`${siteUrl}/tool/${tool.slug}`}
        category={category?.name}
        rating={tool.rating}
        ratingCount={tool.reviews}
        pricing={tool.pricing}
        image={tool.logo}
      />
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          ...(category ? [{ name: category.name, url: `${siteUrl}/category/${category.slug}` }] : []),
          { name: tool.name, url: `${siteUrl}/tool/${tool.slug}` },
        ]}
      />
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-violet-600">Home</Link>
            <span>/</span>
            {category && (
              <>
                <Link href={`/category/${category.slug}`} className="hover:text-violet-600">{category.name}</Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-900">{tool.name}</span>
          </div>
        </div>
      </div>

      {/* Tool Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                {tool.logo || '🤖'}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{tool.name}</h1>
                  <p className="text-lg text-gray-600 max-w-2xl">{tool.description}</p>
                </div>
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-5">
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(tool.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{tool.rating}</span>
                  <span className="text-sm text-gray-400">({tool.reviewCount} reviews)</span>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-violet-50 text-violet-700 rounded-full capitalize">{tool.pricing.model}</span>
                {category && (
                  <Link href={`/category/${category.slug}`} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-600">
                    <Tag className="w-3.5 h-3.5" />
                    {category.name}
                  </Link>
                )}
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  Added {new Date(tool.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tool.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pros</h3>
                <ul className="space-y-3">
                  {tool.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-500 mt-0.5">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cons</h3>
                <ul className="space-y-3">
                  {tool.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-400 mt-0.5">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            {tool.useCases && tool.useCases.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Use Cases</h2>
                <div className="space-y-4">
                  {tool.useCases.map((useCase, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <span className="text-violet-500 font-bold text-lg">{i + 1}.</span>
                      <p className="text-gray-700">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Model</span>
                  <span className="text-sm font-medium text-gray-900 capitalize">{tool.pricing.model}</span>
                </div>
                {tool.pricing.startingPrice && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Starting Price</span>
                    <span className="text-sm font-medium text-gray-900">{tool.pricing.startingPrice}</span>
                  </div>
                )}
                {tool.pricing.hasFreeTriaI && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-emerald-700">Free trial available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Link key={tag} href={`/search?q=${tag}`} className="px-3 py-1.5 text-xs font-medium bg-gray-50 text-gray-600 rounded-full hover:bg-violet-50 hover:text-violet-600 transition-colors border border-gray-100">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <a href={tool.website} target="_blank" rel="noopener noreferrer" className="text-sm text-violet-600 hover:underline truncate">{tool.website}</a>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Tools</h3>
                <div className="space-y-3">
                  {relatedTools.map((rt) => (
                    <Link key={rt.slug} href={`/tool/${rt.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                        {rt.logo || '🤖'}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 group-hover:text-violet-600 transition-colors">{rt.name}</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="text-xs text-gray-500">{rt.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

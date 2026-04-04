import Link from 'next/link';
import { Metadata } from 'next';
import { Star, Check, X, ArrowRight } from 'lucide-react';
import { tools, categories } from '@/data';
import { JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export const metadata: Metadata = {
  title: 'Compare AI Tools Side by Side - ToolFinder',
  description: 'Side-by-side comparison of popular AI tools. Compare features, pricing, and ratings to find the perfect tool for your workflow.',
  openGraph: {
    title: 'Compare AI Tools Side by Side',
    description: 'Side-by-side comparison of popular AI tools. Compare features, pricing, and ratings.',
    url: `${siteUrl}/compare`,
  },
  alternates: {
    canonical: `${siteUrl}/compare`,
  },
};

export default function ComparePage() {
  // Group tools by category for comparison suggestions
  const comparisons = categories
    .map((cat) => {
      const catTools = tools.filter((t) => t.category === cat.slug).slice(0, 3);
      return { category: cat, tools: catTools };
    })
    .filter((c) => c.tools.length >= 2);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Compare', url: `${siteUrl}/compare` },
        ]}
      />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Compare AI Tools</h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Side-by-side comparisons to help you pick the best AI tool for your needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {comparisons.map(({ category, tools: catTools }) => (
          <div key={category.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
              </div>
              <Link href={`/category/${category.slug}`} className="text-sm text-violet-600 hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 text-sm font-medium text-gray-500 w-40">Feature</th>
                    {catTools.map((tool) => (
                      <th key={tool.slug} className="text-center p-4">
                        <Link href={`/tool/${tool.slug}`} className="inline-flex flex-col items-center gap-2 hover:text-violet-600 transition-colors">
                          <span className="text-2xl">{tool.logo || '🤖'}</span>
                          <span className="text-sm font-bold text-gray-900">{tool.name}</span>
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 text-sm text-gray-500">Rating</td>
                    {catTools.map((tool) => (
                      <td key={tool.slug} className="p-4 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span className="text-sm font-semibold">{tool.rating}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-gray-500">Pricing</td>
                    {catTools.map((tool) => (
                      <td key={tool.slug} className="p-4 text-center">
                        <span className="text-sm capitalize">{tool.pricing.model}</span>
                        {tool.pricing.startingPrice && (
                          <p className="text-xs text-gray-400 mt-0.5">{tool.pricing.startingPrice}</p>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-gray-500">Free Tier</td>
                    {catTools.map((tool) => (
                      <td key={tool.slug} className="p-4 text-center">
                        {tool.pricing.hasFreeTriaI ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-gray-500">Best For</td>
                    {catTools.map((tool) => (
                      <td key={tool.slug} className="p-4 text-center text-sm text-gray-600">
                        {tool.pros[0] || '-'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

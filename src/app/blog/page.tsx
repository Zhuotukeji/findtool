import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '@/data';
import { JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export const metadata = {
  title: 'AI Tools Blog - Guides, Reviews & Insights | ToolFinder',
  description: 'Latest articles, guides, and insights about AI tools, trends, and best practices. Learn how to choose and use the best AI tools.',
  openGraph: {
    title: 'AI Tools Blog | ToolFinder',
    description: 'Guides, comparisons, and insights to help you choose the right AI tools.',
    url: `${siteUrl}/blog`,
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

// Gradient themes for blog cards - each category gets a unique color scheme
const gradientThemes = [
  'from-violet-100 via-purple-50 to-indigo-100',
  'from-blue-100 via-cyan-50 to-teal-100',
  'from-rose-100 via-pink-50 to-fuchsia-100',
  'from-amber-100 via-yellow-50 to-orange-100',
  'from-emerald-100 via-green-50 to-lime-100',
  'from-sky-100 via-blue-50 to-indigo-100',
  'from-fuchsia-100 via-purple-50 to-pink-100',
  'from-teal-100 via-emerald-50 to-cyan-100',
  'from-orange-100 via-amber-50 to-red-100',
  'from-indigo-100 via-violet-50 to-blue-100',
  'from-pink-100 via-rose-50 to-red-100',
  'from-cyan-100 via-sky-50 to-blue-100',
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Blog', url: `${siteUrl}/blog` },
        ]}
      />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Blog</h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Guides, comparisons, and insights to help you choose the right AI tools.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Featured Post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className={`aspect-[16/10] md:aspect-auto bg-gradient-to-br ${gradientThemes[0]} flex items-center justify-center relative`}>
                  <span className="text-7xl drop-shadow-sm">{featured.emoji || '📝'}</span>
                  <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-xs font-semibold text-violet-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    {featured.category}
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-3">{featured.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">{featured.title}</h2>
                  <p className="text-gray-500 mb-5 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{new Date(featured.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className={`aspect-[16/9] bg-gradient-to-br ${gradientThemes[(index + 1) % gradientThemes.length]} flex items-center justify-center relative`}>
                  <span className="text-5xl drop-shadow-sm">{post.emoji || '📝'}</span>
                  <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-[10px] font-semibold text-violet-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

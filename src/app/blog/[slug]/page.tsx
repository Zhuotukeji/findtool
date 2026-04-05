import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data';
import { JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ToolFinder Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Blog', url: `${siteUrl}/blog` },
          { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { '@type': 'Person', name: post.author },
            publisher: { '@type': 'Organization', name: 'ToolFinder' },
            mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
          }),
        }}
      />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-violet-600 prose-strong:text-gray-900">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Post Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="group p-4 rounded-xl border border-gray-200 hover:border-violet-200 hover:bg-violet-50/50 transition-colors">
              <span className="text-xs text-gray-400 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous</span>
              <p className="text-sm font-medium text-gray-900 mt-1 group-hover:text-violet-600 transition-colors line-clamp-1">{prevPost.title}</p>
            </Link>
          ) : <div />}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="group p-4 rounded-xl border border-gray-200 hover:border-violet-200 hover:bg-violet-50/50 transition-colors text-right">
              <span className="text-xs text-gray-400 flex items-center justify-end gap-1">Next <ArrowRight className="w-3 h-3" /></span>
              <p className="text-sm font-medium text-gray-900 mt-1 group-hover:text-violet-600 transition-colors line-clamp-1">{nextPost.title}</p>
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}

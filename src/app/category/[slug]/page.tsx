import { notFound } from 'next/navigation';
import ToolCard from '@/components/tools/ToolCard';
import CategoryIcon from '@/components/tools/CategoryIcon';
import { categories, tools } from '@/data';
import { JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `Best ${category.name} AI Tools ${new Date().getFullYear()} | ToolFinder`,
    description: `Discover the best ${category.name.toLowerCase()} AI tools. ${category.description}`,
    openGraph: {
      title: `Best ${category.name} AI Tools`,
      description: category.description,
      url: `${siteUrl}/category/${category.slug}`,
    },
    alternates: {
      canonical: `${siteUrl}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryTools = tools.filter((t) => t.category === slug);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          { name: category.name, url: `${siteUrl}/category/${category.slug}` },
        ]}
      />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-4">
            <CategoryIcon icon={category.icon} className="w-8 h-8" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-gray-500 mt-1">{categoryTools.length} tools available</p>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">{category.description}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {categoryTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">No tools found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

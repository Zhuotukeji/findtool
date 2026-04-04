import CategoryCard from '@/components/tools/CategoryCard';
import { categories } from '@/data';
import { JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export const metadata = {
  title: 'AI Tool Categories - Browse by Use Case | ToolFinder',
  description: 'Browse AI tools by category. Find the best writing, image generation, coding, video, audio, and productivity AI tools organized by use case.',
  openGraph: {
    title: 'AI Tool Categories - Browse by Use Case',
    description: 'Explore AI tools organized by use case with curated reviews and comparisons.',
    url: `${siteUrl}/category`,
  },
  alternates: {
    canonical: `${siteUrl}/category`,
  },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Categories', url: `${siteUrl}/category` },
        ]}
      />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">All Categories</h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Explore AI tools organized by use case. Each category contains curated tools with reviews and comparisons.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

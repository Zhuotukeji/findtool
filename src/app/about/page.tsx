import { Metadata } from 'next';
import { JsonLdBreadcrumb } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolfinder.vercel.app';

export const metadata: Metadata = {
  title: 'About Us - ToolFinder',
  description: 'Learn about ToolFinder — your trusted resource for discovering and comparing the best AI tools.',
  openGraph: {
    title: 'About ToolFinder',
    description: 'Your trusted resource for discovering and comparing the best AI tools.',
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'About', url: `${siteUrl}/about` },
        ]}
      />
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About AI Tool Finder
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted resource for discovering, comparing, and choosing the best AI tools for your needs.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The AI landscape is evolving at an unprecedented pace, with hundreds of new tools launching every month. 
          We believe everyone should have access to clear, unbiased information to make informed decisions about 
          which AI tools best fit their workflow and budget.
        </p>
        <p className="text-gray-700 leading-relaxed">
          AI Tool Finder was created to be the definitive directory for AI tools — helping professionals, 
          creators, developers, and businesses navigate the rapidly growing ecosystem of artificial intelligence solutions.
        </p>
      </section>

      {/* What We Do */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Curate',
              description: 'We carefully review and catalog AI tools across dozens of categories, from writing assistants to code generators.',
              icon: '🔍',
            },
            {
              title: 'Compare',
              description: 'Our side-by-side comparison features help you evaluate tools based on pricing, features, and user ratings.',
              icon: '⚖️',
            },
            {
              title: 'Guide',
              description: 'Through in-depth blog posts and guides, we help you understand how to get the most out of AI tools.',
              icon: '📚',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'AI Tools Listed' },
            { value: '50+', label: 'Categories' },
            { value: '10K+', label: 'Monthly Visitors' },
            { value: '100+', label: 'In-depth Reviews' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Have a question, suggestion, or want to list your AI tool? We&apos;d love to hear from you.
        </p>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:hello@aitoolfinder.com" className="text-blue-600 hover:underline">
                hello@aitoolfinder.com
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Twitter:</span>{' '}
              <a href="https://twitter.com/aitoolfinder" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                @aitoolfinder
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

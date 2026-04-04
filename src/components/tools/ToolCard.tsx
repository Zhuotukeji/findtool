import Link from 'next/link';
import { Star, ExternalLink, ArrowRight } from 'lucide-react';
import { Tool } from '@/types';

function PricingBadge({ model }: { model: string }) {
  const styles: Record<string, string> = {
    free: 'bg-green-50 text-green-700 border-green-200',
    freemium: 'bg-blue-50 text-blue-700 border-blue-200',
    paid: 'bg-orange-50 text-orange-700 border-orange-200',
    'open-source': 'bg-purple-50 text-purple-700 border-purple-200',
  };
  const labels: Record<string, string> = {
    free: 'Free',
    freemium: 'Freemium',
    paid: 'Paid',
    'open-source': 'Open Source',
  };

  return (
    <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full border ${styles[model] || styles.paid}`}>
      {labels[model] || model}
    </span>
  );
}

export default function ToolCard({ tool, featured = false }: { tool: Tool; featured?: boolean }) {
  return (
    <div className={`group relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-violet-100/50 hover:-translate-y-1 ${featured ? 'border-violet-200 shadow-md' : 'border-gray-100'}`}>
      {featured && (
        <div className="absolute -top-3 left-4">
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            ⭐ Featured
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl font-bold text-violet-600">
            {tool.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 truncate">{tool.name}</h3>
              <PricingBadge model={tool.pricing.model} />
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">{tool.tagline}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(tool.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
          <span className="text-sm text-gray-400">({tool.reviewCount.toLocaleString()})</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Pricing */}
        {tool.pricing.startingPrice && (
          <p className="text-sm text-gray-500 mb-4">
            Starting at <span className="font-medium text-gray-700">{tool.pricing.startingPrice}</span>
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
          <Link
            href={`/tool/${tool.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-violet-50 text-violet-700 rounded-lg text-sm font-medium hover:bg-violet-100 transition-colors"
          >
            Details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Visit
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

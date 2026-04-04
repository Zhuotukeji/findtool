import Link from 'next/link';
import { PenTool, Image, Code, Video, Music, Zap, MessageSquare, TrendingUp, ChevronRight, Palette, BarChart3, GraduationCap, Briefcase } from 'lucide-react';
import { Category } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PenTool, Image, Code, Video, Music, Zap, MessageSquare, TrendingUp, Palette, BarChart3, GraduationCap, Briefcase,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  'ai-writing': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
  'ai-image': { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200' },
  'ai-coding': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
  'ai-video': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  'ai-audio': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
  'ai-productivity': { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200' },
  'ai-chatbots': { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
  'ai-marketing': { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
  'ai-design': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600', border: 'border-fuchsia-200' },
  'ai-data': { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
  'ai-education': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  'ai-business': { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' },
};

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.icon] || Zap;
  const colors = colorMap[category.slug] || { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' };

  return (
    <Link
      href={`/category/${category.slug}`}
      className={`group block p-6 bg-white rounded-2xl border ${colors.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
    >
      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${colors.text}`} />
      </div>
      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{category.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-400">{category.toolCount} tools</span>
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}

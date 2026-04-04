'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';

const popularSearches = ['ChatGPT', 'Image Generator', 'Coding Assistant', 'Writing Tool', 'Video AI'];

export default function SearchBar({ large = false }: { large?: boolean }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }, [query, router]);

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className={`relative flex items-center ${large ? 'shadow-xl shadow-violet-100/50' : 'shadow-sm'}`}>
          <Search className={`absolute left-4 text-gray-400 ${large ? 'w-6 h-6' : 'w-5 h-5'}`} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI tools by name, category, or feature..."
            className={`w-full bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${large ? 'pl-14 pr-36 py-5 text-lg' : 'pl-12 pr-28 py-3 text-base'}`}
          />
          <button
            type="submit"
            className={`absolute right-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-xl font-medium hover:from-violet-600 hover:to-indigo-700 transition-all flex items-center gap-2 ${large ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}`}
          >
            Search
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {large && (
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <span className="text-sm text-gray-400">Popular:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => {
                setQuery(term);
                router.push(`/search?q=${encodeURIComponent(term)}`);
              }}
              className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-violet-50 hover:text-violet-600 hover:border-violet-200 transition-all"
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

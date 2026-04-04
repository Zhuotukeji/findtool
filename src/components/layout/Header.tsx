'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              ToolFinder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/category" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">
              Categories
            </Link>
            <Link href="/compare" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">
              Compare
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">
              About
            </Link>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 text-sm transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search tools...</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-violet-600"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <Link href="/category" className="px-3 py-2 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                Categories
              </Link>
              <Link href="/compare" className="px-3 py-2 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                Compare
              </Link>
              <Link href="/blog" className="px-3 py-2 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/about" className="px-3 py-2 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

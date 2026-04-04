export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  website: string;
  category: string;
  subcategory: string;
  pricing: PricingInfo;
  rating: number;
  reviewCount: number;
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  alternatives: string[];
  tags: string[];
  lastUpdated: string;
  featured: boolean;
}

export interface PricingInfo {
  model: 'free' | 'freemium' | 'paid' | 'open-source';
  startingPrice?: string;
  hasFreeTriaI: boolean;
  plans?: PricingPlan[];
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  toolCount: number;
  subcategories: string[];
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  emoji?: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  pricing: string;
  sortBy: 'relevance' | 'rating' | 'name' | 'newest';
}

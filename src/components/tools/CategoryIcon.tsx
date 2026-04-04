import { PenTool, Image, Code, Video, Music, Zap, MessageSquare, TrendingUp, Palette, BarChart3, GraduationCap, Briefcase } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PenTool, Image, Code, Video, Music, Zap, MessageSquare, TrendingUp, Palette, BarChart3, GraduationCap, Briefcase,
};

interface CategoryIconProps {
  icon: string;
  className?: string;
}

export default function CategoryIcon({ icon, className = 'w-6 h-6' }: CategoryIconProps) {
  const Icon = iconMap[icon] || Zap;
  return <Icon className={className} />;
}

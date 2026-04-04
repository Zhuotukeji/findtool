'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ToolLogoProps {
  name: string;
  logo?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { container: 'w-10 h-10', text: 'text-lg', img: 28 },
  md: { container: 'w-12 h-12', text: 'text-2xl', img: 36 },
  lg: { container: 'w-20 h-20', text: 'text-3xl', img: 56 },
};

export default function ToolLogo({ name, logo, size = 'md', className = '' }: ToolLogoProps) {
  const [imgError, setImgError] = useState(false);
  const s = sizeMap[size];

  // Show image if logo path exists and hasn't errored
  if (logo && !imgError) {
    return (
      <div className={`${s.container} bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${className}`}>
        <Image
          src={logo}
          alt={`${name} logo`}
          width={s.img}
          height={s.img}
          className="object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback: show first letter
  return (
    <div className={`${s.container} bg-gradient-to-br from-violet-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 ${s.text} font-bold text-violet-600 ${className}`}>
      {name.charAt(0)}
    </div>
  );
}

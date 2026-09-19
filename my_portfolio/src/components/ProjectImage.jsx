import React, { useState } from 'react';
import { Smartphone, Globe, Palette, Code, Sparkles } from 'lucide-react';

const getCategoryIcon = (category) => {
  switch (category?.toLowerCase()) {
    case 'flutter':
    case 'mobile':
      return <Smartphone size={36} className="text-blue-400" />;
    case 'web':
      return <Globe size={36} className="text-indigo-400" />;
    case 'design':
    case 'ui/ux':
      return <Palette size={36} className="text-pink-400" />;
    default:
      return <Code size={36} className="text-emerald-400" />;
  }
};

export const resolveAssetPath = (src) => {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `${cleanBase}${cleanSrc}`;
};

const ProjectImage = ({
  src,
  alt = "Project preview",
  category = "Flutter",
  className = "",
  aspectRatio = "aspect-video"
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const resolvedSrc = resolveAssetPath(src);

  if (hasError || !resolvedSrc) {
    return (
      <div
        className={`w-full h-full ${aspectRatio} bg-gradient-to-br from-[#1a3a5f] via-[#243f60] to-[#101b2b] flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden select-none ${className}`}
      >
        {/* Subtle decorative background circles */}
        <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-indigo-500/10 blur-2xl" />

        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-inner mb-3">
          {getCategoryIcon(category)}
        </div>
        <span className="text-xs uppercase tracking-wider font-bold text-blue-300 mb-1">
          {category} Showcase
        </span>
        <span className="text-sm font-semibold text-gray-200 line-clamp-1 max-w-[85%]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 animate-pulse" />
      )}
      <img
        src={resolvedSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default ProjectImage;

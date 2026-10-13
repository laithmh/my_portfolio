import React, { useState } from 'react';
import { Smartphone, Globe, Palette, Code } from 'lucide-react';

const getCategoryIcon = (category) => {
  const iconClass = "text-blue-400";
  switch (category?.toLowerCase()) {
    case 'flutter':
    case 'mobile':
      return <Smartphone size={36} className={iconClass} />;
    case 'web':
      return <Globe size={36} className={iconClass} />;
    case 'design':
    case 'ui/ux':
      return <Palette size={36} className={iconClass} />;
    default:
      return <Code size={36} className={iconClass} />;
  }
};

import { resolveAssetPath } from '../utils/assetHelper';

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
        className={`w-full h-full ${aspectRatio} bg-[#111622] flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden select-none ${className}`}
      >
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

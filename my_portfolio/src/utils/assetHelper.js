/**
 * Resolves static asset paths accurately for local development and GitHub Pages subpath deployment.
 * Handles:
 * - External URLs (http/https) and data/blob URIs
 * - Paths already prefixed with the repository base
 * - Absolute paths with leading slash (/projects/...)
 * - Relative paths (projects/...)
 *
 * @param {string} src - The image or asset path
 * @returns {string} - The fully resolved URL
 */
export const resolveAssetPath = (src) => {
  if (!src) return '';
  if (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith('blob:')
  ) {
    return src;
  }

  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  // If already prefixed with base URL, return directly to prevent duplication
  if (src.startsWith(cleanBase)) {
    return src;
  }
  const baseWithoutTrailingSlash = cleanBase.slice(0, -1);
  if (baseWithoutTrailingSlash && src.startsWith(baseWithoutTrailingSlash)) {
    return src;
  }

  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `${cleanBase}${cleanSrc}`;
};

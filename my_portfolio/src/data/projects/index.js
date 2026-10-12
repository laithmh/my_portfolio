/**
 * Dynamic Project Loader
 * Automatically imports all `*.js` files in this directory using Vite's `import.meta.glob`.
 * Any file starting with an underscore (e.g. `_template.example.js`) is automatically excluded.
 */

const projectModules = import.meta.glob('./*.js', { eager: true });

export const loadAllProjects = () => {
  const loadedProjects = [];

  for (const path in projectModules) {
    // Skip template files or index file itself
    if (path.includes('_') || path.endsWith('index.js')) {
      continue;
    }

    const module = projectModules[path];
    if (module?.default) {
      loadedProjects.push(module.default);
    }
  }

  // Sort: featured projects first, then by priority or order if provided
  return loadedProjects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (a.order || 99) - (b.order || 99);
  });
};

export const allProjects = loadAllProjects();

/**
 * Resolves a single project object for a given locale (en or ar)
 */
export const resolveProject = (project, lang = 'en') => {
  if (!project) return null;
  if (lang === 'ar' && project.ar) {
    const ar = project.ar;
    return {
      ...project,
      title: ar.title || project.title,
      tagline: ar.tagline || project.tagline,
      category: ar.category || project.category,
      description: ar.description || project.description,
      systemArchitecture: ar.systemArchitecture || project.systemArchitecture,
      repoNote: ar.repoNote || project.repoNote,
      downloadLabel: ar.downloadLabel || project.downloadLabel,
      liveUrlLabel: ar.liveUrlLabel || project.liveUrlLabel,
      firstProjectBadge: ar.firstProjectBadge || project.firstProjectBadge,
      caseStudy: {
        ...(project.caseStudy || {}),
        ...(ar.caseStudy || {}),
      },
    };
  }
  return project;
};

/**
 * Returns all active projects localized for the given language
 */
export const getProjects = (lang = 'en') => {
  return allProjects.map((p) => resolveProject(p, lang));
};

export default allProjects;

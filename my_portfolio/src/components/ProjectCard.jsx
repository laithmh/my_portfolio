import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, ArrowRight, Play, Image as ImageIcon } from 'lucide-react';
import ProjectImage from './ProjectImage';

const ProjectCard = ({ project, onSelect }) => {
  if (!project) return null;

  const mediaList = project.media || [];
  const hasVideo = mediaList.some((m) => m?.type === 'video') || Boolean(project.demoVideoUrl);
  const imageCount = mediaList.filter((m) => m?.type === 'image').length || 1;
  const techStack = project.tech || [];
  const category = project.category || 'Flutter';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect?.(project)}
      className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-2xl overflow-hidden shadow-neu-flat dark:shadow-neu-dark-flat flex flex-col justify-between transition-all cursor-pointer group"
    >
      <div>
        {/* Project Thumbnail with Fallback */}
        <div className="relative aspect-video overflow-hidden group-hover:opacity-95 transition-opacity">
          <ProjectImage
            src={project.image}
            alt={project.title || "Project Preview"}
            category={category}
            className="w-full h-full"
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 bg-[#1a3a5f]/90 dark:bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md z-10">
              <Sparkles size={12} />
              Featured
            </div>
          )}

          {/* Media Counter Pill */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/75 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-md z-10">
            {hasVideo && (
              <span className="flex items-center gap-1 text-emerald-400">
                <Play size={11} fill="currentColor" />
                Demo
              </span>
            )}
            {hasVideo && <span className="opacity-40">•</span>}
            <span className="flex items-center gap-1">
              <ImageIcon size={11} />
              {imageCount} {imageCount === 1 ? 'shot' : 'shots'}
            </span>
          </div>

          <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full z-10">
            {category}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-[#1a3a5f] dark:text-gray-100 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title || 'Untitled Project'}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
            {project.description || 'Click to view project details and architecture overview.'}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {techStack.slice(0, 4).map((t, idx) => (
              <span
                key={idx}
                className="bg-white/80 dark:bg-white/10 text-[#1a3a5f] dark:text-blue-300 text-xs px-2.5 py-1 rounded-lg font-medium shadow-sm"
              >
                {t}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 self-center px-1">
                +{techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-300/30 dark:border-gray-800">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3a5f] dark:text-blue-400 group-hover:translate-x-1 transition-transform">
          View Case Study <ArrowRight size={14} />
        </span>

        {/* External Quick Links */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title || 'Project'} GitHub repository`}
              className="p-2 rounded-xl bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-gray-200 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
            >
              <Github size={16} />
            </motion.a>
          )}

          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Visit ${project.title || 'Project'} live demo`}
              className="p-2 rounded-xl bg-[#e0e5ec] dark:bg-[#1c222d] text-blue-600 dark:text-blue-400 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

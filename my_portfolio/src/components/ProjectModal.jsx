import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Play,
  CheckCircle2,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Award,
  Download
} from 'lucide-react';
import ProjectImage from './ProjectImage';
import { DualPhoneMockup } from './DeviceFrames';

const isEmbedVideo = (url) => {
  if (!url) return false;
  return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com');
};

const getEmbedUrl = (url) => {
  if (!url) return '';
  if (url.includes('youtube.com/shorts/')) {
    const id = url.split('youtube.com/shorts/')[1]?.split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('youtube.com/watch?v=')) {
    return url.replace('watch?v=', 'embed/');
  }
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('vimeo.com/')) {
    const id = url.split('vimeo.com/')[1]?.split(/[?&]/)[0];
    return `https://player.vimeo.com/video/${id}`;
  }
  return url;
};

const ProjectModal = ({ project, onClose }) => {
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);

  // Prepare media list (fall back to main image if media array not present)
  const mediaList = (project?.media && project.media.length > 0)
    ? project.media
    : [{ type: 'image', url: project?.image, caption: project?.title }];

  const currentMedia = mediaList[activeMediaIdx] || mediaList[0];
  const techStack = project?.tech || [];
  const category = project?.category || 'Flutter';

  // Close on Escape key, gallery keyboard navigation & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveMediaIdx((prev) => (prev + 1) % mediaList.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveMediaIdx((prev) => (prev - 1 + mediaList.length) % mediaList.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, mediaList.length]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[96vh] sm:max-h-[92vh] flex flex-col bg-[#e0e5ec] dark:bg-[#1c222d] text-gray-800 dark:text-gray-100 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-auto border border-white/20 dark:border-gray-800"
        >
          {/* Top Bar Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-[#e0e5ec]/95 dark:bg-[#1c222d]/95 backdrop-blur-md border-b border-gray-300/40 dark:border-gray-800 gap-2">
            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap min-w-0">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold bg-[#1a3a5f] text-white dark:bg-blue-600 flex-shrink-0">
                {category}
              </span>
              {project.firstProject && (
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-sm flex items-center gap-1 flex-shrink-0">
                  <Sparkles size={12} />
                  First Project
                </span>
              )}
              <h2 className="text-base sm:text-2xl font-bold text-[#1a3a5f] dark:text-gray-100 truncate max-w-[130px] sm:max-w-md">
                {project.title || 'Project Details'}
              </h2>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-[#e0e5ec] dark:bg-[#1c222d] text-gray-600 dark:text-gray-300 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all flex-shrink-0"
            >
              <X size={20} />
            </motion.button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
            {/* Tagline */}
            {project.tagline && (
              <p className="text-lg font-medium text-[#5d7d9e] dark:text-blue-300">
                {project.tagline}
              </p>
            )}

            {/* Media Showcase Player / Gallery */}
            <div className="bg-black/10 dark:bg-black/40 rounded-2xl overflow-hidden p-2 sm:p-3 shadow-inner">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center">
                {currentMedia?.type === 'video' ? (
                  isEmbedVideo(currentMedia.url) ? (
                    <iframe
                      src={getEmbedUrl(currentMedia.url)}
                      title={currentMedia.caption || 'Project video demo'}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={currentMedia.url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  )
                ) : currentMedia?.frame === 'dual-phone' ? (
                  <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 bg-gradient-to-br from-slate-950 via-[#10141d] to-slate-900 relative overflow-hidden">
                    <div className="scale-[0.72] sm:scale-95 md:scale-100 origin-center w-full">
                      <DualPhoneMockup
                        darkContent={
                          <ProjectImage
                            src={project.image}
                            alt={`${project.title} Dark Mode`}
                            category={category}
                            className="w-full h-full object-cover"
                          />
                        }
                        lightContent={
                          <ProjectImage
                            src={project.secondaryImage || project.image}
                            alt={`${project.title} Light Mode`}
                            category={category}
                            className="w-full h-full object-cover"
                          />
                        }
                      />
                    </div>
                  </div>
                ) : currentMedia?.frame === 'phone' ? (
                  <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-slate-950 via-[#10141d] to-slate-900 relative">
                    <div className="h-[92%] max-h-[420px] aspect-[9/19.5] relative rounded-[28px] p-1.5 bg-[#1a202c] shadow-2xl border-2 border-gray-600/70">
                      {/* Dynamic island accent */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-full z-20" />
                      <div className="w-full h-full rounded-[22px] overflow-hidden bg-black flex items-center justify-center">
                        <ProjectImage
                          src={currentMedia?.url}
                          alt={currentMedia?.caption || project.title}
                          category={category}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <ProjectImage
                    src={currentMedia?.url}
                    alt={currentMedia?.caption || project.title}
                    category={category}
                    className="w-full h-full object-contain"
                  />
                )}

                {/* Left / Right Nav Arrows for Gallery */}
                {mediaList.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveMediaIdx((prev) => (prev - 1 + mediaList.length) % mediaList.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setActiveMediaIdx((prev) => (prev + 1) % mediaList.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Counter Badge */}
                {mediaList.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold z-10">
                    {activeMediaIdx + 1} / {mediaList.length}
                  </div>
                )}
              </div>

              {/* Caption */}
              {currentMedia?.caption && (
                <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                  {currentMedia.caption}
                </p>
              )}

              {/* Thumbnail Strip */}
              {mediaList.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1 justify-center">
                  {mediaList.map((m, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMediaIdx(idx)}
                      aria-label={`View media ${idx + 1}`}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeMediaIdx === idx
                          ? 'border-blue-500 scale-105 shadow-md'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      {m.type === 'video' ? (
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">
                          <Play size={16} />
                        </div>
                      ) : (
                        <ProjectImage
                          src={m.url}
                          alt=""
                          category={category}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Action Bar for Recruiter */}
            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/40 dark:bg-white/5 shadow-sm">
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1a3a5f] dark:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:opacity-90 transition-opacity text-center"
                  >
                    <Github size={16} />
                    View Showcase Repo
                  </a>
                )}

                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:bg-emerald-700 transition-colors text-center"
                  >
                    <Download size={16} />
                    {project.downloadLabel || 'Download APK'}
                  </a>
                )}

                {project.liveUrl && !project.downloadUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:bg-emerald-700 transition-colors text-center"
                  >
                    <ExternalLink size={16} />
                    {project.liveUrlLabel || 'Open Live Demo'}
                  </a>
                )}

                {project.demoVideoUrl && (
                  <a
                    href={project.demoVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:bg-indigo-700 transition-colors text-center"
                  >
                    <Play size={16} />
                    Watch Video Walkthrough
                  </a>
                )}
              </div>

              {/* Showcase Repo Notice */}
              {project.repoNote && (
                <div className="w-full p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2">
                  <ShieldCheck size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Showcase Notice:</strong> {project.repoNote}</span>
                </div>
              )}
            </div>

            {/* Hero Statement */}
            {project.caseStudy?.heroStatement && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-amber-500/10 border-l-4 border-amber-500 dark:border-amber-400 text-[#1a3a5f] dark:text-gray-100 font-medium text-sm sm:text-base leading-relaxed italic shadow-sm">
                "{project.caseStudy.heroStatement}"
              </div>
            )}

            {/* In-Depth Case Study: Overview */}
            <div>
              <h3 className="text-lg font-bold text-[#1a3a5f] dark:text-gray-100 mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-blue-500" />
                Project Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.caseStudy?.overview || project.description || 'No detailed overview provided yet.'}
              </p>
            </div>

            {/* Key Features */}
            {project.caseStudy?.keyFeatures && project.caseStudy.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#1a3a5f] dark:text-gray-100 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Key Features & Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.caseStudy.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/50 dark:bg-white/5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture & Engineering Decisions */}
            {project.caseStudy?.architecture && Object.keys(project.caseStudy.architecture).length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#1a3a5f] dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Layers size={18} className="text-indigo-500" />
                  Architecture & Engineering
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {Object.entries(project.caseStudy.architecture).map(([key, val]) => (
                    <div
                      key={key}
                      className="p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-gray-800"
                    >
                      <span className="text-xs uppercase font-bold text-[#5d7d9e] dark:text-gray-400 block mb-1">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-sm font-semibold text-[#1a3a5f] dark:text-gray-100">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.caseStudy?.challengesAndSolutions && project.caseStudy.challengesAndSolutions.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#1a3a5f] dark:text-gray-100 mb-3 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-amber-500" />
                  Challenges & Technical Solutions
                </h3>
                <div className="space-y-3">
                  {project.caseStudy.challengesAndSolutions.map((cs, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/50 dark:bg-white/5 border-l-4 border-amber-500 text-sm space-y-1.5"
                    >
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        <span className="text-amber-600 dark:text-amber-400 font-bold">Challenge:</span> {cs.challenge}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Solution:</span> {cs.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results & Production Metrics */}
            {project.caseStudy?.metrics && project.caseStudy.metrics.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#1a3a5f] dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Award size={18} className="text-blue-500" />
                  Results & Production Engineering Metrics
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.caseStudy.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-sm text-gray-800 dark:text-blue-200 font-medium"
                    >
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Tech Stack Pills */}
            {techStack.length > 0 && (
              <div>
                <h3 className="text-xs uppercase font-bold text-[#5d7d9e] dark:text-gray-400 mb-2.5">
                  Technologies & Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-gray-800 text-[#1a3a5f] dark:text-blue-300 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;

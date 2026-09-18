import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Github, ExternalLink, Play, Layers, Server, Smartphone, Database, Plus } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ProjectImage from './ProjectImage';
import ProjectBuilderModal from './ProjectBuilderModal';
import { PhoneFrame, LaptopFrame, DualDeviceMockup } from './DeviceFrames';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  // Sync modal state with URL hash (e.g. #project-ecommerce-platform or #admin/#builder) and secret shortcut
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#builder' || hash === '#admin') {
        setIsBuilderOpen(true);
        setSelectedProject(null);
      } else if (hash.startsWith('#project-')) {
        setIsBuilderOpen(false);
        const projectId = hash.replace('#project-', '');
        const found = projects.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
        }
      } else if (!hash) {
        setSelectedProject(null);
        setIsBuilderOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      // Secret Admin shortcut: Ctrl+Shift+A or Cmd+Shift+A
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsBuilderOpen((prev) => {
          const next = !prev;
          if (next) {
            window.history.pushState(null, '', '#admin');
          } else {
            window.history.pushState(null, '', window.location.pathname + window.location.search);
          }
          return next;
        });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#project-${project.id}`);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleCloseBuilder = () => {
    setIsBuilderOpen(false);
    if (window.location.hash === '#builder' || window.location.hash === '#admin') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Flagship project spotlight
  const flagshipProject = projects.find((p) => p.flagship) || projects[0];

  // Dynamically compute category tabs from active projects list
  const dynamicCategories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category?.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 mb-3">
            <Sparkles size={13} />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a3a5f] dark:text-blue-400 mb-4">
            Production Systems & Projects
          </h2>
          <p className="text-[#5d7d9e] dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            End-to-end architectures demonstrating cross-platform mobile interfaces, asynchronous APIs, and cloud databases.
          </p>
        </motion.div>

        {/* FLAGSHIP FULL-STACK SPOTLIGHT */}
        {flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 p-6 sm:p-10 rounded-3xl bg-[#e0e5ec] dark:bg-[#1c222d] shadow-neu-flat dark:shadow-neu-dark-flat border border-white/40 dark:border-gray-800"
          >
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Column: Full-Stack Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1a3a5f] dark:bg-blue-600 text-white shadow-sm">
                    Flagship Full-Stack System
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                    Production Architecture
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1a3a5f] dark:text-gray-100 tracking-tight">
                  {flagshipProject.title}
                </h3>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* System Architecture Flow Diagram */}
                {flagshipProject.systemArchitecture && (
                  <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-gray-800">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#5d7d9e] dark:text-gray-400 block mb-2">
                      End-to-End System Pipeline
                    </span>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1a3a5f] dark:text-blue-300">
                      <span className="p-1 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                        <Smartphone size={14} />
                      </span>
                      <span>{flagshipProject.systemArchitecture}</span>
                    </div>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {flagshipProject.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-gray-800 text-[#1a3a5f] dark:text-blue-300 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelectProject(flagshipProject)}
                    className="inline-flex items-center gap-2 bg-[#1a3a5f] dark:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:opacity-95 transition-opacity"
                  >
                    View System Case Study & Architecture
                    <ArrowRight size={16} />
                  </motion.button>

                  {flagshipProject.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-gray-200 px-5 py-3 rounded-xl text-sm font-bold shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
                    >
                      <Github size={16} />
                      Showcase Repo
                    </motion.a>
                  )}
                </div>

                {/* Showcase Repo Note (Original Private) */}
                {flagshipProject.repoNote && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic flex items-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{flagshipProject.repoNote}</span>
                  </p>
                )}
              </div>

              {/* Right Column: Clean Project Showcase (Mockup opt-in) */}
              <div className="lg:col-span-6 flex justify-center w-full">
                {flagshipProject.mockup === 'dual' ? (
                  <DualDeviceMockup
                    webContent={
                      <ProjectImage
                        src={flagshipProject.image}
                        alt={`${flagshipProject.title} Web View`}
                        category={flagshipProject.category}
                        className="w-full h-full object-cover"
                      />
                    }
                    mobileContent={
                      <ProjectImage
                        src={flagshipProject.secondaryImage || flagshipProject.image}
                        alt={`${flagshipProject.title} Mobile View`}
                        category={flagshipProject.category}
                        className="w-full h-full object-cover"
                      />
                    }
                  />
                ) : flagshipProject.mockup === 'laptop' ? (
                  <LaptopFrame>
                    <ProjectImage
                      src={flagshipProject.image}
                      alt={flagshipProject.title}
                      category={flagshipProject.category}
                      className="w-full h-full object-cover"
                    />
                  </LaptopFrame>
                ) : flagshipProject.mockup === 'phone' ? (
                  <PhoneFrame>
                    <ProjectImage
                      src={flagshipProject.image}
                      alt={flagshipProject.title}
                      category={flagshipProject.category}
                      className="w-full h-full object-cover"
                    />
                  </PhoneFrame>
                ) : (
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-300/40 dark:border-gray-700/80 bg-[#1e2430] dark:bg-[#0e131b] aspect-video">
                    <ProjectImage
                      src={flagshipProject.image}
                      alt={flagshipProject.title}
                      category={flagshipProject.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* PROJECTS LIST OR FRESH START PLACEHOLDER */}
        {projects.length > 0 ? (
          <>
            {/* CATEGORY FILTER */}
            <div className="mb-10 text-center">
              <h3 className="text-xl font-bold text-[#1a3a5f] dark:text-gray-200 mb-6">
                Explore All Engineering Projects
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {dynamicCategories.map((category) => {
                  const isSelected = selectedCategory === category;
                  return (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#1a3a5f] text-white dark:bg-blue-600 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm'
                          : 'bg-[#e0e5ec] dark:bg-[#1c222d] text-[#5d7d9e] dark:text-gray-300 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed'
                      }`}
                    >
                      {category}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Animated Project Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={handleSelectProject}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Filter Empty state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12 text-[#5d7d9e] dark:text-gray-400">
                <p>No projects found in this category.</p>
              </div>
            )}
          </>
        ) : (
          /* Empty / Fresh Start State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-6 max-w-xl mx-auto rounded-3xl bg-[#e0e5ec] dark:bg-[#1c222d] shadow-neu-flat dark:shadow-neu-dark-flat border border-white/40 dark:border-gray-800"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-inner">
              <Sparkles size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1a3a5f] dark:text-gray-100 mb-3">
              Case Studies & Demos Incoming
            </h3>
            <p className="text-[#5d7d9e] dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Comprehensive architectural breakdowns, video walkthroughs, and live demos for my Next.js SaaS, Flutter WebAssembly platform, and offline networking utility are currently being prepared. In the meantime, explore my code on GitHub.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/laithmh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a3a5f] dark:bg-blue-600 text-white text-sm font-semibold shadow-md hover:opacity-95 transition-opacity"
              >
                <Github size={16} />
                Visit GitHub Profile
              </a>
              <button
                onClick={() => setIsBuilderOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-blue-300 text-sm font-semibold shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
              >
                <Plus size={16} />
                Project Studio
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Interactive Recruiter Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}

      {/* Visual Project Generator Studio Modal */}
      <ProjectBuilderModal
        isOpen={isBuilderOpen}
        onClose={handleCloseBuilder}
      />
    </section>
  );
};

export default Projects;

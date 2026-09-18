import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, FolderGit2, Send, FileDown, Github, Terminal, Layers } from 'lucide-react';
import RiveAnimation from './RiveAnimation';
import { personalInfo } from '../data/portfolioData';

const floatAnimation = {
  animate: {
    y: [-6, 6],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2.4,
      ease: "easeInOut"
    }
  }
};

const Hero = ({ scrollToSection }) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const resumePath = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}${personalInfo.resumeFile}`;

  // Scroll dynamics: Moon subtly floats, rotates and reacts as user scrolls down
  const { scrollY } = useScroll();
  const moonY = useTransform(scrollY, [0, 500], [0, 50]);
  const moonScale = useTransform(scrollY, [0, 250, 500], [1, 1.08, 0.95]);
  const moonRotate = useTransform(scrollY, [0, 500], [0, 12]);

  const coreStackPills = [
    "Next.js",
    "React 19",
    "Flutter",
    "Flutter WASM",
    "Dart",
    "Supabase",
    "PostgreSQL",
    "Tailwind CSS"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Rive Vector Avatar with Neumorphic Container, Ambient Aura & Scroll Dynamics */}
          <motion.div
            style={{ y: moonY, scale: moonScale, rotate: moonRotate }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="relative mb-8 mt-2 flex justify-center p-3 cursor-pointer select-none group"
          >
            {/* Ambient Cosmic Glow behind Moon */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-2xl opacity-70 dark:opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-[#e0e5ec] dark:bg-[#1c222d] w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-neu-flat dark:shadow-neu-dark-flat overflow-hidden flex items-center justify-center transition-colors duration-300 border-2 border-white/70 dark:border-gray-800/80">
              <RiveAnimation />
            </div>
          </motion.div>

          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-blue-300 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm mb-5 border border-white/40 dark:border-gray-800"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* Name Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-[#1a3a5f] via-[#2c5282] to-[#5d7d9e] dark:from-blue-200 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>

          {/* Full-Stack Engineer Title & Core Focus */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 mb-4"
          >
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#1a3a5f] dark:text-blue-300">
              <Terminal size={22} className="text-blue-500" />
              <span>{personalInfo.role}</span>
            </div>
            <span className="text-gray-400 font-normal hidden sm:inline">•</span>
            <span className="text-sm sm:text-lg font-medium text-[#5d7d9e] dark:text-gray-400 text-center">
              {personalInfo.coreFocus}
            </span>
          </motion.div>

          {/* Tagline / Value Proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Recruiter Quick-Scan Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-2 max-w-2xl mb-10"
          >
            <span className="text-xs uppercase tracking-wider font-bold text-[#5d7d9e] dark:text-gray-400 mr-1 flex items-center gap-1">
              <Layers size={13} /> Stack:
            </span>
            {coreStackPills.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/70 dark:bg-white/10 text-[#1a3a5f] dark:text-gray-200 shadow-sm border border-gray-200/50 dark:border-gray-800"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 bg-[#1a3a5f] dark:bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:opacity-95 transition-all"
            >
              <FolderGit2 size={18} />
              Explore Systems & Apps
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={resumePath}
              download="Laith_Mohammed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-blue-300 px-6 py-3 rounded-xl font-semibold shadow-neu-flat dark:shadow-neu-dark-flat hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
            >
              <FileDown size={18} />
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-gray-200 px-6 py-3 rounded-xl font-semibold shadow-neu-flat dark:shadow-neu-dark-flat hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
            >
              <Send size={18} />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Bouncing Scroll Down Arrow */}
          <motion.div
            {...floatAnimation}
            className="mt-14 cursor-pointer text-[#5d7d9e] dark:text-gray-400 hover:text-[#1a3a5f] dark:hover:text-blue-400 transition-colors p-2"
            onClick={() => scrollToSection('projects')}
            aria-label="Scroll to Projects section"
          >
            <ChevronDown size={30} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

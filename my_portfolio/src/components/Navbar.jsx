import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ activeSection, scrollToSection, isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const baseUrl = import.meta.env.BASE_URL || '/';
  const resumePath = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}${personalInfo.resumeFile}`;

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 z-50 px-4 bg-[#e0e5ec]/95 dark:bg-[#1c222d]/95 backdrop-blur-md border-b border-gray-300/30 dark:border-gray-800/40 transition-colors duration-300 flex items-center">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold tracking-tight text-[#1a3a5f] dark:text-[#60a5fa] transition-colors"
          >
            LM<span className="text-blue-500">.</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium relative py-1 px-2 transition-all ${
                    isActive
                      ? 'text-[#1a3a5f] dark:text-blue-400 font-semibold'
                      : 'text-[#5d7d9e] dark:text-gray-400 hover:text-[#1a3a5f] dark:hover:text-gray-200'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a3a5f] dark:bg-blue-400 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Actions: Theme Toggle + Resume + Mobile Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-yellow-400 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Resume Download Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumePath}
              download="Laith_Mohammed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
            >
              <FileDown size={16} />
              <span className="hidden sm:inline">Resume</span>
            </motion.a>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
                className="p-2.5 rounded-xl bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-gray-200 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Decoupled Floating Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop: Clicking closes the menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Dropdown Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-50 md:hidden bg-[#e0e5ec] dark:bg-[#1c222d] border-b border-gray-300 dark:border-gray-800 shadow-2xl px-5 py-4"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      activeSection === item.id
                        ? 'bg-[#1a3a5f] text-white dark:bg-blue-600 shadow-sm'
                        : 'text-[#1a3a5f] dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="pt-2 border-t border-gray-300/50 dark:border-gray-800">
                  <a
                    href={resumePath}
                    download="Laith_Mohammed_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-[#1a3a5f] text-white dark:bg-blue-600 shadow-md"
                  >
                    <FileDown size={18} />
                    Download CV / Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

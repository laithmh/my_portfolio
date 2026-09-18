import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = ({ scrollToSection }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleSecretClick = () => {
    const next = clickCount + 1;
    if (next >= 3) {
      setClickCount(0);
      window.location.hash = '#admin';
    } else {
      setClickCount(next);
      setTimeout(() => setClickCount(0), 1500);
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-gray-300/40 dark:border-gray-800 text-center text-[#5d7d9e] dark:text-gray-400">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm select-none">
          <span
            onClick={handleSecretClick}
            title=""
            className="cursor-default"
          >
            ©
          </span>{' '}
          {new Date().getFullYear()}{' '}
          <span className="font-semibold text-[#1a3a5f] dark:text-gray-200">{personalInfo.name}</span>. All rights reserved.
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Crafted with React 19, Tailwind CSS & Framer Motion
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          aria-label="Scroll to top"
          className="p-2.5 rounded-xl bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-gray-200 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

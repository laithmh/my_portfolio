import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Listen to OS system theme changes if no manual preference is saved
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleOSChange = (e) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleOSChange);
    return () => mediaQuery.removeEventListener('change', handleOSChange);
  }, []);

  // Synchronize dark class on <html> root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  // Track active section on scroll with requestAnimationFrame and bottom-of-page check
  useEffect(() => {
    const sections = ['home', 'projects', 'skills', 'experience', 'about', 'contact'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Bottom of page check to accurately activate contact section
          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          const scrollPosition = window.scrollY + 100;
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const element = document.getElementById(section);
            if (element && scrollPosition >= element.offsetTop - 50) {
              setActiveSection(section);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bulletproof smooth scroll handler using native scrollIntoView and scroll-mt offsets
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#e0e5ec] dark:bg-[#1c222d] font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300 antialiased overflow-x-clip w-full relative">
      {/* Sticky Fixed Navigation */}
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main>
        {/* Hero Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* 1. Projects Showcase (Proof First) */}
        <Projects />

        {/* 2. Technical Skills Arsenal */}
        <Skills />

        {/* 3. Career & Experience Milestones */}
        <Experience />

        {/* 4. Engineering Background & Principles */}
        <About />

        {/* 5. Contact & Outreach */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;

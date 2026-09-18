import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Smartphone, Server, CheckCircle2, ShieldCheck, Zap, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const highlights = [
    {
      title: "End-to-End Ownership",
      subtitle: "Full-lifecycle delivery from relational schema to client UI",
      icon: <Server size={22} className="text-blue-500" />
    },
    {
      title: "WebAssembly & Canvas",
      subtitle: "Flutter compiled to WASM for native-speed browser tools",
      icon: <Cpu size={22} className="text-emerald-500" />
    },
    {
      title: "Secure Multi-Tenancy",
      subtitle: "PostgreSQL architecture with strict Row-Level Security",
      icon: <ShieldCheck size={22} className="text-purple-500" />
    },
  ];

  const pillars = personalInfo.engineeringPillars || personalInfo.engineeringPrinciples || [];

  return (
    <section id="about" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a5f] dark:text-blue-400 mb-4">
            Engineering Background
          </h2>
          <p className="text-[#5d7d9e] dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Self-directed product engineer building complete, full-lifecycle software systems.
          </p>
        </motion.div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-2xl p-6 text-center shadow-neu-flat dark:shadow-neu-dark-flat flex flex-col items-center justify-center transition-colors border border-white/40 dark:border-gray-800"
            >
              <div className="mb-3 p-3 rounded-xl bg-white/50 dark:bg-white/5 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#1a3a5f] dark:text-gray-100 mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-snug">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two-Column Detail Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
          {/* Journey & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-2xl shadow-neu-flat dark:shadow-neu-dark-flat p-8 flex flex-col justify-between transition-colors border border-white/40 dark:border-gray-800"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#1a3a5f] dark:text-gray-100 flex items-center gap-2">
                <Smartphone className="text-blue-500" size={24} />
                Full-Stack Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutBio}
              </p>
            </div>
          </motion.div>

          {/* How I Engineer Systems */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-2xl shadow-neu-flat dark:shadow-neu-dark-flat p-8 flex flex-col justify-between transition-colors border border-white/40 dark:border-gray-800"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#1a3a5f] dark:text-gray-100 flex items-center gap-2">
                <Zap className="text-amber-500" size={24} />
                Engineering Principles
              </h3>
              <div className="space-y-4">
                {pillars.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-bold text-[#1a3a5f] dark:text-blue-300 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

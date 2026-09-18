import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a5f] dark:text-blue-400 mb-4">
            Experience & Journey
          </h2>
          <p className="text-[#5d7d9e] dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Key milestones engineering full-stack platforms, WebAssembly browser tools, and cross-platform systems.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-[#a3b1c6]/50 dark:border-gray-700 ml-2 sm:ml-8 space-y-8 sm:space-y-10">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-4 sm:pl-8"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#e0e5ec] dark:border-[#1c222d] shadow-sm" />

              <div className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-2xl p-4 sm:p-7 shadow-neu-flat dark:shadow-neu-dark-flat transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    <Calendar size={13} />
                    {item.period}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {item.company}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1a3a5f] dark:text-gray-100 mb-2">
                  {item.role}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

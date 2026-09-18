import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Palette, Layers } from 'lucide-react';
import { skillTiers } from '../data/portfolioData';

const getTierIcon = (tier) => {
  const lower = tier.toLowerCase();
  if (lower.includes('web') || lower.includes('saas')) {
    return <Globe size={22} className="text-blue-500" />;
  }
  if (lower.includes('cross') || lower.includes('mobile') || lower.includes('canvas')) {
    return <Smartphone size={22} className="text-emerald-500" />;
  }
  if (lower.includes('backend') || lower.includes('database')) {
    return <Database size={22} className="text-purple-500" />;
  }
  return <Palette size={22} className="text-amber-500" />;
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a5f] dark:text-blue-400 mb-4">
            Full-Stack Arsenal
          </h2>
          <p className="text-[#5d7d9e] dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Organized across the stack — from native client rendering to database scaling and API design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillTiers.map((tierGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-2xl p-5 sm:p-7 shadow-neu-flat dark:shadow-neu-dark-flat transition-colors border border-white/40 dark:border-gray-800"
            >
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 mb-5 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/40 dark:bg-white/5 shadow-sm">
                    {getTierIcon(tierGroup.tier)}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a5f] dark:text-gray-100">
                    {tierGroup.tier}
                  </h3>
                </div>

                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                  {tierGroup.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {tierGroup.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ y: -2 }}
                    className="flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-white/70 dark:bg-white/5 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm text-sm font-medium text-[#1a3a5f] dark:text-gray-200 transition-all hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

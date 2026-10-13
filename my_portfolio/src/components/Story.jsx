import React from 'react';
import { motion } from 'framer-motion';
import { Music, Video, Compass, RefreshCw, Store, Film, Lightbulb, ArrowUpRight } from 'lucide-react';
import { getStoryMilestones } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const getMilestoneIcon = (iconName) => {
  const iconClass = "text-[#1a3a5f] dark:text-blue-400";
  switch (iconName) {
    case 'music':
      return <Music size={22} className={iconClass} />;
    case 'video':
      return <Video size={22} className={iconClass} />;
    case 'compass':
      return <Compass size={22} className={iconClass} />;
    case 'refresh':
      return <RefreshCw size={22} className={iconClass} />;
    case 'store':
      return <Store size={22} className={iconClass} />;
    case 'film':
      return <Film size={22} className={iconClass} />;
    default:
      return <Lightbulb size={22} className={iconClass} />;
  }
};

const Story = () => {
  const { language, isRTL, t } = useLanguage();
  const milestones = getStoryMilestones(language);

  return (
    <section id="story" className="py-24 px-4 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-4 border border-blue-500/20">
            <Compass size={14} />
            <span>{t('story.milestoneBadge', 'Milestone')} &amp; Thinking Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a3a5f] dark:text-blue-400 mb-4">
            {t('story.sectionTitle', 'The Journey & Thinking Process')}
          </h2>
          <p className="text-[#5d7d9e] dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t('story.sectionSubtitle', 'How solving personal friction, learning through complete software systems, and strategic pivots built my engineering & founder mindset.')}
          </p>
        </motion.div>

        {/* Story Journey Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-2xl p-6 sm:p-8 shadow-neu-flat dark:shadow-neu-dark-flat flex flex-col justify-between transition-all hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed border border-white/50 dark:border-gray-800/80 group"
            >
              <div>
                {/* Milestone Top Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/60 dark:bg-white/5 shadow-inner">
                      {getMilestoneIcon(item.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                      <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {item.tag}
                      </h4>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-gray-300">
                    Step {idx + 1}
                  </span>
                </div>

                {/* Milestone Title & Problem Tagline */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1a3a5f] dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <div className="mb-4 p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/40 dark:border-blue-800/40 text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-200 flex items-start gap-2">
                  <Lightbulb size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{item.tagline}</span>
                </div>

                {/* Narrative Paragraph */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.content}
                </p>
              </div>

              {/* Bottom footer badge */}
              <div className="mt-6 pt-4 border-t border-gray-300/40 dark:border-gray-800/70 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
                <span>{t('story.viewThinkingTag', 'How I Solved It')}</span>
                <span className="text-blue-500 font-bold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn by Building &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;

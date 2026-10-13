import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Video, Youtube, Instagram, ExternalLink, Film, X } from 'lucide-react';
import { getCreativeVideos } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const getEmbedUrl = (url) => {
  if (!url) return null;
  // YouTube Shorts: https://youtube.com/shorts/7IVOmdp70ik
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1`;
  }
  // Standard YouTube: https://www.youtube.com/watch?v=4DDIz_h1LQc
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;
  }
  return null;
};

const CreativeMedia = () => {
  const { language, isRTL, t } = useLanguage();
  const [videos, setVideos] = useState(() => getCreativeVideos());
  const [activeVideo, setActiveVideo] = useState(null);

  // Sync when videos are updated in Admin modal
  useEffect(() => {
    const handleUpdate = () => {
      setVideos(getCreativeVideos());
    };
    window.addEventListener('portfolio_videos_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('portfolio_videos_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const openVideoModal = (video) => {
    const embed = getEmbedUrl(video.url);
    if (embed) {
      setActiveVideo({ ...video, embedUrl: embed });
    } else {
      window.open(video.url, '_blank', 'noopener,noreferrer');
    }
  };

  // If there are no videos yet, completely remove the section from DOM
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section id="videos" className="py-24 px-4 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-4 border border-blue-500/20">
            <Film size={14} />
            <span>DaVinci Resolve • Motion Design • Mobile Filming</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a3a5f] dark:text-blue-400 mb-4">
            {t('videos.sectionTitle', 'Creative Media & Video Production')}
          </h2>
          <p className="text-[#5d7d9e] dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t('videos.sectionSubtitle', 'From cinematic phone filming to DaVinci Resolve motion design — visual storytelling to market and communicate digital products.')}
          </p>
        </motion.div>

        {/* Video Cards Grid (empty when no videos yet) */}
        {videos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, idx) => {
            const isYouTube = vid.platform === 'youtube' || vid.url?.includes('youtu');
            const isInstagram = vid.platform === 'instagram' || vid.url?.includes('instagram');
            const title = isRTL && vid.titleAr ? vid.titleAr : vid.title;
            const caption = isRTL && vid.captionAr ? vid.captionAr : vid.caption;
            const category = isRTL && vid.categoryAr ? vid.categoryAr : vid.category;

            return (
              <motion.div
                key={vid.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-2xl p-5 shadow-neu-flat dark:shadow-neu-dark-flat flex flex-col justify-between transition-all hover:-translate-y-1.5 border border-white/50 dark:border-gray-800/80 group"
              >
                <div>
                  {/* Top Bar: Platform Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/10 text-gray-700 dark:text-gray-300 shadow-sm">
                      {isYouTube && <Youtube size={14} className="text-red-500" />}
                      {isInstagram && <Instagram size={14} className="text-pink-500" />}
                      {!isYouTube && !isInstagram && <Video size={14} className="text-blue-500" />}
                      <span className="capitalize">{vid.platform || 'Video'}</span>
                    </span>

                    {category && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                        {category}
                      </span>
                    )}
                  </div>

                  {/* Thumbnail / Video Banner with Play Button */}
                  <div
                    onClick={() => openVideoModal(vid)}
                    className="relative aspect-[16/10] rounded-xl bg-gradient-to-tr from-gray-900 via-slate-800 to-gray-900 overflow-hidden mb-4 flex items-center justify-center cursor-pointer shadow-inner group/thumb"
                  >
                    <div className="absolute inset-0 bg-blue-600/10 group-hover/thumb:bg-blue-600/20 transition-colors" />
                    
                    {/* Pulsing Play Button */}
                    <div className="relative w-12 h-12 rounded-full bg-white/90 dark:bg-blue-600 text-gray-900 dark:text-white flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform">
                      <Play size={20} fill="currentColor" className="ml-0.5" />
                    </div>

                    <span className="absolute bottom-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded bg-black/75 text-white backdrop-blur-sm">
                      Preview
                    </span>
                  </div>

                  {/* Title & Caption */}
                  <h3 className="text-base font-bold text-[#1a3a5f] dark:text-gray-100 mb-1.5 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
                    {caption}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-gray-300/30 dark:border-gray-800 flex items-center justify-between">
                  <button
                    onClick={() => openVideoModal(vid)}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Play size={12} fill="currentColor" />
                    <span>{t('videos.watchVideo', 'Watch Demo')}</span>
                  </button>

                  <a
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
                    title={isYouTube ? t('videos.watchOnYoutube', 'Watch on YouTube') : t('videos.watchOnInstagram', 'Watch on Instagram')}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      </div>

      {/* Embedded Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#1c222d] rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161a23] border-b border-gray-800">
                <span className="text-sm font-bold text-gray-100 truncate pr-4">
                  {isRTL && activeVideo.titleAr ? activeVideo.titleAr : activeVideo.title}
                </span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Responsive Iframe */}
              <div className="relative aspect-video w-full bg-black">
                {activeVideo.embedUrl ? (
                  <iframe
                    src={activeVideo.embedUrl}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <a
                      href={activeVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      <span>Open Video Link</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CreativeMedia;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink, Github, Instagram, Facebook, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const getSocialIcon = (platform) => {
  switch (platform) {
    case 'github':
      return <Github size={22} />;
    case 'linkedin':
      return <Linkedin size={22} />;
    case 'instagram':
      return <Instagram size={22} />;
    case 'facebook':
      return <Facebook size={22} />;
    default:
      return <ExternalLink size={22} />;
  }
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 scroll-mt-20 bg-gradient-to-b from-transparent via-[#d7deea]/30 dark:via-[#161b24]/30 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a3a5f] dark:text-blue-400 mb-4">
            Let's Create Together
          </h2>
          <p className="text-[#5d7d9e] dark:text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Have an app idea, a freelance inquiry, or want to collaborate on something amazing? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Neumorphic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#e0e5ec] dark:bg-[#1c222d] rounded-3xl p-8 sm:p-10 shadow-neu-flat dark:shadow-neu-dark-flat max-w-xl mx-auto mb-12 transition-colors"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#1a3a5f] dark:bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-md">
            <Mail size={26} />
          </div>

          <p className="text-xs uppercase tracking-wider font-bold text-[#5d7d9e] dark:text-gray-400 mb-2">
            Direct Email
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xl sm:text-2xl font-bold text-[#1a3a5f] dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200 transition-colors break-all"
          >
            {personalInfo.email}
          </a>

          {/* Action Buttons: Open Mail client & Copy Email */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 bg-[#1a3a5f] dark:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:opacity-95 transition-opacity"
            >
              <Mail size={16} />
              Open Email App
            </a>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-gray-200 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Social Connection Badges */}
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-3.5 rounded-2xl bg-[#e0e5ec] dark:bg-[#1c222d] text-[#1a3a5f] dark:text-gray-200 shadow-neu-flat dark:shadow-neu-dark-flat hover:shadow-neu-pressed dark:hover:shadow-neu-dark-pressed transition-all"
            >
              {getSocialIcon(social.platform)}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

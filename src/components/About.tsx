import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white/10 dark:bg-gray-900/30 backdrop-blur">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                <div className="w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                 {/* <span className="text-6xl font-bold text-gray-600 dark:text-gray-300">YT</span>*/}
                  <img
                    src="/profile.jpg"
                    alt="Profile Photo"
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-2xl p-8 border border-white/20">
                <p className="text-lg leading-relaxed text-gray-200 dark:text-gray-300">
                  {t('about.description')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-xl p-6 text-center border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">21</div>
                  <div className="text-gray-300 text-sm">{t('about.years')}</div>
                </motion.div>

                <motion.div
                  className="bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-xl p-6 text-center border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">2023-27</div>
                  <div className="text-gray-300 text-sm">{t('about.graduated')}</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
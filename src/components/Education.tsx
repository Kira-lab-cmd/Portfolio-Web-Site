import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-white/5 dark:bg-gray-900/20 backdrop-blur">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('education.title')}
            </span>
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
              }}
              className="bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 mb-6"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl mr-6">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{t('education.deu')}</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
              }}
              className="bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="p-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl mr-6">
                  <User className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{t('education.age')}</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.msc.title'),
      period: t('experience.msc.period'),
      description: t('experience.msc.description'),
      details: t('experience.msc.details')
    }
  ];

  return (
    <section id="experience" className="py-20">
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
              {t('experience.title')}
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-600"></div>

              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full border-4 border-gray-900"></div>

                  {/* Content */}
                  <div className="ml-20 w-full">
                    <motion.div
                      className="bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl mr-4">
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                          <div className="flex items-center text-gray-300 text-sm">
                            <Calendar size={14} className="mr-1" />
                            {experience.period}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-3">{experience.description}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{experience.details}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
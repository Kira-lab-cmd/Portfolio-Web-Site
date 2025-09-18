import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Dumbbell } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.fitness.title'),
      description: t('projects.fitness.description'),
      features: t('projects.fitness.features'),
      tech: ['React (Vite)', 'Express.js', 'PostgreSQL', 'JWT'],
      icon: Dumbbell,
      gradient: 'from-cyan-400 to-purple-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white/5 dark:bg-gray-900/20 backdrop-blur">
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
              {t('projects.title')}
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
                  }}
                  className="bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {/* Project Image/Mockup Area */}
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <IconComponent className="text-white/20" size={120} />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <motion.div
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur rounded-full p-3"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="text-white" size={24} />
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <p className="text-gray-400 mb-6 text-sm">{project.features}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <motion.button
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        {t('projects.demo')}
                      </motion.button>
                      <a href='https://github.com/Kira-lab-cmd/Fitness-App' target='_blank' rel="noopener noreferrer">
                      <motion.button
                        className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 border border-white/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} className="mr-2" />
                        {t('projects.github')}
                      </motion.button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.frontend'),
      skills: ['Next.js', 'React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Server,
      title: t('skills.backend'),
      skills: ['RESTful APIs', 'PostgreSQL', 'Express.js', 'JWT'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Wrench,
      title: t('skills.tools'),
      skills: ['Git', 'VSCode', 'npm', 'yarn'],
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Languages,
      title: t('skills.languages'),
      skills: [t('skills.languages.content')],
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
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
              {t('skills.title')}
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
                  }}
                  className="bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl mr-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="bg-white/5 rounded-lg px-4 py-2 text-gray-200 hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </motion.div>
                    ))}
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

export default Skills;
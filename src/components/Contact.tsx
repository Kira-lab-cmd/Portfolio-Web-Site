import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from 'emailjs-com';
import { toast , ToastContainer } from "react-toastify";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs.send(
    'service_ezg9u0q',      
    'template_mfb8ib8',     
    formData,             
    'P5gvw3phmRPsCMzt_'     
  )
  .then((result) => {
    console.log('Mail gönderildi:', result.text);
    toast.success(t('contact.form.successMessage'));
  }, (error) => {
    console.error('Mail gönderilemedi:', error.text);
    toast.error(t('contact.form.errorMessage'));
  });

  console.log('Form submitted:', formData);
};

  return (
    <section id="contact" className="py-20">
      <ToastContainer position="top-right" />
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
              {t('contact.title')}
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

              {/* Email */}
              <motion.div
                className="flex items-center space-x-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">tetik03yusuf@gmail.com</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center space-x-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">{t('contact.location')}</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Kira-lab-cmd?tab=repositories"
                  className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur rounded-xl border border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Github className="text-white" size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yusuf-tetik-b8704b23a/"
                  className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur rounded-xl border border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Linkedin className="text-white" size={24} />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name.placeholder')}
                    className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email.placeholder')}
                    className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={t('contact.form.message.placeholder')}
                    className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} className="mr-2" />
                  {t('contact.form.send')}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
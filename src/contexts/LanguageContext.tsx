import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Header
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.skills': 'Yetenekler',
    'nav.projects': 'Projeler',
    'nav.experience': 'Deneyim',
    'nav.education': 'Eğitim',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.title': 'Yusuf Tetik | Full-Stack Geliştirici',
    'hero.subtitle': 'Modern teknolojilerle ölçeklenebilir, kullanıcı dostu web uygulamaları geliştiriyorum',
    'hero.location': 'İzmir/Kemalpaşa, Türkiye',
    'hero.cta': 'Projelerimi Gör',
    
    // About
    'about.title': 'Hakkımda',
    'about.description': 'Merhaba! Ben Yusuf Tetik, 21 yaşında bir full-stack geliştiriciyim. Kullanıcı odaklı, ölçeklenebilir web uygulamaları oluşturmaya tutkulu biriyim. DEU Bilgisayar Mühendisliği okumaktayım. Kod yazarken kullanıcı deneyimi ve performansı ön planda tutarım. Türkçe ana dilim, İngilizceyi B1/B2 seviyesinde aktif kullanıyorum.',
    'about.years': 'Yaşındayım',
    'about.graduated': 'Mezun',
    
    // Skills
    'skills.title': 'Yeteneklerim',
    'skills.frontend': 'Frontend(Ana Alanım)',
    'skills.backend': 'Backend',
    'skills.tools': 'Araçlar',
    'skills.languages': 'Diller',
    'skills.languages.content': 'Türkçe (Ana Dil), İngilizce (B1/B2)',
    
    // Projects
    'projects.title': 'Projelerim',
    'projects.fitness.title': 'Fitness Website (Full Stack)',
    'projects.fitness.description': 'Kullanıcıların antrenman programı oluşturabildiği ve beslenme takibi yapabildiği full-stack uygulama.',
    'projects.fitness.features': 'Kullanıcı doğrulama, dinamik antrenman/beslenme takibi, duyarlı tasarım.',
    'projects.demo': 'Demo',
    'projects.github': 'GitHub',
    
    // Experience
    'experience.title': 'Deneyimim',
    'experience.msc.title': 'MSC Lojistik - Stajyer',
    'experience.msc.period': 'Yaz 2025 / 2 Ay',
    'experience.msc.description': 'Bilgi işlem güvenliği üzerine çalışıldı.',
    'experience.msc.details': 'İç sistemlerin ve süreçlerin güvenliğini sağlama katkısı.',
    
    // Education
    'education.title': 'Eğitimim',
    'education.deu': 'DEU Bilgisayar Mühendisliği (2023-27)',
    'education.age': '21 Yaşında (01.03.2004)',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.location': 'İzmir/Kemalpaşa, Türkiye',
    'contact.form.name': 'Ad',
    'contact.form.email': 'E-posta',
    'contact.form.message': 'Mesaj',
    'contact.form.send': 'Gönder',
    'contact.form.name.placeholder': 'Adınız',
    'contact.form.email.placeholder': 'E-posta adresiniz',
    'contact.form.message.placeholder': 'Mesajınız...',
    'contact.form.successMessage': 'Mesajınız başarıyla gönderildi! Teşekkürler.',
    'contact.form.errorMessage': 'Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
    'contact.form.getintouch': 'İletişime Geçin',
    'contact.form.location': 'Konum',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Yusuf Tetik | Front-End Developer',
    'hero.subtitle': 'Building scalable, user-friendly web applications with modern technologies',
    'hero.location': 'İzmir/Kemalpaşa, Turkey',
    'hero.cta': 'View My Work',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Hello! I\'m Yusuf Tetik, a 21-year-old front-end developer passionate about creating scalable, user-focused web applications. I am studying Computer Engineering at DEU, I prioritize user experience and performance in my code. Turkish is my native language; I actively use English at B1/B2 level.',
     'about.years': 'Years Old',
    'about.graduated': 'Graduate',
    
    // Skills
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend (My Main Field)',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'skills.languages': 'Languages',
    'skills.languages.content': 'Turkish (Native), English (B1/B2)',
    
    // Projects
    'projects.title': 'Projects',
    'projects.fitness.title': 'Fitness Website (Full Stack)',
    'projects.fitness.description': 'A full-stack application allowing users to create workout plans and track nutrition.',
    'projects.fitness.features': 'User authentication, dynamic workout/nutrition tracking, responsive design.',
    'projects.demo': 'Demo',
    'projects.github': 'GitHub',
    
    // Experience
    'experience.title': 'Experience',
    'experience.msc.title': 'MSC Logistics - Intern',
    'experience.msc.period': 'Summer 2025 / 2 Months',
    'experience.msc.description': 'Focused on IT security tasks.',
    'experience.msc.details': 'Contributed to securing internal systems and processes.',
    
    // Education
    'education.title': 'Education',
    'education.deu': 'DEU Computer Engineering Graduate (2025-27)',
    'education.age': '21 Years Old (01.03.2004)',
    
    // Contact
    'contact.title': 'Contact',
    'contact.location': 'İzmir/Kemalpaşa, Turkey',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.form.name.placeholder': 'Your Name',
    'contact.form.email.placeholder': 'Your Email',
    'contact.form.message.placeholder': 'Your Message...',
    'contact.form.successMessage': 'Your message has been sent successfully! Thank you.',
    'contact.form.errorMessage': 'There was an error sending your message. Please try again.',
    'contact.form.getintouch': 'Get In Touch',
    'contact.form.location': 'Location',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['tr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
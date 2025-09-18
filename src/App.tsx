import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen transition-colors duration-300">
          {/* Animated Gradient Background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 animate-gradient-xy"></div>
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
          </div>
          
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
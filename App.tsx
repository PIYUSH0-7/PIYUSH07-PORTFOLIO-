import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { DATA } from './constants';

type Language = 'en' | 'hn' | 'tm' | 'bj' | 'jp';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  // Handle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'en') return 'hn';
      if (prev === 'hn') return 'tm';
      if (prev === 'tm') return 'bj';
      if (prev === 'bj') return 'jp';
      return 'en';
    });
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const currentData = DATA[language];

  return (
    <div className={`min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-purple-100 dark:selection:bg-purple-900 selection:text-purple-900 dark:selection:text-purple-50 pb-24 transition-colors duration-300 overflow-x-hidden relative`}>
      
      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
      }}></div>

      {/* Ambient Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob dark:bg-purple-900/20 dark:mix-blend-screen"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob dark:bg-yellow-900/20 dark:mix-blend-screen" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob dark:bg-pink-900/20 dark:mix-blend-screen" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      
      <main className="max-w-3xl mx-auto px-6 sm:px-12">
        <Hero data={currentData.profile} labels={currentData.sections} />
        
        <ScrollReveal delay={0.2}>
          <Stack labels={currentData.sections} />
        </ScrollReveal>

        <Experience data={currentData.experience} labels={currentData.sections} />
        <Education data={currentData.education} labels={currentData.sections} />
        <Projects data={currentData.projects} labels={currentData.sections} />
        <Hackathons data={currentData.hackathons} labels={currentData.sections} />
        
        <ScrollReveal>
          <Contact labels={currentData.sections} />
        </ScrollReveal>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;
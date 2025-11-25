import React, { useState, useEffect, useRef } from 'react';
import { Home, FolderGit2, Github, Linkedin, Moon, Sun, FileDown, FileText, Zap } from 'lucide-react';
import { DATA, SOCIALS, SKILLS } from '../constants';
import { generateResume } from '../utils/pdfGenerator';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: 'en' | 'hn' | 'tm' | 'bj' | 'jp';
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, language, toggleLanguage }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGenerateResume = () => {
    const currentData = DATA[language];
    generateResume(currentData, SOCIALS, SKILLS);
    setShowResumeMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show immediately if at the very top of the page
      if (currentScrollY < 20) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
        setShowResumeMenu(false); // Close menu on scroll
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;

      // Clear existing timeout to prevent premature showing
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // "Come auto when not scrolling": 
      // If user stops scrolling for 1.5 seconds, automatically show the navbar
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Click outside to close menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowResumeMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[200%] opacity-0'
      }`}
    >
      <div className="flex items-center gap-1 px-2 py-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-full shadow-2xl shadow-zinc-200/50 dark:shadow-zinc-900/50">
        <button 
          onClick={() => scrollTo('home')} 
          className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all active:scale-95"
          aria-label="Home"
        >
          <Home size={20} strokeWidth={1.5} />
        </button>
        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-1"></div>
        <button 
          onClick={() => { window.location.href = 'https://dev-path-tracker.vercel.app/'; }}
          className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all active:scale-95"
          aria-label="Projects"
        >
          <FolderGit2 size={20} strokeWidth={1.5} />
        </button>
        <a 
          href="https://github.com/PIYUSH0-7" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all active:scale-95"
          aria-label="GitHub"
        >
          <Github size={20} strokeWidth={1.5} />
        </a>
        <a 
          href="https://www.linkedin.com/in/piyush070/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all active:scale-95"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} strokeWidth={1.5} />
        </a>
        
        {/* Resume Dropdown */}
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setShowResumeMenu(!showResumeMenu)}
            className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all active:scale-95"
            aria-label="Download Resume"
          >
            <FileDown size={20} strokeWidth={1.5} />
          </button>
          
          {showResumeMenu && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-2">
              <div className="text-[10px] font-bold text-zinc-400 px-3 py-2 uppercase tracking-wider">Select Format</div>
              <a 
                href="https://drive.google.com/uc?export=view&id=1GtcnA8jKw2bFS53A-XuAajsbclEG_dKJ" 
                download="Piyush_Gangwar_Resume.pdf"
                onClick={() => setShowResumeMenu(false)}
                className="flex items-center gap-3 px-3 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all text-zinc-700 dark:text-zinc-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-black transition-colors border border-zinc-200 dark:border-zinc-700">
                  <FileText size={18} className="text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">Original Resume</span>
                  <span className="text-[10px] text-zinc-400">PDF File • Standard</span>
                </div>
              </a>
              <button 
                onClick={handleGenerateResume}
                className="flex items-center gap-3 w-full text-left px-3 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all text-zinc-700 dark:text-zinc-300 group mt-1"
              >
                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-colors">
                  <Zap size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Live Portfolio CV</span>
                  <span className="text-[10px] text-zinc-400">Dynamic • ATS Friendly</span>
                </div>
              </button>
            </div>
          )}
        </div>

        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-1"></div>
        
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme} 
          className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all active:scale-95"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
        </button>

        {/* Language Toggle */}
        <button 
          onClick={toggleLanguage} 
          className="w-10 h-10 flex items-center justify-center text-xs font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all active:scale-95"
          aria-label="Toggle Language"
        >
          {language}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

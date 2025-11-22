import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  data: any;
  labels: any;
}

const Hero: React.FC<HeroProps> = ({ data, labels }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = data.role;

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30); // Typing speed

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="home" className="pt-32 pb-16 min-h-[85vh] flex flex-col justify-center relative">
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-12 mb-12 items-center sm:items-start">
        <div className="flex flex-col gap-6 max-w-xl justify-center items-start">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium animate-fade-in backdrop-blur-sm">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
             Available for Opportunities
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight flex flex-wrap items-center gap-3">
            Hi, I'm {data.name} <span className="animate-wave origin-[70%_70%] inline-block text-4xl sm:text-6xl">👋</span>
          </h1>
          
          <div className="h-20 sm:h-auto"> {/* Fixed height to prevent layout shift during typing */}
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500 font-medium">
                    {displayText}
                </span>
                <span className="animate-pulse text-purple-500 ml-1">|</span>
            </p>
          </div>
          
          <div className="space-y-6 max-w-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div>
                <h2 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles size={12} className="text-purple-500" />
                    {labels.about}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {data.about}
                </p>
            </div>
          </div>

        </div>
        
        <div className="relative shrink-0 self-center sm:self-start mt-4 sm:mt-0 flex justify-center items-center group perspective-1000">
            {/* Outer Glow/Ring */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
            
            {/* Creative Container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 transition-transform duration-700 preserve-3d group-hover:rotate-y-12">
                {/* Rotating dashed border - Visible on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Morphing Blob Mask */}
                <a href={data.url || '#'} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 animate-morph overflow-hidden relative shadow-2xl ring-1 ring-white/20 dark:ring-zinc-700/50 transform transition-transform duration-500 group-hover:scale-[1.02]">
                      <img 
                          src={data.avatar} 
                          alt={data.name} 
                          className="w-full h-full object-cover scale-110 transition-transform duration-1000 group-hover:scale-100"
                      />
                      
                      {/* Overlay Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </a>

                {/* Floating Badge 1 */}
                <div className="absolute -right-4 top-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl shadow-purple-500/10 animate-float flex items-center gap-2 border border-white/50 dark:border-zinc-800 z-20">
                    <div className="bg-purple-100 dark:bg-purple-900/50 p-1.5 rounded-full">
                        <Code size={14} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-xs font-bold text-zinc-700 dark:text-zinc-200">Developer</span>
                </div>

                 {/* Floating Badge 2 */}
                 <div className="absolute -left-2 bottom-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl shadow-yellow-500/10 animate-float flex items-center gap-2 border border-white/50 dark:border-zinc-800 z-20" style={{ animationDelay: '1.5s' }}>
                     <div className="bg-yellow-100 dark:bg-yellow-900/50 p-1.5 rounded-full">
                        <Zap size={14} className="text-yellow-600 dark:text-yellow-400" />
                     </div>
                    <span className="text-xs font-bold text-zinc-700 dark:text-zinc-200">AI Enthusiast</span>
                </div>
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-300 dark:text-zinc-600 opacity-0 sm:opacity-100 transition-opacity duration-1000 delay-1000">
          <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
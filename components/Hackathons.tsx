import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface HackathonsProps {
  data: any[];
  labels: any;
}

const Hackathons: React.FC<HackathonsProps> = ({ data, labels }) => {
  return (
    <section className="py-16">
      <ScrollReveal>
        <div className="text-center mb-12 space-y-3">
          <span className="text-sm font-bold text-pink-500 uppercase tracking-widest">{labels.hackathons}</span>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">{labels.hackathonsTitle}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto text-lg">
             {labels.hackathonsDesc}
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {data.map((hack, index) => (
          <ScrollReveal key={hack.id} delay={index * 0.15} variant={index % 2 === 0 ? "left" : "right"}>
            <div 
              className="relative bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl overflow-hidden group transition-all duration-500 hover:-translate-y-1"
            >
               {/* Decorative background gradient */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-pink-50/50 dark:to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               
               {/* Animated Border Gradient Bottom */}
               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

               <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                   <a 
                      href={hack.url || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="shrink-0 block hover:rotate-6 transition-transform duration-300 cursor-pointer"
                   >
                      <div className="shadow-lg rounded-full">
                        {hack.logo}
                      </div>
                   </a>
                   
                   <div className="flex flex-col gap-3 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{hack.title}</h3>
                          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest border border-zinc-200 dark:border-zinc-700/50 px-2 py-1 rounded bg-zinc-50 dark:bg-zinc-800/50">{hack.date}</span>
                      </div>
                      
                      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
                          {hack.description}
                      </p>
                   </div>
               </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
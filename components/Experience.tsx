import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ExperienceProps {
  data: any[];
  labels: any;
}

const Experience: React.FC<ExperienceProps> = ({ data, labels }) => {
  return (
    <section className="py-12 relative">
      <ScrollReveal>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 flex items-center gap-3">
          {labels.experience}
        </h2>
      </ScrollReveal>

      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 md:ml-6 space-y-12">
        {data.map((job, index) => (
          <ScrollReveal 
            key={job.id} 
            delay={index * 0.1} 
            variant="left" // slide in from right
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-zinc-200 dark:border-zinc-700 shadow-sm transition-colors hover:border-purple-500 dark:hover:border-purple-500" />

            <div className="flex flex-col sm:flex-row gap-4 items-start group">
              <a 
                href={job.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="shrink-0 block p-2 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm group-hover:scale-110 transition-transform duration-300"
                aria-label={`Visit ${job.company} website`}
              >
                {job.logo}
              </a>
              
              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {job.company}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full tabular-nums whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                
                <p className="text-base font-medium text-zinc-700 dark:text-zinc-300">
                  {job.role}
                </p>
                
                {job.description && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {job.description}
                  </p>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
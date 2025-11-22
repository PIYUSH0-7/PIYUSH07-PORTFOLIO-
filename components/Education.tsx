import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface EducationProps {
  data: any[];
  labels: any;
}

const Education: React.FC<EducationProps> = ({ data, labels }) => {
  return (
    <section className="py-8">
      <ScrollReveal>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">{labels.education}</h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 gap-4">
        {data.map((edu, index) => (
          <ScrollReveal key={edu.id} delay={index * 0.15} variant="up">
            <div className="group relative flex flex-col sm:flex-row gap-4 items-start p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800">
              <a 
                href={edu.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 pt-1 block group-hover:scale-110 transition-transform duration-300"
              >
                 {edu.logo}
              </a>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between w-full gap-2">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{edu.institution}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.program}</p>
                </div>
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
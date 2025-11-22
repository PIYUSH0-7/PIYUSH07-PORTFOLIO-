import React from 'react';
import { Globe, Github } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsProps {
  data: any[];
  labels: any;
}

const Projects: React.FC<ProjectsProps> = ({ data, labels }) => {
  return (
    <section id="projects" className="py-16">
      <ScrollReveal width="100%">
        <div className="mb-12 text-center space-y-4">
          <span className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">{labels.projects}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">{labels.projectsSubtitle}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto text-lg leading-relaxed">
            {labels.projectsDesc}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {data.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1} variant="up">
            <div
              className="flex flex-col h-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl dark:hover:shadow-purple-900/10 hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Cover Image Area */}
              <a 
                href={project.website || project.source || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-52 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden block cursor-pointer relative"
              >
                {project.icon}
              </a>
              
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex flex-col gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">{project.period}</p>
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                   <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech: string) => (
                          <span 
                              key={tech} 
                              className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50"
                          >
                              {tech}
                          </span>
                          ))}
                      </div>
                   </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                      {project.source && (
                          <a href={project.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                              <Github size={18} />
                              Code
                          </a>
                      )}
                      {project.website && (
                          <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                              <Globe size={18} />
                              Live Demo
                          </a>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
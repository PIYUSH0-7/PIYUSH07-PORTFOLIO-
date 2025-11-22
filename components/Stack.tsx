import React from 'react';
import { SKILLS } from '../constants';

interface StackProps {
  labels: any;
}

const Stack: React.FC<StackProps> = ({ labels }) => {
  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{labels.skills}</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1 text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-default shadow-sm"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Stack;
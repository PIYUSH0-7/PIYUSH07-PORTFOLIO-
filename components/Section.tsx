import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      {title && (
        <h2 className="text-lg font-semibold text-primary mb-8 flex items-center gap-3">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;

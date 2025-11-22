import React from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 mt-12 border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600 font-medium">
          © {new Date().getFullYear()} Piyush. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs font-medium text-zinc-600">
           {SOCIALS.slice(0, 3).map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                {social.name}
              </a>
           ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
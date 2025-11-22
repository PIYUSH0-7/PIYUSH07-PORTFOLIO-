import React, { useState } from 'react';
import { MessageCircle, Linkedin, Mail, Copy, Check } from 'lucide-react';

interface ContactProps {
  labels: any;
}

const Contact: React.FC<ContactProps> = ({ labels }) => {
  const [copied, setCopied] = useState(false);
  const email = "gangwarpiyush827@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 text-center space-y-8">
      <div className="space-y-4">
        <span className="text-sm font-medium text-pink-500 flex items-center justify-center gap-2 uppercase tracking-widest">
            {labels.contact}
        </span>
        <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tighter">{labels.contactTitle}</h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {labels.contactDesc}
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 mt-10">
          
          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a 
                href="https://wa.me/918923845912?text=Hello%20Piyush.%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20opportunities.%20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-300 rounded-2xl border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/10"
            >
                <div className="p-2 bg-green-500 text-white rounded-full group-hover:scale-110 transition-transform shadow-md">
                    <MessageCircle size={20} />
                </div>
                <div className="text-left">
                    <div className="font-bold text-sm">WhatsApp</div>
                    <div className="text-xs opacity-80">Quick Chat</div>
                </div>
            </a>

            <a 
                href="https://www.linkedin.com/in/piyush070/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 rounded-2xl border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10"
            >
                <div className="p-2 bg-blue-600 text-white rounded-full group-hover:scale-110 transition-transform shadow-md">
                    <Linkedin size={20} />
                </div>
                <div className="text-left">
                    <div className="font-bold text-sm">LinkedIn</div>
                    <div className="text-xs opacity-80">Professional</div>
                </div>
            </a>
          </div>

          {/* Email Copy Section */}
          <button 
            onClick={handleCopy}
            className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all active:scale-95"
          >
            <Mail size={16} />
            <span className="text-sm font-mono">{email}</span>
            <div className={`ml-2 p-1.5 rounded-full ${copied ? 'bg-green-100 text-green-600' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'} transition-colors`}>
               {copied ? <Check size={14} /> : <Copy size={14} />}
            </div>
            
            {/* Tooltip for feedback */}
            <span className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                Copied!
            </span>
          </button>
      </div>
    </section>
  );
};

export default Contact;
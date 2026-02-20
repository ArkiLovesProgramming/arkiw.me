
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 lg:px-24 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <p className="font-mono text-xs tracking-[0.4em] uppercase font-bold text-black dark:text-white">ARKI WANG</p>
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-mono">wwang22@mun.ca</p>
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-mono">+1 (709) 763-6688</p>
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-mono">© 2026. Designed with minimal noise.</p>
        </div>

        <div className="flex items-center gap-8">
          {[
            { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22', href: 'https://github.com/arkilovesprogramming' },
            { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z', href: 'https://linkedin.com/in/arkiw' },
            { name: 'Leetcode', icon: 'M4 4h16v16H4zM8 8h8v8H8z', href: 'https://leetcode.com/u/arkilovesprogramming' }
          ].map((social) => (
            <a 
              key={social.name}
              href={social.href} 
              className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors p-2"
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>

        <div className="text-zinc-400 dark:text-zinc-600 text-[10px] font-mono uppercase tracking-widest hidden lg:block">
          High Performance. Low Noise.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

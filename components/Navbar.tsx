
import React from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/70 dark:bg-black/30 border border-zinc-200 dark:border-white/5 px-6 py-3 rounded-full transition-all duration-500">
        <a href="#" className="font-mono text-sm tracking-widest font-bold">ARKIW.ME</a>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition-all duration-300"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

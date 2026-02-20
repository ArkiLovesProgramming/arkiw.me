
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Software Engineer | AWS Certified Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="h-full flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      <div className="max-w-2xl">
        {/* Block A: Personal Brand */}
        <div className="space-y-4 mb-16">
          <p className="font-mono text-zinc-500 dark:text-zinc-500 text-xs tracking-[0.3em] uppercase">Greetings, I am</p>
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-none text-black dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Arki Wang
          </h1>
          <p className="font-mono text-base md:text-lg text-zinc-500 dark:text-zinc-400">
            {text}
          </p>
        </div>

        {/* Block B: Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['React', 'Python', 'Java', 'AWS', 'Docker', 'Kubernetes'].map(tech => (
            <span key={tech} className="px-3 py-1 text-[9px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 uppercase tracking-widest rounded-full transition-all cursor-default">
              {tech}
            </span>
          ))}
        </div>

        {/* Block C: CTA & Contact */}
        <div className="space-y-3">
          <a 
            href="mailto:wwang22@mun.ca"
            className="inline-flex items-center gap-3 px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-widest hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all rounded-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Email Me
          </a>

          <div className="flex items-center gap-4 font-mono text-sm text-zinc-500 dark:text-zinc-500">
            <a href="mailto:wwang22@mun.ca" className="hover:text-black dark:hover:text-white transition-colors">
              wwang22@mun.ca
            </a>
            <span>•</span>
            <span>+1 (709) 763-6688</span>
          </div>

          <div className="flex items-center gap-1">
            {[
              { name: 'GitHub', href: 'https://github.com/arkilovesprogramming', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
              { name: 'LinkedIn', href: 'https://linkedin.com/in/arkiw', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' },
              { name: 'LeetCode', href: 'https://leetcode.com/u/arkilovesprogramming', icon: 'M4 4h16v16H4zM8 8h8v8H8z' }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                aria-label={social.name}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <section className="py-12 border-y border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      <div className="px-6 lg:px-24 mb-6">
        <h2 className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.3em]">Recognition & Validation</h2>
      </div>
      
      <div className="flex overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap py-2">
          {[...CERTIFICATES, ...CERTIFICATES].map((cert, idx) => (
            <div key={`${cert.id}-${idx}`} className="inline-flex items-center gap-4 mx-10 group">
              <div className="w-10 h-10 flex items-center justify-center">
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-contain" />
                ) : (
                  <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-900 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-black dark:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5l2 2l2-2l-2-5z"/><path d="M15 7a3 3 0 0 1-6 0"/><circle cx="12" cy="7" r="4"/><path d="M12 11v4"/></svg>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-800 dark:text-zinc-200 font-bold text-sm tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">{cert.name}</span>
                <span className="text-zinc-400 dark:text-zinc-600 font-mono text-[9px] uppercase tracking-widest">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

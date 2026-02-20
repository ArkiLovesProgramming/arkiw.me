
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="h-full py-20 px-6 lg:px-16 flex flex-col justify-center transition-colors duration-500">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl font-bold tracking-tighter uppercase text-black dark:text-white">Experience</h2>
          <div className="h-[1px] flex-grow bg-zinc-200 dark:bg-zinc-900"></div>
        </div>
        
        <div className="relative border-l border-zinc-200 dark:border-zinc-900 ml-2 space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative pl-10 group">
              {/* Animated Dot */}
              <div className="absolute -left-[4.5px] top-2 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-black dark:group-hover:bg-white transition-colors ring-4 ring-white dark:ring-black"></div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold text-black dark:text-white transition-colors">{exp.role}</h3>
                    <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">@ {exp.company}</p>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed flex gap-3">
                      <span className="text-zinc-300 dark:text-zinc-700">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

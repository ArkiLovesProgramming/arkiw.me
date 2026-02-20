
import React from 'react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-6 lg:px-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 uppercase text-black dark:text-white">Education</h2>
        
        <div className="space-y-6">
          {EDUCATION_DATA.map((edu) => (
            <div 
              key={edu.id}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-6 border-b border-zinc-200 dark:border-zinc-900 last:border-0"
            >
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-black dark:text-white">{edu.degree}</h3>
                <p className="text-zinc-600 dark:text-zinc-500">{edu.major}</p>
                <p className="text-zinc-500 dark:text-zinc-600 text-sm">{edu.school}</p>
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">{edu.location}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-600 uppercase tracking-wider">{edu.period}</p>
                <p className="font-mono text-xs text-zinc-400 dark:text-zinc-700 mt-1">GPA: {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

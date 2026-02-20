
import React from 'react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 lg:px-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 uppercase text-black dark:text-white">Selected Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS_DATA.map((project) => {
            return (
              <div 
                key={project.id}
                className="group relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 p-6 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-500"
              >
                {/* Corner angle */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-zinc-300 dark:border-t-zinc-700 group-hover:border-t-zinc-400 dark:group-hover:border-t-zinc-600 transition-colors duration-500" />
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="space-y-3 block">
                  <h3 className="font-bold tracking-tight text-xl text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </a>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

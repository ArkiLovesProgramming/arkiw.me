
import React from 'react';
import { ARTICLES_DATA } from '../constants';

const Articles: React.FC = () => {
  return (
    <section id="writing" className="py-24 px-6 lg:px-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-black dark:text-white">Writing</h2>
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-widest pb-2">Sharing Insights</p>
        </div>

        <div className="space-y-2">
          {ARTICLES_DATA.map((article) => (
            <a 
              key={article.id}
              href={article.link}
              className="group block py-8 border-b border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row md:items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors px-4 -mx-4 rounded-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 min-w-[100px]">{article.date}</span>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black dark:text-white group-hover:translate-x-1 transition-transform">{article.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-500 text-sm">{article.summary}</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-black dark:text-white">
                Read
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

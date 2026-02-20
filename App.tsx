
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Articles from './components/Articles';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Sync logic with the config we added to index.html
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black bg-white dark:bg-black text-black dark:text-white">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        {/* Split Section for Hero and Experience on Desktop */}
        <div className="lg:grid lg:grid-cols-2 lg:min-h-screen border-b border-zinc-200 dark:border-zinc-900 pt-20 lg:pt-0">
          <div className="flex flex-col justify-center">
            <Hero />
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-zinc-900 flex flex-col justify-center bg-zinc-50/50 dark:bg-zinc-950/20">
            <Experience />
          </div>
        </div>

        <Certificates />
        <Education />
        <Projects />
        <Articles />
      </main>

      <Footer />
    </div>
  );
};

export default App;

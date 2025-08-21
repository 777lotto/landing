import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-primary-light', 'text-text-primary-light');
      document.body.classList.add('bg-primary-dark', 'text-text-primary-dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-primary-dark', 'text-text-primary-dark');
      document.body.classList.add('bg-primary-light', 'text-text-primary-light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-secondary-light dark:bg-secondary-dark border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img className="h-8 w-8" src="/impossible-triangle.svg" alt="Logo" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleThemeSwitch}
                className="p-2 rounded-md text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:bg-tertiary-light dark:hover:bg-tertiary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
}

export default App;

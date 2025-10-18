'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const ThemeDebugger = () => {
  const { theme, systemTheme, resolvedTheme, setTheme } = useTheme();
  const [htmlClass, setHtmlClass] = useState('');

  useEffect(() => {
    // Watch for changes to the html element's class
    const observer = new MutationObserver(() => {
      setHtmlClass(document.documentElement.className);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Initial value
    setHtmlClass(document.documentElement.className);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg dark:bg-dark-card">
      <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">
        Theme Debugger
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-surf-crest/50 rounded-lg dark:bg-dark-surf-crest/30">
          <p className="text-sm font-medium text-everglade dark:text-dark-text">Current Theme:</p>
          <p className="text-lg font-bold text-limed-oak dark:text-dark-limed-oak">{theme}</p>
        </div>
        
        <div className="p-4 bg-surf-crest/50 rounded-lg dark:bg-dark-surf-crest/30">
          <p className="text-sm font-medium text-everglade dark:text-dark-text">Resolved Theme:</p>
          <p className="text-lg font-bold text-limed-oak dark:text-dark-limed-oak">{resolvedTheme}</p>
        </div>
        
        <div className="p-4 bg-surf-crest/50 rounded-lg dark:bg-dark-surf-crest/30">
          <p className="text-sm font-medium text-everglade dark:text-dark-text">System Theme:</p>
          <p className="text-lg font-bold text-limed-oak dark:text-dark-limed-oak">{systemTheme || 'unknown'}</p>
        </div>
        
        <div className="p-4 bg-surf-crest/50 rounded-lg dark:bg-dark-surf-crest/30">
          <p className="text-sm font-medium text-everglade dark:text-dark-text">HTML Classes:</p>
          <p className="text-sm font-mono text-everglade dark:text-dark-everglade break-words">{htmlClass || '(none)'}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setTheme('light')} variant={theme === 'light' ? 'default' : 'outline'}>
          Set Light
        </Button>
        <Button onClick={() => setTheme('dark')} variant={theme === 'dark' ? 'default' : 'outline'}>
          Set Dark
        </Button>
        <Button onClick={() => setTheme('system')} variant={theme === 'system' ? 'default' : 'outline'}>
          Set System
        </Button>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-bold text-everglade mb-2 dark:text-dark-text">
          Theme Test Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </div>
  );
};

export default ThemeDebugger;
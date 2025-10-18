import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const ButtonThemeTestPage = () => {
  return (
    <div className="min-h-screen bg-spring-wood p-8 dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-everglade dark:text-dark-text">
            Button Theme Test
          </h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg dark:bg-dark-card">
            <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">
              Default Button Test
            </h2>
            <div className="space-y-4">
              <Button>Default Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg dark:bg-dark-card">
            <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">
              Size Variants Test
            </h2>
            <div className="space-y-4">
              <Button size="sm">Small Button</Button>
              <Button size="default">Default Button</Button>
              <Button size="lg">Large Button</Button>
              <Button size="icon">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg dark:bg-dark-card">
          <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">
            Combined Variants Test
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Button variant="default" size="sm">Default Small</Button>
            <Button variant="outline" size="sm">Outline Small</Button>
            <Button variant="secondary" size="sm">Secondary Small</Button>
            <Button variant="default" size="lg">Default Large</Button>
            <Button variant="outline" size="lg">Outline Large</Button>
            <Button variant="secondary" size="lg">Secondary Large</Button>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg dark:bg-dark-card">
          <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">
            Theme Instructions
          </h2>
          <ol className="space-y-2 text-como dark:text-dark-como">
            <li>1. Click the theme toggle button in the top right corner</li>
            <li>2. Observe if all buttons change appearance when theme is toggled</li>
            <li>3. Check that background colors, text colors, and borders change appropriately</li>
            <li>4. Verify that hover states work correctly in both themes</li>
          </ol>
          <div className="mt-4 p-4 bg-limed-oak/10 rounded-lg dark:bg-dark-limed-oak/10">
            <p className="text-sm text-everglade dark:text-dark-everglade">
              <strong>Note:</strong> If buttons are not changing color, check that:
              <br />1. The theme provider is correctly configured in _app.tsx
              <br />2. The Button component has proper dark mode classes
              <br />3. There are no CSS conflicts in globals.css
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonThemeTestPage;
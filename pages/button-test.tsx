import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';

const ButtonTestPage = () => {
  // Log the button variants to see what classes are being generated
  console.log('Button variants:', buttonVariants({ variant: 'default' }));
  console.log('Button variants (outline):', buttonVariants({ variant: 'outline' }));

  return (
    <div className="min-h-screen bg-spring-wood p-8 dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-everglade mb-8 dark:text-dark-text">
          Button Test Page
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg dark:bg-dark-card">
            <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">
              Default Buttons
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-como mb-2 dark:text-dark-como">Small:</p>
                <Button size="sm">Small Button</Button>
              </div>
              
              <div>
                <p className="text-como mb-2 dark:text-dark-como">Default:</p>
                <Button>Default Button</Button>
              </div>
              
              <div>
                <p className="text-como mb-2 dark:text-dark-como">Large:</p>
                <Button size="lg">Large Button</Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg dark:bg-dark-card">
            <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">
              Outline Buttons
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-como mb-2 dark:text-dark-como">Small:</p>
                <Button variant="outline" size="sm">Small Outline</Button>
              </div>
              
              <div>
                <p className="text-como mb-2 dark:text-dark-como">Default:</p>
                <Button variant="outline">Default Outline</Button>
              </div>
              
              <div>
                <p className="text-como mb-2 dark:text-dark-como">Large:</p>
                <Button variant="outline" size="lg">Large Outline</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg dark:bg-dark-card">
          <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">
            Button Classes Debug
          </h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-como mb-2 dark:text-dark-como">Default Button Classes:</p>
              <pre className="text-xs bg-surf-crest p-3 rounded dark:bg-dark-surf-crest dark:text-dark-text">
                {buttonVariants({ variant: 'default' })}
              </pre>
            </div>
            
            <div>
              <p className="text-como mb-2 dark:text-dark-como">Outline Button Classes:</p>
              <pre className="text-xs bg-surf-crest p-3 rounded dark:bg-dark-surf-crest dark:text-dark-text">
                {buttonVariants({ variant: 'outline' })}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonTestPage;
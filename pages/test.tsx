import React from 'react';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-spring-wood p-8">
      <h1 className="text-3xl font-bold text-everglade mb-6">Styling Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Test Card Component */}
        <div className="rounded-2xl border glass shadow-lg p-6 glass bg-spring-wood/70 backdrop-blur-sm border-everglade/20">
          <h2 className="text-2xl font-bold text-everglade mb-4">Card Component Test</h2>
          <p className="text-como mb-4">This card should have glassmorphism effect with the correct color palette.</p>
          <div className="flex gap-4">
            <button className="bg-everglade hover:bg-como text-spring-wood font-medium py-2 px-4 rounded-full transition-colors duration-300">
              Primary Button
            </button>
            <button className="border border-everglade text-everglade hover:bg-everglade hover:text-spring-wood font-medium py-2 px-4 rounded-full transition-colors duration-300">
              Secondary Button
            </button>
          </div>
        </div>
        
        {/* Test Color Palette */}
        <div className="rounded-2xl border glass shadow-lg p-6 glass bg-spring-wood/70 backdrop-blur-sm border-everglade/20 dark:bg-dark-card/50 dark:border-dark-border/30">
          <h2 className="text-2xl font-bold text-everglade mb-4 dark:text-dark-text">Color Palette Test</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-everglade rounded mr-3"></div>
              <span className="text-everglade dark:text-dark-text">Everglade (#1a3d2e) - Primary</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-como rounded mr-3"></div>
              <span className="text-como dark:text-dark-text">Como (#4f7d5d) - Secondary</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-de-york rounded mr-3"></div>
              <span className="text-de-york dark:text-dark-text">De York (#8cc090) - Accent</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-limed-oak rounded mr-3"></div>
              <span className="text-limed-oak dark:text-dark-text">Limed Oak (#a38c4d) - Accent</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-spring-wood rounded mr-3 border border-everglade/20"></div>
              <span className="text-everglade dark:text-dark-text">Spring Wood (#f6f8f1) - Background</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Test Glassmorphism Effect */}
      <div className="mt-8 rounded-2xl border glass shadow-lg p-6 glass bg-spring-wood/70 backdrop-blur-sm border-everglade/20">
        <h2 className="text-2xl font-bold text-everglade mb-4">Glassmorphism Test</h2>
        <p className="text-como mb-4">
          This element should have a subtle glass effect with backdrop blur and semi-transparent background.
        </p>
        <div className="flex items-center">
          <div className="w-16 h-16 bg-limed-oak/30 backdrop-blur-sm rounded-lg mr-4 border border-limed-oak/50"></div>
          <p className="text-como">
            The box on the left demonstrates the glassmorphism effect with the correct opacity and blur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
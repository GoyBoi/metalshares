import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-br from-spring-wood to-surf-crest dark:from-dark-bg dark:to-dark-card animate-fade-in"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-everglade font-serif mb-6 dark:text-dark-text animate-slide-up">
              Invest in Physical Metals <span className="text-limed-oak">with Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-como mb-8 max-w-lg mx-auto lg:mx-0 dark:text-dark-text/90 animate-fade-in">
              Secure your financial future with our premium precious metals investment platform. 
              Ownership, transparency, and security guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hover:scale-105 active:scale-95 transition-transform duration-300 dark:hover:bg-dark-como">
                Start Investing
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 active:scale-95 transition-transform duration-300 dark:hover:bg-dark-everglade dark:hover:text-dark-bg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-limed-oak rounded-3xl transform rotate-6 dark:bg-dark-limed-oak"></div>
              <div className="absolute inset-0 bg-de-york rounded-3xl transform -rotate-3 dark:bg-dark-de-york"></div>
              <div className="relative bg-spring-wood rounded-3xl p-8 shadow-xl dark:bg-dark-spring-wood dark:text-dark-text">
                <div className="bg-surf-crest rounded-2xl p-6 dark:bg-dark-surf-crest">
                  <h3 className="text-everglade font-bold text-xl mb-4 dark:text-dark-everglade">Why Metals?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-everglade rounded-full p-1 mr-3 mt-1 dark:bg-dark-everglade">
                        <svg className="w-4 h-4 text-spring-wood dark:text-dark-spring-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-como dark:text-dark-text">Hedge against inflation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-everglade rounded-full p-1 mr-3 mt-1 dark:bg-dark-everglade">
                        <svg className="w-4 h-4 text-spring-wood dark:text-dark-spring-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-como dark:text-dark-text">Tangible asset ownership</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-everglade rounded-full p-1 mr-3 mt-1 dark:bg-dark-everglade">
                        <svg className="w-4 h-4 text-spring-wood dark:text-dark-spring-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-como dark:text-dark-text">Portfolio diversification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-spring-wood/90 glass border-b border-everglade/20 py-2 dark:bg-dark-spring-wood/90 dark:border-dark-everglade/30' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-everglade font-bold text-2xl font-serif dark:text-dark-everglade">MetalShares</div>
          </div>

          {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['why-metals', 'products', 'trust', 'newsletter'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-everglade hover:text-limed-oak font-medium transition-all duration-300 capitalize dark:text-dark-everglade dark:hover:text-dark-limed-oak relative group after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-limed-oak after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.replace('-', ' ')}
            </button>
          ))}
        </nav>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button 
              className="text-everglade focus:outline-none dark:text-dark-everglade"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 backdrop-blur-md bg-spring-wood/90 glass rounded-xl border border-everglade/20 dark:bg-dark-spring-wood/90 dark:border-dark-everglade/30">
            <div className="flex flex-col space-y-4">
              {['why-metals', 'products', 'trust', 'newsletter'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-everglade hover:text-limed-oak font-medium py-2 px-4 rounded-lg hover:bg-surf-crest transition-colors duration-300 capitalize text-left dark:text-dark-everglade dark:hover:text-dark-limed-oak dark:hover:bg-dark-como/30"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
              <Button className="w-full max-w-xs mx-auto">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
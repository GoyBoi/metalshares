import React from 'react';

interface FooterProps {
  id?: string;
}

const Footer = ({ id = 'footer' }: FooterProps) => {
  return (
    <footer id={id} className="bg-everglade text-spring-wood pt-16 pb-8 dark:bg-dark-everglade dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">MetalShares</h3>
            <p className="text-surf-crest mb-4 dark:text-dark-text">
              Secure your financial future with our premium precious metals investment platform.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-surf-crest hover:text-de-york transition-all duration-300 dark:text-dark-text dark:hover:text-dark-accent hover:scale-110"
                  aria-label={`Social media link ${item}`}
                >
                  <div className="bg-surf-crest/20 w-10 h-10 rounded-full flex items-center justify-center dark:bg-dark-border/30 transition-transform duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-dark-text">Products</h4>
            <ul className="space-y-2">
              {['Gold Bars', 'Silver Coins', 'Platinum', 'Palladium', 'IRA Options'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-surf-crest hover:text-de-york transition-all duration-300 dark:text-dark-text dark:hover:text-dark-accent hover:translate-x-1 hover:font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-dark-text">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'How It Works', 'Pricing', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-surf-crest hover:text-de-york transition-all duration-300 dark:text-dark-text dark:hover:text-dark-accent hover:translate-x-1 hover:font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-dark-text">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'Safety', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-surf-crest hover:text-de-york transition-all duration-300 dark:text-dark-text dark:hover:text-dark-accent hover:translate-x-1 hover:font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-como/30 text-center text-surf-crest text-sm dark:border-dark-border/30 dark:text-dark-text/80 transition-colors duration-300">
          <p>© {new Date().getFullYear()} MetalShares. All rights reserved.</p>
          <p className="mt-2">
            Precious metals are subject to market fluctuations and investment risks. 
            Past performance is not indicative of future results.
          </p>
          <p className="mt-2">
            This is a demo website for illustrative purposes only. Not a real financial service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
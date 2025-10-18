// components/ui/TestimonialCard.tsx
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  className?: string;
  showVerification?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  content, 
  rating, 
  className = '', 
  showVerification = false 
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-limed-oak dark:text-dark-limed-oak' : 'text-surf-crest dark:text-dark-surf-crest'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className={`rounded-2xl border border-everglade/20 bg-spring-wood/70 backdrop-blur-sm shadow-lg p-6 glass-effect transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] ${className}`}>
      <div>
        <div className="flex mb-4">
          {renderStars()}
        </div>
        <p className="text-como italic mb-4 dark:text-dark-text/90">"{content}"</p>
        <div className="flex items-center">
          <div className="bg-surf-crest rounded-full w-10 h-10 flex items-center justify-center mr-3 dark:bg-dark-surf-crest">
            <span className="text-everglade font-bold dark:text-dark-text">{name.charAt(0)}</span>
          </div>
          <div>
            <h4 className="font-bold text-everglade dark:text-dark-text">{name}</h4>
            <p className="text-sm text-como dark:text-dark-text/80">{role}</p>
            {showVerification && (
              <div className="flex items-center mt-1">
                <svg className="w-4 h-4 text-everglade mr-1 dark:text-dark-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-everglade dark:text-dark-text">Verified Investor</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm = ({ className = '' }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Simulate form submission
    setTimeout(() => {
      if (email && email.includes('@')) {
        setMessage({ type: 'success', text: 'Thank you for subscribing!' });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-stretch" role="form" aria-label="Newsletter subscription form">
        <div className="flex-grow w-full sm:w-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full py-6 px-6 h-14" // Using consistent padding with lg buttons
            aria-label="Email address"
            aria-describedby={message ? "newsletter-form-message" : undefined}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="whitespace-nowrap w-full sm:w-auto"
          aria-label={isSubmitting ? "Subscribing, please wait" : "Subscribe to newsletter"}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      {message && (
        <div 
          id="newsletter-form-message"
          className={`mt-4 text-center p-4 rounded-lg ${
            message.type === 'success' 
              ? 'bg-de-york/20 text-everglade dark:bg-dark-de-york/30 dark:text-dark-everglade' 
              : 'bg-destructive/20 text-destructive dark:bg-destructive/30 dark:text-destructive-foreground'
          }`}
          role="alert"
          aria-live="polite"
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
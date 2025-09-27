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
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full py-6 px-6"
            aria-label="Email address"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      {message && (
        <div className={`mt-4 text-center p-3 rounded-lg ${
          message.type === 'success' 
            ? 'bg-de-york/30 text-everglade' 
            : 'bg-pot-pourri text-everglade'
        }`}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
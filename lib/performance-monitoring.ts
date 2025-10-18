import { reportWebVitals } from './analytics';

// Performance monitoring utility that captures and reports various metrics
export const initPerformanceMonitoring = () => {
  // Report Core Web Vitals
  reportWebVitals((metric: any) => {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vital', {
        event_category: 'Web Vitals',
        event_label: metric.id, // The metric name (e.g., 'FCP', 'LCP', 'CLS', 'FID', 'INP')
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // The metric value
        non_interaction: true,
      });
    }
    
    // Additionally send to a custom endpoint for performance monitoring
    // This could be your own backend or a service like DataDog, New Relic, etc.
    navigator.sendBeacon('/api/performance', JSON.stringify(metric));
  });

  // Additional performance monitoring could be implemented here
  // For example, monitoring resource loading, API response times, etc.
  
  // Performance Observer for long tasks (potential jank)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Report long tasks (anything over 50ms) that could cause jank
        if (entry.duration > 50) {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'long_task', {
              event_category: 'Performance',
              value: Math.round(entry.duration),
              event_label: `${entry.name} (${entry.entryType})`,
              non_interaction: true,
            });
          }
        }
      }
    });
    
    observer.observe({ entryTypes: ['longtask'] });
  }
};

// Function to measure and report specific custom metrics
export const reportCustomMetric = (name: string, value: number, label?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, {
      event_category: 'Custom Metrics',
      value: Math.round(value),
      event_label: label,
      non_interaction: true,
    });
  }
};
// Core Web Vitals monitoring utility
export const reportWebVitals = (onPerfEntry?: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

// Function to send Core Web Vitals to Google Analytics
export const sendWebVitalsToAnalytics = () => {
  // This function will be called in _app.tsx to report Core Web Vitals
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
  });
};
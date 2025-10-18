import { ImageProps } from 'next/image';

// Image optimization utility functions
export const optimizeImage = (src: string, width?: number, quality?: number): string => {
  // For local images, return as is (Next.js will optimize automatically)
  if (src.startsWith('/')) {
    return src;
  }
  
  // For external images, ensure they're from trusted domains
  const allowedDomains = [
    'images.unsplash.com',
    'res.cloudinary.com',
    'via.placeholder.com',
  ];
  
  try {
    const url = new URL(src);
    if (!allowedDomains.includes(url.hostname)) {
      console.warn(`Image domain ${url.hostname} is not in allowed list`);
      return src;
    }
    
    // Return optimized URL with parameters
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (quality) params.set('q', quality.toString());
    
    return src + (params.toString() ? `?${params.toString()}` : '');
  } catch (error) {
    console.error('Invalid image URL:', src);
    return src;
  }
};

// Default image optimization settings
export const defaultImageSettings = {
  quality: 75,
  loading: 'lazy' as const,
  placeholder: 'blur' as const,
};

// Responsive image sizes configuration
export const imageSizes = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
};

// Generate responsive image sources
export const generateImageSources = (src: string, sizes: number[]) => {
  return sizes.map(size => ({
    src: optimizeImage(src, size),
    width: size,
  }));
};

// Preload important images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};
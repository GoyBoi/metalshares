import Image, { ImageProps } from 'next/image';
import { defaultImageSettings } from '@/lib/image-optimization';
import clsx from 'clsx';

// Optimized Image component with default settings
export const OptimizedImage = ({ 
  src, 
  alt, 
  className,
  quality = defaultImageSettings.quality,
  loading = defaultImageSettings.loading,
  placeholder = defaultImageSettings.placeholder,
  ...props 
}: ImageProps) => {
  // Handle placeholder images
  const getImageSrc = () => {
    if (typeof src === 'string' && src.startsWith('/placeholder-')) {
      // For placeholder images, we'll use a solid color as placeholder
      return src;
    }
    return src;
  };

  return (
    <Image
      src={getImageSrc()}
      alt={alt}
      className={clsx('transition-all duration-300', className)}
      quality={quality}
      loading={loading}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default OptimizedImage;
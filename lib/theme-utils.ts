/**
 * Theme Utilities
 * Provides utility functions and constants for consistent theme handling
 * across all components in the MetalShares application.
 */

// Color contrast checker function
export function checkContrastRatio(foreground: string, background: string): number {
  const fg = parseColor(foreground);
  const bg = parseColor(background);
  
  const l1 = getLuminance(fg);
  const l2 = getLuminance(bg);
  
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

// Parse hex or rgb color string to RGB values
function parseColor(color: string): { r: number; g: number; b: number } {
  // Handle hex colors
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    let r, g, b;

    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }

    return { r, g, b };
  }

  // Handle rgba(r,g,b,a) or rgb(r,g,b) formats
  if (color.startsWith('rgb')) {
    const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (match) {
      return {
        r: parseInt(match[1], 10),
        g: parseInt(match[2], 10),
        b: parseInt(match[3], 10)
      };
    }
  }

  // Default fallback
  return { r: 0, g: 0, b: 0 };
}

// Calculate relative luminance
function getLuminance(rgb: { r: number; g: number; b: number }): number {
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// WCAG contrast ratio checks
export const WCAGContrast = {
  AA_NORMAL: 4.5,   // Minimum for normal text
  AA_LARGE: 3.0,    // Minimum for large text (14pt+ bold or 18pt+)
  AAA_NORMAL: 7.0,  // Enhanced for normal text
  AAA_LARGE: 4.5    // Enhanced for large text
};

// Check if contrast meets WCAG standards
export function meetsWCAGStandard(foreground: string, background: string, level: 'AA' | 'AAA' = 'AA', size: 'normal' | 'large' = 'normal'): boolean {
  const ratio = checkContrastRatio(foreground, background);
  
  if (level === 'AAA') {
    return ratio >= WCAGContrast[`AAA_${size.toUpperCase() as 'NORMAL' | 'LARGE'}`];
  } else {
    return ratio >= WCAGContrast[`AA_${size.toUpperCase() as 'NORMAL' | 'LARGE'}`];
  }
}

// Theme-aware class builder
export function buildThemeClasses(baseClasses: string, lightClasses?: string, darkClasses?: string): string {
  let result = baseClasses || '';
  
  if (lightClasses) {
    result += ` ${lightClasses}`;
  }
  
  if (darkClasses) {
    result += ` dark:${darkClasses}`;
  }
  
  return result.trim();
}
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for hover and animation effects
export const hoverEffects = {
  // Basic hover effects
  'hover-lift': 'hover:-translate-y-1 hover:shadow-lg transition-transform duration-300',
  'hover-scale': 'hover:scale-105 transition-transform duration-300',
  'hover-glow': 'hover:shadow-everglade/30 dark:hover:shadow-dark-everglade/30 transition-shadow duration-300',
  
  // Glass morphism hover effects
  'hover-glass': 'hover:bg-spring-wood/90 dark:hover:bg-dark-spring-wood/40 transition-all duration-300',
  'hover-glass-everglade': 'hover:bg-everglade/20 dark:hover:bg-dark-everglade/30 transition-all duration-300',
  
  // Specialized button hover effects
  'btn-hover-everglade': 'hover:bg-everglade hover:text-spring-wood dark:hover:bg-dark-como transition-colors duration-300',
  'btn-outline-hover': 'hover:bg-everglade/80 hover:text-spring-wood dark:hover:bg-dark-everglade dark:hover:text-dark-spring-wood transition-colors duration-300',
};

// Animation utility classes
export const animations = {
  'fade-in': 'animate-fade-in',
  'slide-up': 'animate-slide-up',
  'scale-up': 'animate-scale-up',
  'pulse-slow': 'animate-pulse-slow',
  'fade-in-delayed': 'animate-fade-in animation-delay-300',
  'slide-up-delayed': 'animate-slide-up animation-delay-200',
};

// Utility function to combine classes with hover effects
export function getHoverClass(baseClass: string, hoverType: keyof typeof hoverEffects = 'hover-lift') {
  return cn(baseClass, hoverEffects[hoverType]);
}

// Utility function to combine classes with animations
export function getAnimatedClass(baseClass: string, animationType: keyof typeof animations = 'fade-in') {
  return cn(baseClass, animations[animationType]);
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Luxury Green palette
        'everglade': '#1a3d2e',
        'como': '#4f7d5d',
        'de-york': '#8cc090',
        'surf-crest': '#cee3d6',
        'spring-wood': '#f6f8f1',
        
        // Dark mode variants for green palette
        'dark-everglade': '#0f2a1f',
        'dark-como': '#3a5f47',
        'dark-de-york': '#6a9d73',
        'dark-surf-crest': '#9db3a9',
        'dark-spring-wood': '#d4d6d1',
        
        // Background colors
        'dark-bg': '#1c3239',
        
        // Old Money palette
        'limed-oak': '#a38c4d',
        'green-smoke': '#b0a56d',
        'thistle-green': '#c8c59d',
        'stark-white': '#e2d6bb',
        'pot-pourri': '#f1dfd5',
        
        // Dark mode variants for old money palette
        'dark-limed-oak': '#c9b35b',
        'dark-green-smoke': '#a89b6a',
        'dark-thistle-green': '#b8b08a',
        'dark-stark-white': '#d0c0a0',
        'dark-pot-pourri': '#e0c9b3',
        
        // Dark mode text and UI colors
        'dark-text': '#e6e1d4',
        'dark-accent': '#a3c4bc',
        'dark-card': '#2a4248',
        'dark-border': '#3a5258',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      border: {
        'glass': '1px solid rgba(255, 255, 255, 0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
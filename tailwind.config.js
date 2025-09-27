/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        
        // Dark mode variants
        'dark-everglade': '#0f2a1f',
        'dark-como': '#3a5f47',
        'dark-de-york': '#6a9d73',
        'dark-surf-crest': '#9db3a9',
        'dark-spring-wood': '#d4d6d1',
        
        // Old Money palette
        'limed-oak': '#a38c4d',
        'green-smoke': '#b0a56d',
        'thistle-green': '#c8c59d',
        'stark-white': '#e2d6bb',
        'pot-pourri': '#f1dfd5',
        
        // Dark mode variants
        'dark-limed-oak': '#8a7435',
        'dark-green-smoke': '#8d7f5a',
        'dark-thistle-green': '#9e9b7d',
        'dark-stark-white': '#b9a98f',
        'dark-pot-pourri': '#cbb9a3',
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
      }
    },
  },
  plugins: [],
};
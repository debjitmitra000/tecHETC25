/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        surface: '#1E1E1E',
        primary: '#8B5CF6',
        secondary: '#EC4899',
        accent: '#10B981',
        // 'neon-cse': '#00FFFF', // Cyan
        // 'neon-ece': '#FF00FF', // Magenta
        // 'neon-me': '#FFFF00',  // Yellow
        // 'neon-ce': '#00FF00',  // Green
        // 'neon-ee': '#FF8800',  // Orange
        'neon-cse': '#5ECBF9', // Softer Cyan
  'neon-ece': '#D185C6', // Muted Magenta
  'neon-me': '#EEDC82',  // Warm Yellow
  'neon-ce': '#82C882',  // Gentle Green
  'neon-ee': '#E3A261',  // Soft Orange
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"VT323"', 'monospace', 'ui-monospace'],
        sans: ['"Chakra Petch"', 'sans-serif'],
      },
      animation: {
        'pixel-shift': 'pixel-shift 2s steps(4) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'scan-line': 'scan-line 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pixel-shift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #333333 1px, transparent 1px), linear-gradient(to bottom, #333333 1px, transparent 1px)',
      },
      boxShadow: {
        'neon-cse': '0 0 5px #00FFFF, 0 0 10px #00FFFF',
        'neon-ece': '0 0 5px #FF00FF, 0 0 10px #FF00FF',
        'neon-me': '0 0 5px #FFFF00, 0 0 10px #FFFF00',
        'neon-ce': '0 0 5px #00FF00, 0 0 10px #00FF00',
        'neon-ee': '0 0 5px #FF8800, 0 0 10px #FF8800',
      },
    },
  },
  plugins: [],
};
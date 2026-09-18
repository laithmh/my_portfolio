import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        neu: {
          light: '#e0e5ec',
          dark: '#1c222d',
          darkSurface: '#161b24',
          primary: '#1a3a5f',
          primaryDark: '#60a5fa',
          secondary: '#5d7d9e',
          secondaryDark: '#94a3b8',
        }
      },
      boxShadow: {
        'neu-flat': '6px 6px 14px #a3b1c6, -6px -6px 14px #ffffff',
        'neu-flat-sm': '3px 3px 8px #a3b1c6, -3px -3px 8px #ffffff',
        'neu-pressed': 'inset 3px 3px 8px #a3b1c6, inset -3px -3px 8px #ffffff',
        'neu-dark-flat': '6px 6px 14px #10141b, -6px -6px 14px #28303f',
        'neu-dark-flat-sm': '3px 3px 8px #10141b, -3px -3px 8px #28303f',
        'neu-dark-pressed': 'inset 3px 3px 8px #10141b, inset -3px -3px 8px #28303f',
      }
    },
  },
  plugins: [aspectRatio],
}

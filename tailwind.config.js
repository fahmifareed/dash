/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a192f',
          900: '#0f2744',
          800: '#1a365d',
          700: '#2a4365',
        }
      }
    },
  },
  plugins: [],
};
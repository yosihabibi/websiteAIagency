/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        blue: {
          900: '#0D1B3E',
          950: '#0A1128',
        },
        indigo: {
          600: '#4F46E5',
          700: '#4338CA',
        },
      },
    },
  },
  plugins: [],
};
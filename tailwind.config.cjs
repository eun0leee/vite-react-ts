/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      spoqa: ['Spoqa Han Sans Neo', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
      },
      boxShadow: {
        example: '0 0 18px 0 rgba(191, 192, 196, 0.18)',
      },
      spacing: {
        '6px': '0.375rem',
      },
    },
  },
  plugins: [],
};

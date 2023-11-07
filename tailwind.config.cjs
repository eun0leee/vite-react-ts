/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      pretendard: ['Pretendard'],
    },
    extend: {
      colors: {
        'error-50': '#feeaee',
        'error-100': '#fcbec9',
        'error-200': '#fb9faf',
        'error-300': '#f9738b',
        'error-400': '#f85875',
        'error-500': '#f62e52',
        'error-600': '#e02a4b',
        'error-700': '#af213a',
        'error-800': '#87192d',
        'error-900': '#671322',
        'blue-25': '#f9f9fc',
        'blue-50': '#eaeffe',
        'blue-100': '#becefc',
        'blue-200': '#9fb6fb',
        'blue-300': '#7394f9',
        'blue-400': '#5880f8',
        'blue-500': '#2e60f6',
        'blue-600': '#2a57e0',
        'blue-700': '#2144af',
        'blue-800': '#193587',
        'blue-900': '#132867',
        'gray-0': '#fff',
        'gray-50': '#f1f1f2',
        'gray-100': '#d4d5d7',
        'gray-200': '#bfc0c4',
        'gray-300': '#a2a4a9',
        'gray-400': '#909298',
        'gray-500': '#74777e',
        'gray-600': '#6a6c73',
        'gray-700': '#525459',
        'gray-800': '#404145',
        'gray-900': '#313235',
      },
      boxShadow: {
        example: '0 0 18px 0 rgba(191, 192, 196, 0.18)',
      },
      spacing: {
        '6px': '0.375rem',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        /* Pretendard */
        '.pretendard-bold24': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: 1.6,
          letterSpacing: '0.48px',
        },
        '.pretendard-bold20': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: 1.6,
          letterSpacing: '0.4px',
        },
        '.pretendard-bold18': {
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: 1.6,
          letterSpacing: '0.36px',
        },
        '.pretendard-bold16': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '26px',
          letterSpacing: '0.02em',
        },
        '.pretendard-medium20': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 1.6,
          letterSpacing: '0.4px',
        },
        '.pretendard-medium16': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 1.6,
          letterSpacing: '0.32px',
        },
        '.pretendard-medium14': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 1.6,
          letterSpacing: '0.28px',
        },
        '.pretendard-medium12': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
          letterSpacing: '0.24px',
        },
        '.pretendard-regular16': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 200,
          lineHeight: 1.6,
          letterSpacing: '0.32px',
        },
        '.pretendard-regular12': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: 200,
          lineHeight: 'normal',
          letterSpacing: '0.6px',
        },
      });
    },
    ({ addComponents }) => {
      addComponents({
        '.hide-scroll::-webkit-scrollbar': {
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          overflowY: 'scroll',
          display: 'none',
        },

        /* progress bar */
        '.rateProgress::-webkit-progress-bar': {
          background: '#fff6ee',
          borderRadius: '8px',
          height: '16px',
          width: '120px',
          overflow: 'hidden',
        },
        '.rateProgress::-webkit-progress-value': {
          background: '#f57f17',
          height: '16px',
        },
      });
    },
  ],
};
